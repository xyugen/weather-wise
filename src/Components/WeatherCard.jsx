import React, { useEffect, useRef, useState } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { weatherStatus } from '../Services/weatherapi';
import { formatTime, formatDate } from '../Utils';

const Tilt = (props) => {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
        VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
}

const WeatherCard = ({ data = null }) => {
    const [weatherData, setWeatherData] = useState([]);
    const queryParams = new URLSearchParams(window.location.search);
    const city = queryParams.get('city');
    const theme = queryParams.get('theme');
    const tiltClassName = theme === 'dark' ? 'bg-black/10 text-gray-800' : 'bg-white/10 text-gray-300';

    useEffect(() => {
        const fetchData = async () => {
            if (data === null) {
                weatherStatus(city)
                .then(res => setWeatherData(res))
                .catch(err => console.error(err));
            } else {
                setWeatherData(data);
            }
        };
        fetchData();
    }, [city, data]);

    return (
        <>
            {weatherData['location'] &&
            <>
                <Tilt
                    className={`${tiltClassName} p-5 rounded-lg shadow-md shadow-black/75 max-w-xl`}>
                    
                    {weatherData['location'] &&
                    <>
                    <div className='text-center mb-5'>
                        <h1 className='lg:text-5xl text-4xl mb-4'>{weatherData['location'].name}, {weatherData['location'].country}</h1>
                        <p>{formatDate(weatherData['location'].localtime)}</p>
                    </div>

                    <div className='grid grid-cols-2 mb-2'>
                        <div className='text-center lg:text-xl text-l'>
                        <p className='lg:text-7xl text-6xl font-bold'>{weatherData['current'].temp_c}°C</p>
                        <p>{weatherData['current']['condition'].text}</p>
                        <p>Update {formatTime(weatherData['current'].last_updated)}</p>
                        </div>

                        <div className='flex align-center justify-center'>
                        <img src={weatherData['current']['condition'].icon} alt="Weather" />
                        </div>
                    </div>
                    <div className='grid grid-cols-3 text-sm text-center'>
                        <p>Barometer {weatherData['current'].pressure_mb} mb</p>
                        <p>Feels like {weatherData['current'].feelslike_c}°C</p>
                        <p>Humidity {weatherData['current'].humidity}%</p>
                    </div>
                    </>
                }
                </Tilt>
            </>
            }
        </>
  )
}

export default WeatherCard