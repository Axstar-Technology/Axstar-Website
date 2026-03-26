import React from "react";
import bgImage from "../../assets/ecomImg1.jpg"; // adjust path if needed

const AboutWhatWeDo = () => {
  return (
    <section
      className="w-full bg-[black]/0 py-35 flex items-center justify-center bg-cover bg-center relative"
      
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 py-12 text-center flex flex-col items-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
         Who We Are
        </h1>

        
        
        {/* Description */}
        <p className="mt-6 text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          Axstar is a modern software and technology company dedicated to building smart, scalable digital solutions. We combine expert engineering, innovative technology, and strategic insight to transform complex business challenges into high-performance software that drives measurable growth.
        </p>

        {/* Description */}
        <p className="mt-6 text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl leading-relaxed">
          From custom applications and AI-driven automation to seamless digital experiences, we empower businesses to innovate, optimize, and scale with confidence. At Axstar, we don’t just develop software, we create the digital foundation for your future success.
        </p>

      </div>
    </section>
  );
};

export default AboutWhatWeDo;