import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import StarsBackground from './components/StarsBackground'
import { HashRouter as Router, Routes, Route } from "react-router-dom" 
import {Home} from './pages/home'
import {About} from './pages/about'
import {Founders} from './pages/founders'
import {Services} from './pages/services'
import {Portfolio} from './pages/portfolio'
import { Contactus } from './pages/contactus'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-y-scroll scroll-smooth'>
      <StarsBackground />
      <Navbar/>
      <div className='flex-grow w-full'>
        <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/founders' element={<Founders/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contactus/>}/>
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default App