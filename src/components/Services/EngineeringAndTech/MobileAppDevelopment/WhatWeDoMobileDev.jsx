import React from 'react'
import {
  FiSmartphone,
  FiLayout,
  FiLayers,
  FiShield,
  FiGlobe,
  FiDatabase,
  FiLink,
  FiBox,
  FiZap,
  FiCode
} from "react-icons/fi";

const WhatWeDoMobileDev = () => {

    const services = [
  {
    title: "Custom App Development",
    desc: "We build tailored mobile apps for iOS and Android that match your business goals.",
    icon: <FiSmartphone />
  },
  {
    title: "UI/UX Design",
    desc: "Simple, clean, and user-friendly designs for a smooth app experience.",
    icon: <FiLayout />
  },
  {
    title: "Cross-Platform Apps",
    desc: "One app that works seamlessly across all devices, saving time and cost.",
    icon: <FiLayers />
  },
  {
    title: "Testing & Support",
    desc: "We test, launch, and continuously improve your app for performance and security.",
    icon: <FiShield />
  },
  {
    title: "Full-Cycle App Services",
    desc: "End-to-end mobile app solutions that boost growth, performance, and reach.",
    icon: <FiBox />
  },
  {
    title: "Mobile Web Apps",
    desc: "Fast, responsive web apps optimized for all mobile devices.",
    icon: <FiGlobe />
  },
  {
    title: "Backend Development",
    desc: "Secure and scalable backend systems with APIs and real-time data handling.",
    icon: <FiDatabase />
  },
  {
    title: "App Integration",
    desc: "Connect your app with third-party tools to improve workflow and efficiency.",
    icon: <FiLink />
  },
  {
    title: "Product Development",
    desc: "We build complete mobile products that drive engagement and business growth.",
    icon: <FiBox />
  },
  {
    title: "Progressive Web Apps (PWA)",
    desc: "High-performance web apps with native-like experience and better SEO.",
    icon: <FiZap />
  },
  {
    title: "iOS & Android Apps",
    desc: "High-quality apps built using modern technologies for maximum performance.",
    icon: <FiCode />
  },
];
  return (
    <div className="w-full bg-transparent py-30 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Title */}
    <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
      WHAT WE DO
    </h2>

    {/* Grid */}
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

      {services.map((item, index) => (
        <div
          key={index}
          className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 flex flex-col h-full min-h-[220px] hover:bg-white/10 transition duration-300"
        >
          {/* Icon */}
         <div className="flex justify-start mb-4">
          <div className="inline-flex items-center justify-center text-[var(--primary-color)] text-3xl bg-[#686868] rounded-full p-4">
            {item.icon}
          </div>
        </div>

          {/* Content */}
          <div className="flex flex-col flex-1">
            
            {/* Title (fixed height) */}
            <h3 className="text-neutral-200 font-semibold text-lg mb-2 min-h-[56px]">
              {item.title}
            </h3>

            {/* Description (fills remaining space) */}
            <p className="text-neutral-400 text-sm leading-relaxed flex-1">
              {item.desc}
            </p>

          </div>
        </div>
      ))}

    </div>
  </div>
</div>
  )
}

export default WhatWeDoMobileDev