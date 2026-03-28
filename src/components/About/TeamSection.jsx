import React from 'react';

const TeamSection = () => {
  const team = [
    { name: "Alex Rivera", role: "Lead Developer", image: "/path-to-photo-1.jpg" },
    { name: "Sarah Chen", role: "UI/UX Designer", image: "/path-to-photo-2.jpg" },
    { name: "Marcus Thorne", role: "AI Strategist", image: "/path-to-photo-3.jpg" },
    { name: "Elena Rossi", role: "Cloud Architect", image: "/path-to-photo-4.jpg" },
  ];

  const carouselData = [...team, ...team];

  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[1rem] uppercase tracking-[0.4em] text-gray-500 mb-4">
            The Minds Driving Innovation
          </h2>
          <h2 className="text-4xl md:text-6xl text-white mb-8">
            Meet Our Team
          </h2>

          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              At <span className="text-white font-medium text-glow">Axstar</span>, innovation is powered by people—talented 
              technologists, strategists, and designers who think differently and deliver 
              results.
            </p>
            <p>
              Every system we engineer and every digital experience we design is guided by 
              creativity, precision, and a commitment to making.
            </p>
          </div>
        </div>

        {/* Compact Vision Quote Card */}
        <div className="relative group max-w-2xl mx-auto mb-20">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)]/50 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-700"></div>
          <div className="relative bg-black border border-white/10 rounded-xl p-6 md:p-8 text-center">
            <blockquote className="text-lg md:text-2xl font-light tracking-wide italic">
              " Your Ideas. Our Expertise. <span className="text-[var(--primary-color)] font-medium">Shared Success.</span> "
            </blockquote>
          </div>
        </div>
      </div>

      {/* Auto-Playing Carousel Container */}
      <div className="relative flex overflow-hidden group">
        <div className="flex animate-marquee whitespace-nowrap pause-on-hover">
          {carouselData.map((member, index) => (
            <div 
              key={index} 
              className="w-[250px] md:w-[300px] mx-4 flex-shrink-0 group/card"
            >
              {/* Square Photo Container (1:1 Ratio) */}
              <div className="relative aspect-square overflow-hidden rounded-lg bg-white/5 mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-all duration-700 scale-100 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text - Clean Stack */}
              <div className="text-left px-2">
                <h3 className="text-lg font-medium tracking-tight text-white mb-0.5">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.15em] text-gray-500 font-semibold">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Edge Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent"></div>
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 15px rgba(255,255,255,0.2);
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;