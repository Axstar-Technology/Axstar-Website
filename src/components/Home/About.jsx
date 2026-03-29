import React from "react";
import aboutImg from "../../assets/aboutImg5.png";

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#000000] text-white py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Ambient Glow - Reduced size for mobile/tablet to improve performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#5dc192]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-20">
          
          {/* CONTENT SIDE - Appears first on Mobile/Tablet */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-1">
            <div className="space-y-3 md:space-y-4">
              
              <h2 className="text-[1rem] uppercase tracking-[0.4em] text-center lg:text-left text-gray-500">
          Our Approach
        </h2>
              <h2 className="text-5xl md:text-7xl leading-tight">
                What We Do
              </h2>
              <div className="w-16 md:w-20 h-1 bg-[#5dc192] rounded-full mx-auto lg:mx-0"></div>
            </div>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At Axstar, we help businesses succeed by combining technology, strategy, and practical solutions. 
              <br className="hidden md:block" /><br className="hidden md:block" />
              From designing custom software to guiding digital transformation, we deliver services that make your operations <span className="text-white font-medium">smarter, faster, and ready to scale.</span>
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a href="/about#about-hero" className="inline-block group">
                <button className="relative cursor-pointer overflow-hidden px-6 md:px-8 py-3 md:py-4 rounded-full border border-[#5dc192] text-[#000000] bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] transition-all duration-300 group-hover:bg-[#5dc192] group-hover:text-black font-bold flex items-center gap-3 text-sm md:text-base">
                  See More About Us
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 md:h-5 md:w-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>

          {/* IMAGE SIDE - Appears second on Mobile/Tablet */}
          <div className="w-full lg:w-1/2 flex justify-center order-2 lg:order-2">
            <div className="relative group">
              {/* Decorative Frame - Only visible on Tablet and up */}
              <div className="absolute -top-3 -left-3 md:-top-5 md:-left-5 w-24 md:w-32 h-24 md:h-32 border-t-2 border-l-2 border-[#5dc192]/0 rounded-tl-xl transition-all duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              
              {/* Main Image Container */}
              <div className="relative z-10 bg-neutral-900/0 p-3 md:p-4 rounded-2xl border border-white/0 backdrop-blur-md">
                <img
                  src={aboutImg}
                  alt="About Axstar"
                  className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] h-auto object-cover rounded-xl shadow-2xl"
                />
              </div>

              {/* Bottom Glow Element */}
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-16 md:w-24 h-16 md:h-24 bg-[#5dc192]/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;