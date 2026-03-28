import React from 'react';

const CultureSection = () => {
  return (
    <section className="bg-black text-neutral-300 py-10 px-6 sm:px-12 md:py-24 lg:px-24 selection:bg-amber-500/30">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* 1. Centered Header - Full Width */}
        <header className="text-center mb-16 md:mb-24">
            

      

           <h2 className="text-[1rem] text-center uppercase tracking-[0.4em] text-gray-500">The way we think and act</h2>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-white mb-16"> Our Culture</h2>
        </header>

        {/* 2. Main Content Split: Text Left | Image Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-28">
          
          {/* Text Content */}
          <div className="space-y-10">
            {/* Top Focus Text */}
            <p className="text-2xl md:text-3xl text-white font-extralight leading-tight max-w-xl">
              "At Axstar, we believe that <span className="text-neutral-500">great technology</span> is built by great people. Our culture is rooted in collaboration, innovation, and respect."
            </p>

            {/* Split Details (Human Values & Shared Growth) - Stack on Mobile, Side-by-side on MD+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-neutral-800">
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 font-medium">Shared Growth</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  We work as one team, celebrating successes together, supporting each other through challenges, and fostering a culture of creativity, learning, and excellence.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-sm uppercase tracking-widest text-neutral-500 font-medium">Human Values</h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  Work-life balance and mutual respect aren’t just ideals—they are the foundation of how we operate every day in a positive, inspiring environment.
                </p>
              </div>
            </div>
          </div>

          {/* Small Aesthetic Image - Side Placement */}
          <div className="flex justify-center md:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-sm opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-700 ease-in-out group">
              {/* Abstract decorative frame */}
              <div className="absolute inset-0 border border-neutral-800 translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop" 
                alt="Axstar culture visual" 
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>

        </div>

        {/* 3. Footer Statement - Minimal Centered 
        <footer className="text-center pt-10 border-t border-neutral-900">
          <p className="text-neutral-500 leading-relaxed max-w-2xl mx-auto font-light">
            With a global vision and a commitment to building the best working culture, we ensure that our team is motivated, inspired, and aligned to deliver high-performance solutions.
          </p>
          <p className="mt-6 text-white text-lg font-light tracking-wide">
            We don’t just build software — we build a community.
          </p>
        </footer>*/}
          
      </div>
    </section>
  );
};

export default CultureSection;