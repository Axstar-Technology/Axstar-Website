import React from 'react'
import AboutHero from './AboutHero'

import WhatWeDo from './WhatWeDo'
import Difference from './Difference'

import ScrollToTopAbout from './ScrollToTopAbout'
import AboutWhatWeDo from './AboutWhatWeDo'
import AboutValues from './AboutValues'
import AboutExcellence from './AboutExcellence'
import OurStory from './OurStory'
import CultureSection from './CultureSection'
import FeaturesSection from './FeaturesSection'
import TeamSection from './TeamSection'
import VisionMission from './VisionMission'


const AboutPage = () => {
  return (
    <div>
      <AboutHero/>
      <AboutWhatWeDo />
      <VisionMission />
      <AboutValues />
      <AboutExcellence />
      <OurStory />
      <CultureSection />
      <WhatWeDo />
      <FeaturesSection />
      <TeamSection />
      
   
      <ScrollToTopAbout />
    </div>
  )
}

export default AboutPage