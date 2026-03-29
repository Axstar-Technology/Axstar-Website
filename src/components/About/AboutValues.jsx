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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-24 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
         
          <h2 className="text-[1rem] text-center uppercase tracking-[0.4em] text-gray-500">Values that guide our vision</h2>
        <h2 className="text-3xl font-light text-center md:text-5xl leading-tight text-white mb-16"> Axstar Core Values</h2>
          <div className="w-full flex justify-center">
  <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-lg text-gray-400 italic font-light border-l-2 border-[var(--primary-color)] pl-6 max-w-3xl">
    <p>
      <span className="font-bold text-[var(--primary-color)] not-italic mr-2">AX</span> 
      Our expertise and agility behind the scenes
    </p>
    <p>
      <span className="font-bold text-[var(--primary-color)] not-italic mr-2">STAR</span> 
      The scalable, ambitious results we deliver
    </p>
  </div>
</div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Values List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {values.map((val, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex gap-8 border-b border-white/10 pb-8 last:border-0"
              >
                <span
  className="
    text-5xl md:text-6xl font-black
    bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60]
    bg-clip-text text-transparent
    opacity-10 group-hover:opacity-100
    transition-all duration-500
  "
>
  {val.letter}
</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {val.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-md">
                    {val.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="sticky top-24 hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
              <img 
                src="https://i.pinimg.com/736x/48/88/12/488812d21deaa3c474aa3e5a6abe4bd6.jpg" 
                alt="Axstar Professional Environment" 
                className="object-cover w-full h-full grayscale-0 hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
              />
              {/* Overlay Decor */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8">
                <div className="text-xs uppercase tracking-[0.4em] text-[var(--primary-color)] mb-2 font-bold">Standard of Excellence</div>
                <div className="text-2xl font-light tracking-widest">EST. 2026</div>
              </div>
            </div>
            
            {/* Background Glow behind image */}
            <div className="absolute -z-10 -bottom-12 -right-12 w-64 h-64 bg-[var(--primary-color)]/20 rounded-full blur-[100px]" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutValues;