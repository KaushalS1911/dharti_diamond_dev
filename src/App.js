import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Suggestions from './Components/Suggestions'
import Contact from './Components/Contact'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<About />}/>
        <Route path='/suggestions' element={<Suggestions />}/>
        <Route path='/contact' element={<Contact  />}/>
      </Routes>
    </div>
  )
}

export default App