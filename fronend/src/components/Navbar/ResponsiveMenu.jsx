import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { NavbarMenu, NavContact_us} from '../../mockData/data'

const ResponsiveMenu = ({open, setOpen}) => {
  const handleLinkClick = () => setOpen(false);
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{opacity: 0, y: -40, scale: 0.98}}
          animate={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.32, ease: [0.4, 0.8, 0.2, 1]}}
          exit={{opacity: 0, y: -40, scale: 0.98}}
          className='fixed top-20 left-0 w-full h-[calc(100vh-5rem)] z-40 flex justify-center items-start'
        >
          <div className='w-[92vw] max-w-xl mt-6 bg-black/5 backdrop-blur-xs border border-white/10 rounded-3xl shadow-2xl p-8 text-xl font-semibold uppercase text-white text-shadow-lg animate-fade-in'>
            <ul className='flex flex-col justify-center items-center gap-8'>
              {NavbarMenu.map((item) => (
                <li key={item.id} className='text-shadow-lg'>
                  <a
                    href={item.link}
                    className='inline-block py-1 px-3 hover:text-[var(--color-primary)] font-semibold duration-200 transition-transform transform hover:scale-110'
                    onClick={handleLinkClick}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li key={NavContact_us.id} className='text-shadow-lg py-1 hover:scale-105 duration-200'>
                <a
                  href={NavContact_us.link}
                  className='bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-[var(--color-highlight)] hover:text-[var(--color-primary)] py-2 px-4 rounded-full font-semibold text-shadow-lg duration-200 transition-transform transform hover:scale-110'
                  onClick={handleLinkClick}
                >
                  {NavContact_us.title}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ResponsiveMenu