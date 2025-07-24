import React, { useRef, useEffect } from 'react';

const STAR_COUNT = 120;
const STAR_COLOR = 'rgba(255,255,255,0.85)';
const STAR_SIZE = [0.7, 1.2, 1.8];
const STAR_SPEED = [0.08, 0.15, 0.22];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

function createStars(width, height) {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: STAR_SIZE[Math.floor(Math.random() * STAR_SIZE.length)],
    speed: STAR_SPEED[Math.floor(Math.random() * STAR_SPEED.length)],
  }));
}

const StarsBackground = () => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    starsRef.current = createStars(width, height);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      for (let star of starsRef.current) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI);
        ctx.fillStyle = STAR_COLOR;
        ctx.shadowColor = '#fff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.closePath();
        // Move star
        star.y += star.speed;
        if (star.y > height) {
          star.x = Math.random() * width;
          star.y = 0;
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      starsRef.current = createStars(width, height);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default StarsBackground; 