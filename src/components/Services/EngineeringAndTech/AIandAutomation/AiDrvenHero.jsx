import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const DeepFieldDotsBackground = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    // Setup Dots
    const dots = [];
    
    // To give the illusion of millions, we use thousands but with different focal depth
    const dotCount = 1500; 

    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        // z represents depth (focal distance)
        z: Math.random() * canvas.width, 
        baseSize: Math.random() * 1.5 + 0.5,
        speed: 0.8 + Math.random() * 0.4
      });
    }

    const animate = () => {
      // Clear with very slight fade trail (optional, looks smoother)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      dots.forEach((dot) => {
        // Move dot "forward" (decreasing z distance)
        dot.z -= dot.speed;
        
        // Reset dot when it gets "behind" the camera
        if (dot.z <= 0) {
          dot.z = canvas.width;
          dot.x = Math.random() * canvas.width;
          dot.y = Math.random() * canvas.height;
        }

        // Project 3D depth (z) to 2D screen coordinates (x, y)
        // This is a perspective projection
        const focalLength = canvas.width;
        const projectedX = (dot.x - canvas.width / 2) * (focalLength / dot.z) + canvas.width / 2;
        const projectedY = (dot.y - canvas.height / 2) * (focalLength / dot.z) + canvas.height / 2;
        
        // Size dot based on its depth (closer is larger)
        const size = (focalLength / dot.z) * dot.baseSize;

        // Interaction: If dot is within a range of the mouse, draw a faint connection line
        let alphaConnection = 0;
        if (mouseRef.current.x > 0) {
          let dx = mouseRef.current.x - projectedX;
          let dy = mouseRef.current.y - projectedY;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120 && dot.z < 500) { // only connect closer dots
             alphaConnection = (1 - distance / 120) * 0.4;
             ctx.strokeStyle = `rgba(2, 255, 221, ${alphaConnection})`;
             ctx.lineWidth = 0.5;
             ctx.beginPath();
             ctx.moveTo(projectedX, projectedY);
             ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
             ctx.stroke();
          }
        }

        // Set Dot Color and opacity (dots fade out as they get super close)
        const minAlpha = 0.1;
        const maxAlpha = 0.8;
        // Fade out dots when they are extremely far or near
        let alphaDot = minAlpha + (1 - dot.z / focalLength) * (maxAlpha - minAlpha);
        
        // Boost color if connected to mouse
        if (alphaConnection > 0) {
            ctx.fillStyle = `rgba(2, 255, 221, ${alphaConnection + 0.2})`;
        } else {
            ctx.fillStyle = `rgba(2, 255, 221, ${alphaDot})`;
        }

        // Draw Dot
        if (projectedX > 0 && projectedX < canvas.width && projectedY > 0 && projectedY < canvas.height) {
            ctx.beginPath();
            ctx.arc(projectedX, projectedY, size, 0, Math.PI * 2);
            ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.4 }}
    />
  );
};

const AiDrivenHero = () => {
  return (
    <section 
      id='about-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Background Layer 1: Deep Glows */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none z-0" />

      {/* Background Layer 2: Deep Field Dots Animation */}
      <DeepFieldDotsBackground />

      {/* Content Container (Original Layout) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Scaling your operations with intelligent systems <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#02ffdd] via-blue-400 to-[#186d60]">
            that work while you sleep. 
          </span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          At Axstar, we build AI-driven solutions that help businesses work smarter. Using Machine Learning, Automation, NLP, and Computer Vision, we create intuitive tools that boost efficiency and turn data into your most valuable asset.
        </p>

        <button className="group relative px-12 py-4 text-sm font-bold rounded-full overflow-hidden transition-all">
          <div className="absolute inset-0 bg-[#02ffdd] transition-transform group-hover:scale-105" />
          <div className="relative cursor-pointer flex items-center gap-2 text-black">
            Discover 
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </div>
        </button>

      </div>
    </section>
  );
};

export default AiDrivenHero;