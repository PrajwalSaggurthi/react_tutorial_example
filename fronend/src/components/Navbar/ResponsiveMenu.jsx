import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { NavbarMenu, NavContact_us} from '../../mockData/data'

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{opacity: 0, y:-100}}
          animate={{opacity: 1, y:0}}
          transition={{duration: 0.3}}
          exit={{opacity: 0, y:-100}}
          className='absolute top-20 left-0 w-full h-screen z-20'  
        >
        <div className='text-xl font-semibold uppercase bg-[var(--color-primary)] text-white text-shadow-lg py-8 px-4 m-6 rounded-3xl'>
          <ul className='flex flex-col justify-center items-center gap-8'>
          {
                        NavbarMenu.map((item) => {
                            return (
                                <li key={item.id} className='text-shadow-lg'>
                                    <a href={item.link} className='inline-block py-1 px-3 hover:text-[var(--color-highlight)] font-semibold duration-200'>{item.title}</a>
                                </li>
                            )
                        })
                    }
                    <li key={NavContact_us.id} className='text-shadow-lg py-1 hover:scale-105 duration-200'>
                        <a href={NavContact_us.link} className='bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-highlight)] hover:text-[var(--color-primary)] py-2 px-4 rounded-full font-semibold text-shadow-lg duration-200'>{NavContact_us.title}</a>
                    </li>
          </ul>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu