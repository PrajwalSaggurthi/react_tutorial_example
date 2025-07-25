import React from 'react';
import { motion } from 'framer-motion';

// Data for the about section content
const aboutContent = [
  {
    heading: 'Our Genesis',
    text: 'BrandDo Creative is a full-service digital marketing agency dedicated to forging powerful digital identities for startups, small businesses, and ambitious brands through strategic branding, compelling content, and performance-driven marketing.',
    highlight: ['powerful digital identities', 'performance-driven marketing']
  },
  {
    heading: 'Our Mission',
    text: 'Born from a desire to correct the imbalances of traditional agencies, BrandDo was founded on the principle that every brand deserves clarity, creativity, and consistency. We are committed to making digital marketing more strategic, adaptive, and results-focused for everyone.',
    highlight: ['clarity, creativity, and consistency', 'strategic, adaptive, and results-focused']
  },
  {
    heading: 'Our Expertise',
    text: 'We specialize in branding, social media marketing, SEO, ad film production, and website development—all unified by data-driven strategy. We don’t just create visuals; we build brands that connect, convert, and command attention.',
    highlight: ['data-driven strategy', 'connect, convert, and command attention']
  },
  {
    heading: 'Our Philosophy',
    text: 'In a universe of fleeting trends, we don’t just follow the stars—we build constellations. At BrandDo Creative, we create brands that lead.',
    highlight: ['we build constellations', 'brands that lead']
  }
];

// Animation variants for the fade-in effect
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.8,
      ease: 'easeOut'
    }
  })
};

// Animated gradient for headings and highlights
const headingGradient = 'from-blue-300 via-sky-300 to-purple-400';
const highlightGradient = 'from-cyan-300 via-blue-400 to-purple-500';

const AboutSection = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto py-24 px-4 flex flex-col items-center">
      {aboutContent.map((item, i) => (
        <motion.div
          key={item.heading}
          className="w-full mb-16 last:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={i}
          variants={sectionVariants}
        >
          <div className="relative bg-black/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl group overflow-hidden">
            {/* Animated nebula/aurora background */}
            <div className="absolute inset-0 z-0 pointer-events-none animate-nebula-fade">
              <svg width="100%" height="100%" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <radialGradient id="aurora1" cx="50%" cy="50%" r="60%" fx="60%" fy="40%">
                    <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.18" />
                    <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="aurora2" cx="50%" cy="50%" r="60%" fx="30%" fy="70%">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.12" />
                    <stop offset="80%" stopColor="#818cf8" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <ellipse cx="200" cy="80" rx="180" ry="60" fill="url(#aurora1)" className="animate-aurora1" />
                <ellipse cx="120" cy="120" rx="100" ry="40" fill="url(#aurora2)" className="animate-aurora2" />
              </svg>
            </div>
            {/* Heading with animated gradient and subtle glow on hover */}
            <h2 className={`relative z-10 text-3xl md:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r ${headingGradient} transition-all duration-300`}>
              <span className="animated-gradient-text">{item.heading}</span>
            </h2>
            {/* Paragraph with highlighted, interactive text */}
            <p className="relative z-10 text-lg md:text-xl text-slate-200/90 leading-relaxed">
              {item.text.split(new RegExp(`(${item.highlight.join('|')})`, 'g')).map((part, index) =>
                item.highlight.includes(part) ? (
                  <span key={index} className="relative font-semibold highlight-container">
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${highlightGradient} highlight-text transition-all duration-300`}>
                      {part}
                    </span>
                  </span>
                ) : (
                  part
                )
              )}
            </p>
          </div>
        </motion.div>
      ))}
      <style>{`
        /* Aurora/nebula SVG animation */
        @keyframes aurora1 {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.7; }
          50% { transform: scale(1.08) translateY(-8px); opacity: 1; }
        }
        @keyframes aurora2 {
          0%, 100% { transform: scale(1) translateY(0); opacity: 0.5; }
          50% { transform: scale(1.12) translateY(10px); opacity: 0.8; }
        }
        .animate-aurora1 { animation: aurora1 7s ease-in-out infinite alternate; }
        .animate-aurora2 { animation: aurora2 9s ease-in-out infinite alternate; }
        .animate-nebula-fade { animation: fadeIn 1.2s cubic-bezier(.4,1.6,.6,1) both; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        /* Highlight aurora effect */
        .highlight-container:hover .highlight-text {
          filter: brightness(1.2);
        }
        /* Animated gradient text for headings */
        .animated-gradient-text {
          background-size: 200% 200%;
          animation: gradientMove 4s ease-in-out infinite alternate;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;