import React from "react";
import aboutImg from "../../assets/aboutImg5.png";

const About = () => {
  return (
    <section id="about" className="w-full bg-[#000000] text-white pb-30 px-4 sm:px-8 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            What <span className="text-[var(--primary-color)]">We</span> Do 
            
          </h2>

          <p className="text-gray-400 text-justify text-sm sm:text-base max-w-md mx-auto md:mx-0">
            At Axstar we help businesses succeed by combining technology, strategy, and practical solutions. From designing custom software to guiding digital transformation and optimizing business processes, we deliver services that make your operations smarter, faster, and ready to scale.
          </p>

          <a href="/about#about-hero">
            <button className="cursor-pointer px-10 py-2 text-sm rounded-lg border border-neutral-500 text-green-200 hover:bg-green-800">
                See More About Us
          </button>
          </a>
          
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end items-center">
          
          {/* IMAGE */}
          <img
            src={aboutImg}
            alt="about"
            className="
              w-[70%] 
              sm:w-[60%] 
              md:w-[70%] 
              lg:w-[70%] 
              xl:w-[70%]
              max-w-[400px] 
              lg:max-w-[500px]
              object-contain
            "
          />

          {/* GLOW RING */}
          <div className="
            absolute 
            w-[180px] h-[180px] 
            sm:w-[220px] sm:h-[220px] 
            md:w-[260px] md:h-[260px] 
            lg:w-[300px] lg:h-[300px]
            border-[6px] border-[#5dc192]/30 
            rounded-full blur-3xl
          "></div>

        </div>
      </div>
    </section>
  );
};

export default About;