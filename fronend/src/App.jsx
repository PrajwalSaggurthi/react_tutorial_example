import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { HashRouter as Router, Routes, Route } from "react-router-dom" 
import {Home} from './pages/home'
import {About} from './pages/about'
import {Founders} from './pages/founders'
import {Services} from './pages/services'
import {Portfolio} from './pages/portfolio'
import { Contactus } from './pages/contactus'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='overflow-x-hidden items-center px-10 flex-grow'>
        <Navbar/>
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