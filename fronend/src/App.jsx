import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import StarsBackground from './components/StarsBackground'
import { Home } from './pages/home'
import { About } from './pages/about'
import { Services } from './pages/services'
import { Founders } from './pages/founders'
import { Portfolio } from './pages/portfolio'
import { Contactus } from './pages/contactus'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-gray-800 scroll-smooth'>
      <StarsBackground />
      <Navbar/>
      <main className='flex-grow w-full'>
        <section id='home'><Home /></section>
        <section id='about'><About /></section>
        <section id='services'><Services /></section>
        <section id='founders'><Founders /></section>
        <section id='portfolio'><Portfolio /></section>
        <section id='contact'><Contactus /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App