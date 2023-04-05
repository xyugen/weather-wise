import React from 'react'

const IntroBanner = ({ areLinksDisplayed = false }) => {
  return (
    <>
        <h1 className='font-bold text-5xl text-gray-200'>Weather Wise</h1>
        <p className='mt-5 text-lg font-medium text-blue-300'>A user-friendly web app that provides accurate and up-to-date weather forecasts for your location. </p>
        { areLinksDisplayed &&
            <div className='flex font-light gap-3 mt-2'>
                <a
                    className='bg-gray-800 p-2 rounded hover:bg-gray-700 transition-all'
                    href="http://https://www.weatherapi.com/" target="_blank" rel="noopener noreferrer">API</a>
                <a
                    className='bg-gray-800 p-2 rounded hover:bg-gray-700 transition-all'
                    href="http://https://github.com/xyugen/weather-wise" target="_blank" rel="noopener noreferrer">Github</a>
            </div> }
    </>
  )
}

export default IntroBanner