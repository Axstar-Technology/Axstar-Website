import React from 'react';
import { motion } from 'framer-motion';

const AboutValues = () => {
  const values = [
    { letter: 'A', title: 'Agility', desc: 'We move fast, adapt quickly, and respond to evolving business needs.' },
    { letter: 'X', title: 'eXpertise', desc: 'We combine deep technical skill with strategic insight.' },
    { letter: 'S', title: 'Scalability', desc: 'Our solutions are built to grow with your business.' },
    { letter: 'T', title: 'Technology', desc: 'We leverage cutting-edge technologies to drive innovation.' },
    { letter: 'A', title: 'Ambition', desc: 'We push boundaries to achieve extraordinary outcomes.' },
    { letter: 'R', title: 'Results', desc: 'We deliver measurable impact and long-term success.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Custom smooth ease-out
    }
  };

  return (
    <section className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Background Glow Decor */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[var(--primary-color)]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--primary-color)]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-4xl md:text-6xl text-white mb-8 ">
            Axstar Core Values
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-lg text-gray-400 max-w-4xl mx-auto italic font-light">
            <p>
              <span className="font-bold text-[var(--primary-color)] not-italic mr-2">AX</span> 
              Our expertise and agility behind the scenes
            </p>
            <div className="hidden md:block w-px h-6 bg-gray-800 self-center" />
            <p>
              <span className="font-bold text-[var(--primary-color)] not-italic mr-2">STAR</span> 
              The scalable, ambitious results we deliver
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          {values.map((val, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:bg-[var(--primary-color)]/30 transition-colors duration-500 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--primary-color)] to-[var(--primary-color)]/50 text-white text-3xl font-black mb-6 shadow-lg shadow-[var(--primary-color)]/20 group-hover:shadow-[var(--primary-color)]/40 group-hover:scale-110 transition-all duration-500">
                  {val.letter}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-100 group-hover:text-[var(--primary-color)] transition-colors">
                  {val.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;