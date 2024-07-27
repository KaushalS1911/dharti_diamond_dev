import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<About />}/>
      </Routes>
    </div>
  )
}

export default App