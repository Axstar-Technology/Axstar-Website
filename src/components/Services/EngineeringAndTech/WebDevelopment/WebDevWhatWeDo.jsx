import React from 'react'
import { FaHeadset, FaLayerGroup, FaMobileAlt, FaPalette } from 'react-icons/fa';

const WebDevWhatWeDo = () => {

     const services = [
    {
      title: "Custom Mobile App Development",
      description:
        "Your business is unique, and your app should reflect that. We build apps from the ground up, tailored to your goals.",
      icon: <FaMobileAlt />,
    },
    {
      title: "UI/UX Design",
      description:
        "An app should feel as good as it looks. We create clean, intuitive designs that make using your app simple and enjoyable.",
      icon: <FaPalette />,
    },
    {
      title: "Cross-Platform Development",
      description:
        "One app, all devices. Our cross-platform solutions save time and cost while giving users a seamless experience.",
      icon: <FaLayerGroup />,
    },
    {
      title: "Quality & Ongoing Support",
      description:
        "We don’t just launch and leave. From testing to updates, we make sure your app stays fast, secure, and ready.",
      icon: <FaHeadset />,
    },
  ];
  return (
    <div className="w-full px-14 bg-[#1a1a1a] py-20 rounded-[2rem] px-4 sm:px-6 lg:px-20">
      {/* Title */}
    <h2 className="text-3xl text-center md:text-4xl font-bold mb-12">
     What we Do
    </h2>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-[#0e0e0e] rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
          >
            {/* Icon */}
            <div className="text-[var(--primary-color)] text-2xl mb-4">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm font-semibold text-neutral-300 mb-2">
              {item.title}
            </h3>

            {/* Divider */}
            <div className="w-10 h-[2px] bg-[var(--primary-color)] mb-4"></div>

            {/* Description */}
            <p className="text-xs text-neutral-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WebDevWhatWeDo