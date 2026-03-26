import React from "react";
import { FaBrain, FaHeadset, FaLaptopCode, FaUserTie } from "react-icons/fa";



const WhyChooseUs = () => {

  const cards = [
    {
      icon: <FaBrain />,
      title: "Strategic Thinking",
      text: "Strategic planning and smart decision-making to build solutions that support long-term business growth.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Technology Expertise",
      text: "Deep technical knowledge and modern development tools used to create reliable and scalable digital solutions.",
    },
    {
      icon: <FaUserTie />,
      title: "Client Focus Approached",
      text: "We prioritize understanding client needs to deliver solutions that align perfectly with their goals.",
    },
    {
      icon: <FaHeadset />,
      title: "End-to-End 24/7 Customer Support",
      text: "Complete support throughout the entire process with reliable assistance available whenever you need it.",
    },
  ];

  return (
    <section id="why" className="w-full bg-[#000000] pb-30 pt-25 px-6 md:px-12 lg:px-20">


      

      
      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 text-center mb-10">
        The Axstar Advantage
      </h2>

      <div className="max-w-6xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/20 
              bg-gradient-to-br from-[var(--primary-color)]/10 via-[var(--primary-color)]/5 to-transparent
              p-8 transition duration-500
              backdrop-blur-md group"
            >
              

              {/* icon */}
              <div className="text-[var(--primary-color)] text-4xl mb-6 relative z-10">
                {card.icon}
              </div>

              {/* title */}
              <h3 className="text-white text-xl font-semibold mb-3 relative z-10">
                {card.title}
              </h3>

              {/* text */}
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                {card.text}
              </p>
            </div>
          ))}

        </div>
      </div>

      
    </section>
  );
};

export default WhyChooseUs;