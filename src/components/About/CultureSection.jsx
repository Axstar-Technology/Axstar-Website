import React from 'react';

const CultureSection = () => {
  return (
    <section className="min-h-screen bg-[#000000] flex items-center justify-center p-6 sm:p-12 lg:p-24 selection:bg-amber-500/30">
      <div className="max-w-5xl w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          
          <h1 className="text-4xl md:text-6xl font-light text-white tracking-tight leading-tight">
            Our Culture
          </h1>
          
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-5">
          
          {/* Top Focus Text - Large and Bold */}
          <div className="md:col-span-2 text-center">
            <p className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed max-w-3xl mx-auto ">
              "At Axstar, we believe that <span className="text-neutral-500 font-normal">great technology</span> is built by great people. Our culture is rooted in collaboration, innovation, and respect."
            </p>
          </div>

          {/* Secondary Details */}
          <div className="group p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 hover:border-[var(--primary-color]/30 transition-all duration-500">
            <h3 className="text-white text-xl font-medium mb-4 text-center">Shared Growth</h3>
            <p className="text-neutral-400 leading-relaxed text-center font-light">
              We work as one team, celebrating successes together, supporting each other through challenges, and fostering a culture of creativity, learning, and excellence.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800/50 hover:border-[var(--primary-color]-500/30 transition-all duration-500">
            <h3 className="text-white text-xl font-medium mb-4 text-center">Human Values</h3>
            <p className="text-neutral-400 leading-relaxed text-center font-light">
              Work-life balance and mutual respect aren’t just ideals—they are the foundation of how we operate every day in a positive, inspiring environment.
            </p>
          </div>

          {/* Footer Statement */}
          <div className="md:col-span-2 text-center">
            <div className="bg-gradient-to-b from-neutral-800/20 to-transparent p-12 rounded-3xl border-t border-neutral-800">
              <p className="text-neutral-300 leading-relaxed max-w-2xl mx-auto">
                With a global vision and a commitment to building the best working culture, we ensure that our team is motivated, inspired, and aligned to deliver high-performance solutions.
              </p>
              <p className="mt-8 text-white font-medium tracking-wide">
                We don’t just build software — we build a community.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CultureSection;