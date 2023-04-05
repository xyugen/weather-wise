import React, { useState } from 'react'
import axios from 'axios';

import './tailwind.css'
import SearchBar from './SearchBar';

const App = () => {
  const URL = "https://api.weatherapi.com/v1/";

  const [weatherData, setWeatherData] = useState([]);

  const weatherStatus = async (city) => {
    await axios.get(`${URL}current.json?key=${process.env.REACT_APP_API_KEY}&q=${encodeURIComponent(city)}&aqi=no`)
      .then(response => setWeatherData(response.data))
      .catch(error => console.error(error));
  }

  const handleSearchResults = (data) => {
    const newCity = `${data.name} ${data.country}`;
    weatherStatus(newCity); // pass updated city as argument
  };  

  const formatTime = (datetime) => {
    const date = new Date(datetime);
    return date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  }  

  return (
    <div className='h-screen flex flex-col items-center p-5 bg-gray-950 font-pops text-gray-300'>

        <SearchBar onSearchResults={handleSearchResults} />
        
        {weatherData['location'] &&
        <div className='mx-5 font-extralight flex justify-center flex-col h-full'>
          <div className='text-center mb-5'>
            <h1 className='lg:text-5xl text-4xl mb-4'>{weatherData['location'].name}, {weatherData['location'].country}</h1>
            <p>Wed, 5 Sep 2020</p>
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
        </div>
        }


      <footer className='absolute bottom-0 flex flex-col justify-center items-center p-5 border-t border-gray-800 w-screen text-gray-500'>
        <p className='text-l'>&copy; Yugen 2023</p>
        <p className='text-sm'>All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App