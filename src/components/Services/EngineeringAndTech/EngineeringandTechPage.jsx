import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const TechStreamBackground = () => {
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

    // Configuration
    const streamCount = 60;
    const streams = [];

    class Stream {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height; // Start off-screen
        this.velocity = Math.random() * 2 + 1;
        this.length = Math.random() * 100 + 50;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y += this.velocity;
        if (this.y > canvas.height) {
          this.reset();
        }
      }

      draw() {
        const gradient = ctx.createLinearGradient(
          this.x, this.y - this.length, 
          this.x, this.y
        );
        gradient.addColorStop(0, 'transparent');
        gradient.addColorStop(1, `rgba(2, 255, 221, ${this.opacity})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y - this.length);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // Small bright head at the tip
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fillRect(this.x - 0.75, this.y, 1.5, 1.5);
      }
    }

    for (let i = 0; i < streamCount; i++) {
      streams.push(new Stream());
    }

    const animate = () => {
      // Create trailing effect by not fully clearing the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      streams.forEach((stream) => {
        stream.update();
        stream.draw();
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const EngineeringandTechPage = () => {
  return (
    <section 
      id='about-hero' 
      className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white"
    >
      
      {/* Deep Background Glows - Kept as requested */}
      <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-[#02ffdd]/10 blur-[150px] pointer-events-none" />

      {/* New Tech Stream Animation */}
      <TechStreamBackground />

      {/* Content Container - Styles strictly maintained */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        
        <h1 className="text-white py-10 text-[2.8rem] sm:text-5xl md:text-[4rem] lg:text-[5rem] tracking-tight leading-[1.1] pb-6">
          Engineering & <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#02ffdd] via-blue-400 to-[#186d60]">Technology</span>
        </h1>

        <p className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequatur deserunt ad eaque corrupti possimus dolore delectus nihil expedita a eum, nemo animi nisi quos illo ea adipisci enim qui.
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

export default EngineeringandTechPage;