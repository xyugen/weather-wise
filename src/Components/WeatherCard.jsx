import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

const Tilt = (props) => {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
}

const WeatherCard = ({ data }) => {
    return (
        <Tilt
            className='bg-gray-800/75 p-5 rounded-lg shadow-md shadow-black/75 max-w-xl'>
            <div className='text-center mb-5'>
                <h1 className='lg:text-5xl text-4xl mb-4'>{data['location'].name}, {data['location'].country}</h1>
                <p>Wed, 5 Sep 2020</p>
            </div>

            <div className='grid grid-cols-2 mb-2'>
                <div className='text-center lg:text-xl text-l'>
                <p className='lg:text-7xl text-6xl font-bold'>{data['current'].temp_c}°C</p>
                <p>{data['current']['condition'].text}</p>
                <p>Update {formatTime(data['current'].last_updated)}</p>
                </div>

                <div className='flex align-center justify-center'>
                <img src={data['current']['condition'].icon} alt="Weather" />
                </div>
            </div>
            <div className='grid grid-cols-3 text-sm text-center'>
                <p>Barometer {data['current'].pressure_mb} mb</p>
                <p>Feels like {data['current'].feelslike_c}°C</p>
                <p>Humidity {data['current'].humidity}%</p>
            </div>
        </Tilt>
  )
}

export default WeatherCard