import React from 'react';

const WhatWeDo = () => {
  const services = [
    {
      id: "01",
      title: "Engineering & Technology",
      description: "We build high-performance software, web & mobile applications, AI-driven solutions, and custom platforms that solve complex business challenges."
    },
    {
      id: "02",
      title: "Digital & Marketing Solutions",
      description: "From digital transformation strategy to data-driven marketing, we help businesses engage customers and achieve measurable results."
    },
    {
      id: "03",
      title: "Business Strategy & Consulting",
      description: "We provide business model design, startup advisory, and go-to-market strategies to help companies scale sustainably."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-6 py-20 lg:py-32">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <header className="mb-20 text-center">
          {/*<h2 className="text-[2rem] uppercase tracking-[0.4em] text-gray-500 mb-4">
            What We Do
          </h2>*/}

           {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-white mb-8 ">
          What We Do
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            At Axstar, we help businesses innovate, grow, and scale through a 
            combination of technology, digital expertise, and strategic guidance.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group relative p-8 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500 ease-out"
            >

              <h3 className="text-2xl font-medium mb-4 text-center group-hover:text-[var(--primary-color)] transition-colors duration-300">
                {service.title}
              </h3>
              
              <div className="w-12 h-[1px] bg-neutral-700 mx-auto mb-6 group-hover:w-24 transition-all duration-500"></div>

              <p className="text-neutral-400 leading-relaxed text-center font-light">
                {service.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[var(--primary-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

      

      </div>
    </div>
  );
};

export default WhatWeDo;