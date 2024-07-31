import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './Components/About'
import Suggestions from './Components/Suggestions'
import Contact from './Components/Contact'

import './App.css';
import Header from './Components/global/Header';
import HeroSection from './Components/global/HeroSection';
import Home from './Components/Home';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<About/>}/>
                <Route path='/suggestions' element={<Suggestions/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <div className="App">
                <Header/>
                <HeroSection/>
                <Home/>
            </div>
        </div>
    )
}

export default App