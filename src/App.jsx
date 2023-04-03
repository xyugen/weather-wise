import React from 'react'
import './tailwind.css'

const App = () => {
  return (
    <div className='h-screen flex flex-col items-center bg-gray-50 font-pops p-10 text-gray-800'>
      <div>
        <input
          type="text"
          title='Search'
          placeholder='Search...'
          className='p-3 rounded-md bg-gray-800 text-white'
        />
        search icon
      </div>
      
      <div className='mx-5 font-extralight flex justify-center flex-col h-full'>
        <div className='text-center mb-5'>
          <h1 className='lg:text-5xl text-3xl'>Belgrade, Serbia</h1>
          <p>Wed, 5 Sep 2020</p>
        </div>

        <div className='grid grid-cols-2 mb-2'>
          <div className='text-center'>
            <p className='text-7xl font-bold'>23°C</p>
            <p className='text-lg'>Partly Sunny</p>
            <p>Update 1:48pm</p>
          </div>

          <div>
            <img src="" alt="Weather" />
          </div>
        </div>
        <div className='grid grid-cols-3 text-sm text-center'>
          <p>Barometer 1009.0 mb</p>
          <p>Feels like 25°C</p>
          <p>Humidity 41%</p>
        </div>
      </div>
    </div>
  )
}

export default App