import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutHero = () => {
  // Mock data for the reviewer avatars
  const reviewers = [
    { id: 1, url: 'https://i.pravatar.cc/150?u=1' },
    { id: 2, url: 'https://i.pravatar.cc/150?u=2' },
    { id: 3, url: 'https://i.pravatar.cc/150?u=3' },
  ];

  return (
    <section id='about-hero' className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-4 py-30 overflow-hidden bg-[#02110e] text-white">
      
      {/* Background Glow Effect */}
      <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[120%] h-[60%] rounded-[100%] bg-[var(--primary-color)]/40 blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative py-10 z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        

        {/* Heading */}
        <h1 className="h-animate text-neutral-100 text-[2.5rem] sm:text-5xl md:text-[3.3rem] lg:text-[4.1rem] font-medium tracking-w[1rem] leading-tight pb-5">
          Driving Innovation with  <br className="hidden md:block" />
          <span className="text-slate-200">Expertise</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-4xl text-slate-400 text-lg md:text-[1.1rem] leading-relaxed mb-10 px-2">
          Axstar is dedicated to empowering businesses with innovative technology solutions and expert business consulting. We partner with companies of all sizes to drive digital transformation, enhance productivity, and achieve sustainable growth through strategic guidance and cutting-edge technology.
        </p>

        {/* CTA Button */}
        <button className="cursor-pointer px-10 py-2 text-sm rounded-lg
                bg-gradient-to-r from-[#02ffdd] to-[#02ffdd]
                text-black transition flex items-center gap-2">
          Discover Demo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>

      {/* Decorative Stars/Dots */}
      <div className="absolute top-1/4 left-10 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse" />
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse delay-700" />
      <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-white rounded-full opacity-30 animate-pulse delay-1000" />
      <div className="absolute bottom-1/3 right-10 w-1 h-1 bg-white rounded-full opacity-50" />
    </section>
  );
};

export default AboutHero;