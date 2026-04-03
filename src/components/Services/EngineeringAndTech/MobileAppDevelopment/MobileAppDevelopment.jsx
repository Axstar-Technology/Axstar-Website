import React from "react";

import MobileApDevHero from "./MobileApDevHero";
import AfterHero from "./AfterHero";
import Section3 from "./Section3";
import OurStrategic from "./OurStrategic";
import WhatWeDoMobileDev from "./WhatWeDoMobileDev";
import WhyChoose from "./WhyChoose";
import Exxplore from "./Exxplore";
import Boost from "./Boost";




const MobileAppDevelopment = () => {








  
  return (
    <section id="about-hero" className="relative w-full bg-black text-white overflow-hidden">


     <MobileApDevHero />

     <div className="px-0">
      <AfterHero />
      <Section3 />
      <OurStrategic />
      <WhatWeDoMobileDev />
      <Exxplore />
      <WhyChoose />
      
      <Boost />
     </div>










      

    </section>
  );
};

export default MobileAppDevelopment;