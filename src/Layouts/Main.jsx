import React, { useState } from 'react'
import EmbedLink from '../Components/EmbedLink'
import IntroBanner from '../Components/IntroBanner'

import SearchBar from '../Components/SearchBar'
import WeatherCard from '../Components/WeatherCard'

import { weatherStatus } from '../Services/weatherapi'

const Main = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState('');

    const handleSearchResults = async (data) => {
        const newCity = `${data.name} ${data.country}`;
        setCity(newCity);
        setWeatherData(await weatherStatus(encodeURIComponent(newCity))); // pass updated city as argument
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
        <div className='h-screen flex flex-col items-center p-5 bg-gray-950 font-pops text-gray-300 selection:bg-gray-300 selection:text-gray-900'>

        <SearchBar onSearchResults={handleSearchResults} />
        
        <main className='mx-5 font-extralight flex justify-center flex-col h-full'>
        { weatherData['location'] ? (
            <>
                <WeatherCard data={weatherData} />
                <EmbedLink city={city} />
            </>
        ) : (
            <IntroBanner areLinksDisplayed={true} />
        )}
        </main>

        <footer className='bottom-0 flex flex-col justify-center items-center p-5 border-t border-gray-800 w-screen text-gray-500'>
            <p className='text-l'>&copy; Yugen 2023</p>
            <p className='text-sm'>All Rights Reserved</p>
        </footer>
        </div>
    )
}

export default Main