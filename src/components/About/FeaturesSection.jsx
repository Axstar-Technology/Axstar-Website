import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      title: "Experienced, Agile Tech Team",
      description: "Our team combines the creativity and energy of a startup with the expertise of seasoned technology and software professionals. We adapt quickly, think strategically, and deliver solutions that truly make an impact."
    },
    {
      title: "Client-Centered Innovation",
      description: "Every solution we build is designed with your goals in mind. We listen, collaborate, and tailor our technology to meet your specific business needs ensuring measurable growth and long-term value."
    },
    {
      title: "Comprehensive Coverage",
      description: "From custom software and AI-driven automation to digital transformation and data consulting, we cover a wide spectrum of technology and business challenges with efficiency and precision."
    },
    {
      title: "Cutting-Edge Solutions",
      description: "Leveraging the latest technologies and industry best practices, we create high-performance, scalable, and future-ready solutions that help your business stay ahead in a rapidly evolving digital world."
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-16 text-center">
           {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-white mb-8 ">
         Why Axstar Stands Out
          </h2>
          
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 ease-in-out"
            >
              <h3 className="text-xl md:text-2xl font-medium mb-4 text-center text-gray-100 group-hover:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-center text-sm md:text-base font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;