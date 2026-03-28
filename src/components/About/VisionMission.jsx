import React from "react";

const VisionMission = () => {
  const missionText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quibusdam voluptatibus animi enim porro! Architecto, suscipit. Ratione, ad quod iste sed eos ipsum, quis veniam voluptatibus, accusamus porro corporis incidunt!";
  const visionText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque veniam ipsum odio ullam incidunt eaque, tempora, dolores at quisquam temporibus maxime eveniet soluta vel modi dolor in totam eum?";

  return (
    <section className="w-full bg-[#000000] py-12 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Changed md:flex-row to lg:flex-row to give tablets more breathing room */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          
          {/* MISSION CARD */}
          <div className="flex-1 group bg-[#1a1919]/0 border border-neutral-800/0 p-6 sm:p-10 md:p-12 rounded-2xl transition-all duration-500 hover:border-neutral-600/0">
            <div className="flex flex-col h-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-white opacity-30"></div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-200 font-semibold">
                  01 / Mission
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-300 mb-4 md:mb-6 tracking-tight">
                Our Mission
              </h2>
              
              <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {missionText}
              </p>
            </div>
          </div>

          {/* VISION CARD */}
          <div className="flex-1 group bg-[#e9e7e2]/0 p-6 border border-neutral-800/0 sm:p-10 md:p-12 rounded-2xl transition-all duration-500 hover:shadow-2xl">
            <div className="flex flex-col h-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-black opacity-20"></div>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-neutral-200 font-semibold">
                  02 / Vision
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-300 mb-4 md:mb-6 tracking-tight">
                Our Vision
              </h2>
              
              <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {visionText}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;