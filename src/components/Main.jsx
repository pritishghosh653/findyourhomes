import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './view/Home';
import About from './view/About';
import Contact from './view/Contact';
import Findyourhomes from './view/Findyourhomes';

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/findyourhomes' element={<Findyourhomes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Main
