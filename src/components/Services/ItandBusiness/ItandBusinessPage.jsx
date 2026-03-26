import React from "react";


const ItandBusinessPage = () => {
  return (
    <section id="digital-services-page" className="relative w-full bg-black text-white overflow-hidden">

      {/* Top spacing */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 text-center">

        {/* Small badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-white/10 text-sm px-4 py-2 rounded-full border border-white/20">
            <span>Services</span>
            
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
            It & Business Page
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsum repellendus? Doloribus aliquam itaque atque qui at a voluptate quis quidem nostrum assumenda repudiandae dolores, possimus eligendi porro iusto nisi?
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a href="#web">
                <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] cursor-pointer px-4 py-3 rounded-full font-medium transition mx-auto flex items-center gap-3">
            Explore More
          </button>
            </a>
          

        </div>

       

      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[var(--primary-color)]/30 blur-[180px] rounded-full pointer-events-none"></div>

    </section>
  );
};

export default ItandBusinessPage;