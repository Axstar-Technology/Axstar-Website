import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const NeuralPulseBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const orbs = [];
    const orbCount = 40; // Fewer, larger orbs for a cleaner look

    class GlowingOrb {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseRadius = Math.random() * 20 + 10;
        this.radius = this.baseRadius;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.pulse += this.pulseSpeed;

        // Subtle breathing effect
        this.radius = this.baseRadius + Math.sin(this.pulse) * 8;

        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }

      draw() {
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        
        // Using your brand colors: Teal and Blue
        gradient.addColorStop(0, 'rgba(2, 255, 221, 0.15)');
        gradient.addColorStop(0.5, 'rgba(37, 99, 235, 0.05)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < orbCount; i++) {
      orbs.push(new GlowingOrb());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach(orb => {
        orb.update();
        orb.draw();
      });
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

const WebDevelopmentHero = () => {
  return (
    <section 
      id='about-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Background Glows (Kept from original) */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none" />

      {/* New Neural Pulse Animation */}
      <NeuralPulseBackground />

      {/* Content Container (Kept all your original text & styles) */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Web <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#02ffdd] via-blue-400 to-[#186d60]">
              Development 
          </span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          Stop dreaming, start building! Your website is your first impression. Let’s build something great together.
          At Axstar, we build high-performance, custom websites designed to convert visitors into loyal customers. 
          From managing customers to streamlining workflows, we build smart applications that help businesses run better.
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

export default WebDevelopmentHero;