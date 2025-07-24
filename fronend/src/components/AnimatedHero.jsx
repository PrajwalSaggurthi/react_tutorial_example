import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const heading = 'Where Creativity Meets Strategy.';
const tagline = 'Igniting Brands, Inspiring Growth.';

const AnimatedHero = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
    const timeout = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] w-full px-4">
      <div className="z-10 flex flex-col items-center justify-center w-full pt-16 pb-10">
        <motion.h1
          className="font-extrabold text-4xl md:text-6xl text-center text-white mb-4 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={revealed ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: 'easeOut' }}
        >
          {heading}
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-gray-200 text-center mt-2 font-medium drop-shadow"
          initial={{ opacity: 0, y: 16 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.7, ease: 'easeOut' }}
        >
          {tagline}
        </motion.p>
      </div>
    </section>
  );
};

export default AnimatedHero; 