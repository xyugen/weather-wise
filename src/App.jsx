import React, { useState } from 'react'
import axios from 'axios';

import './tailwind.css'
import SearchBar from './SearchBar';

const App = () => {
  const URL = "https://api.weatherapi.com/v1/";

  const [weatherData, setWeatherData] = useState([]);

  const [city, setCity] = useState('Manila');

  const weatherStatus = async () => {
    await axios.get(`${URL}current.json?key=${process.env.REACT_APP_API_KEY}&q=${encodeURIComponent(city)}&aqi=no`)
      .then(response => {
        setWeatherData(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const handleSearchResults = (data) => {
    setCity(`${data.name} ${data.country}`);
    weatherStatus();
    console.log(`CITY: `+city);
  }

  const formatTime = (datetime) => {
    const date = new Date(datetime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }  

  return (
    <div className='h-screen flex flex-col items-center bg-gray-50 font-pops p-10 text-gray-800'>
      <SearchBar onSearchResults={(data) => handleSearchResults(data)} />
      
      {weatherData['location'] &&
      <div className='mx-5 font-extralight flex justify-center flex-col h-full'>
        <div className='text-center mb-5'>
          <h1 className='lg:text-5xl text-3xl'>{weatherData['location'].name}, {weatherData['location'].country}</h1>
          <p>Wed, 5 Sep 2020</p>
        </div>

        <div className='grid grid-cols-2 mb-2'>
          <div className='text-center'>
            <p className='text-7xl font-bold'>{weatherData['current'].temp_c}°C</p>
            <p className='text-lg'>{weatherData['current']['condition'].text}</p>
            <p>Update {formatTime(weatherData['current'].last_updated)}</p>
          </div>

          <div className='flex align-center justify-center'>
            <img className='' src={weatherData['current']['condition'].icon} alt="Weather" />
          </div>
        </div>
        <div className='grid grid-cols-3 text-sm text-center'>
          <p>Barometer {weatherData['current'].pressure_mb} mb</p>
          <p>Feels like {weatherData['current'].feelslike_c}°C</p>
          <p>Humidity {weatherData['current'].humidity}%</p>
        </div>
      </div>
      }
    </div>
  )
}

export default App