import React from 'react';

const TeamSection = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        
        {/* Header Section */}
        <div className="text-center mb-16">

             <h2 className="text-[1rem] uppercase tracking-[0.4em] text-gray-500 mb-4">
        The Minds Driving Innovation
          </h2>
             {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-white mb-8 ">
          Meet Our Team
          </h2>

          
         
          
          
          <div className="max-w-3xl mx-auto space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              At <span className="text-white font-medium text-glow">Axstar</span>, innovation is powered by people—talented 
              technologists, strategists, and designers who think differently and deliver 
              results. Our team combines creativity, expertise, and precision to transform 
              ideas into high-performance solutions.
            </p>
            <p>
              From building intelligent engineering solutions to driving digital growth and 
              crafting strategic business insights, our team turns ambitious visions into 
              reality. Every system we engineer, every digital experience we design, and every 
              strategy we advise is guided by creativity, precision, and a commitment to making.
            </p>
          </div>
        </div>

        {/* Vision Quote Card */}
        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--primary-color)]/50 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-black border border-white/10 rounded-2xl p-8 md:p-12 text-center">
            <span className="text-5xl text-[var(--primary-color)] font-serif leading-none block mb-4">“</span>
            <blockquote className="text-2xl md:text-4xl font-light tracking-wide italic">
              Your Ideas. Our Expertise. <span className="text-[var(--primary-color)] font-medium">Shared Success.</span>
            </blockquote>
          </div>
        </div>

        {/* Placeholder for Team Grid (Optional Add-on)
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          You can map through team members here
          {[1, 2, 3].map((member) => (
            <div key={member} className="h-64 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors duration-500">
                Member content 
            </div>
          ))}
        </div>*/}
        
      </div>

      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 15px rgba(255,255,255,0.2);
        }
      `}</style>
    </section>
  );
};

export default TeamSection;