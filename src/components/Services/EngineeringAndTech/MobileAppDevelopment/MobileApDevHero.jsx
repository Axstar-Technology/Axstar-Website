import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const TechNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let count = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const drawWave = (color, amplitude, speed, offset) => {
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = color;

      for (let i = 0; i <= canvas.width; i += 10) {
        // Creates a wave that is flat at the edges and peaks in the middle
        const distanceToCenter = Math.abs(i - canvas.width / 2);
        const centerWeight = Math.exp(-Math.pow(distanceToCenter / (canvas.width / 3), 2));
        
        const y = canvas.height / 2 + 
                 Math.sin(i * 0.005 + count * speed + offset) * amplitude * centerWeight;

        if (i === 0) ctx.moveTo(i, y);
        else ctx.lineTo(i, y);
      }
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      count += 0.02;

      // Draw three layers of waves for depth
      // 1. Deep faint glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#02ffdd';
      drawWave('rgba(2, 255, 221, 0.1)', 100, 1, 0);
      
      // 2. Secondary blue-ish wave
      ctx.shadowBlur = 0;
      drawWave('rgba(59, 130, 246, 0.2)', 80, -0.8, Math.PI);
      
      // 3. Main sharp accent line
      ctx.shadowBlur = 5;
      drawWave('rgba(2, 255, 221, 0.4)', 60, 1.5, 0.5);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
    />
  );
};

const MobileApDevHero = () => {
  return (
    <section 
      id='about-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Background Glows kept as requested */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none" />

      {/* The Neural Wave Animation */}
      <TechNetworkBackground />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Mobile App <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#02ffdd] via-blue-400 to-[#186d60]">
              Development 
          </span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          We believe the best apps are the ones people actually enjoy using. That’s why we focus on blending design, technology, and usability into every mobile solution we build.
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

export default MobileApDevHero;