import React, { useRef, useEffect, useState } from 'react'
import AnimatedHero from '../components/AnimatedHero'

export const Home = () => {
  const [fade, setFade] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setFade(true);
      } else {
        setFade(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={heroRef}
      className={`pt-28 flex justify-center min-h-screen transition-opacity duration-700 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      style={{ position: 'relative', zIndex: 10 }}
    >
      <AnimatedHero />
    </div>
  )
}
