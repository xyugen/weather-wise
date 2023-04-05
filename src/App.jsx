import React from 'react'

import './tailwind.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Layouts/Main';
import WeatherCard from './Components/WeatherCard';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Main />} />
        <Route path='embed' element={<WeatherCard />} />
      </Routes>
    </Router>
  )
}

export default App