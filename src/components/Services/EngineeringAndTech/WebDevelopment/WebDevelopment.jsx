import React from "react";



import WebDevelopmentHero from "./WebDevelopmentHero";
import WhatWeOffer from "./WhatWeOffer";
import WebDevWhatWeDo from "./WebDevWhatWeDo";
import WhyWorkWithUs from "./WhyWorkWithUs";
import ContactOurTeam from "./ContactOurTeam";


const WebDevelopment = () => {

  






 
  return (
    <section id="about-hero" className="relative w-full bg-black text-white overflow-hidden">
   {/* ✅ TOP GLOW (FIXED) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[var(--primary-color)]/30 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Hero Section */}
      
    <WebDevelopmentHero />

<div className="px-0 lg:px-14">
    <WhatWeOffer />
    <WebDevWhatWeDo />
      <WhyWorkWithUs />
      <ContactOurTeam />
</div>











      {/** */}









{/** */}






    {/** */}










    

    </section>
  );
};

export default WebDevelopment;