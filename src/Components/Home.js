import React from 'react'
import Manufature from '../pages/Home/Manufature'
import Exploration from '../pages/Home/Exploration'
import Letest from '../pages/Home/Letest'
import Round_diamond from '../pages/Home/Round_diamond'
import Footer from './global/Footer'


function Home() {
  return (
    <div>
      <Manufature/>
      <Exploration/>
     
      <Letest/>
      <Round_diamond/>
      <Footer/>
     
    </div>
  )
}

export default Home
