import React, { useState } from 'react'
import axios from 'axios';

import './tailwind.css'
import SearchBar from './SearchBar';

import WeatherCard from './WeatherCard';

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

  /**
   * Vanilla Tilt JS Component Options
   */
  /**
   * const options = {
   * scale: 1.2,
   * speed: 1000,
   * max: 30
   * };
   */

  return (
    <div className='h-screen flex flex-col items-center p-5 bg-gray-950 font-pops text-gray-300'>

        <SearchBar onSearchResults={handleSearchResults} />
        
        {weatherData['location'] &&
        <main className='mx-5 font-extralight flex justify-center flex-col h-full'>
          <WeatherCard data={weatherData} />
        </main>
        }


      <footer className='absolute bottom-0 flex flex-col justify-center items-center p-5 border-t border-gray-800 w-screen text-gray-500'>
        <p className='text-l'>&copy; Yugen 2023</p>
        <p className='text-sm'>All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App