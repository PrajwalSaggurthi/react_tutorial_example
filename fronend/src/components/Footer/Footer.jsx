import React from 'react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className='bg-[var(--color-secondary)] '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-5'>
            {/*About us description*/}
            <div>
                <h2 className='text-gray-200 font-semibold text-lg'>About us</h2>
                <br />
                <p className='text-gray-300'>We help businesses grow through strategic digital marketing solutions tailored to your unique needs and goals.</p>
            </div>
            {/*Quick links*/}

            <div className=''>
                <h2 className='text-gray-200 text-lg font-semibold'>Quick Links</h2>
                <br />
                <ul className='px-4'>
                    <li><a href="/" className='text-gray-300 font-semibold hover:text-[var(--color-primary)] hover:underline'>Home</a></li>
                    <li><a href="#/about" className='text-gray-300 font-semibold hover:text-[var(--color-primary)] hover:underline'>About us</a></li>
                    <li><a href="#/services" className='text-gray-300 font-semibold hover:text-[var(--color-primary)] hover:underline'>Services</a></li>
                    <li><a href="#/founders" className='text-gray-300 font-semibold hover:text-[var(--color-primary)] hover:underline'>Founders</a></li>
                    <li><a href="/contact" className='text-gray-300 font-semibold hover:text-[var(--color-primary)] hover:underline'>Contact Us</a></li>

                </ul>
            </div>
            {/*Social Links*/}
            <div className=''>
                <h1 className='text-gray-200 text-shadow-lg font-semibold'>Follow us</h1>
                <br />
                <ul className='gap-2'>
                    <li><a href="https://www.linkedin.com/in/branddo-creative/" className='text-gray-300 font-semibold hover:text-[var(--color-highlight)] hover:underline'><FaLinkedin className='w-10 h-10'/></a></li>
                    <br />
                    <li><a href="https://www.instagram.com/branddo.creative/" className='text-gray-300 font-semibold hover:text-[var(--color-highlight)] hover:underline'><FaInstagram className='w-10 h-10'/></a></li>
                </ul>
            </div>
        </div>
        <div className='border-t p-4 border-gray-600 text-center mt-6'>
            <p className='text-gray-200 text-shadow-sm font-semibold'>© 2025 BRANDDO Creative. All rights reserved.</p>
        </div>

    </footer>
    </>
  )
}

export default Footer