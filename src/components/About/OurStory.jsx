import React from 'react';
import { motion } from 'framer-motion';

const OurStory = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="bg-[#000000] text-white py-24 px-6 md:px-12 lg:px-24 selection:bg-[var(--primary-color)]/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Sticky Header */}
        <div className="lg:col-span-5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="lg:sticky lg:top-24"
          >
           
            <h1 className="text-5xl md:text-7xl leading-tight">
              Our <span className="text-zinc-500">Story.</span>
            </h1>
            <div className="h-1 w-20 bg-[var(--primary-color)] mt-8 hidden lg:block"></div>
          </motion.div>
        </div>

        {/* Right Side: Narrative Content */}
        <div className="lg:col-span-7 space-y-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="space-y-8"
          >
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-zinc-200">
              At <span className="font-semibold text-white">Axstar</span>, innovation is more than a goal—it’s in our DNA. 
              We began with a clear vision: to build technology that not only solves problems but empowers 
              businesses to grow, adapt, and thrive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-zinc-800/50">
              <div className="space-y-4">
                <h3 className="text-zinc-500 font-medium uppercase text-xs tracking-[0.2em]">The Journey</h3>
                <p className="text-zinc-400 leading-relaxed">
                  From a small team of passionate technologists to a dynamic hub of software and digital innovation, 
                  we’ve been on a relentless journey to create intelligent, scalable, and future-ready solutions.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-zinc-500 font-medium uppercase text-xs tracking-[0.2em]">The Craft</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Every line of code we write and every digital experience we design is guided by our 
                  commitment to excellence, performance, and measurable impact.
                </p>
              </div>
            </div>

            <p className="text-xl text-zinc-300 italic border-l-2 border-[var(--primary-color)] pl-6 py-2">
              "We are more than a software company; we are partners in your growth, turning ambitious 
              ideas into reality and shaping the future of digital innovation."
            </p>
          </motion.div>

          {/* Minimalist Stats/Cta Placeholder */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            className="pt-12 flex items-center gap-6"
          >
            <button className="px-8 py-4 bg-[var(--primary-color)] text-black font-bold text-sm uppercase tracking-widest hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
              Partner With Us
            </button>
            <div className="h-[1px] flex-grow bg-zinc-800"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;