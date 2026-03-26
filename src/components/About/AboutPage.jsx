import React from 'react'
import AboutHero from './AboutHero'

import WhatWeDo from './WhatWeDo'
import Difference from './Difference'
import Vision from './Vision'
import Mission from './Mission'
import ScrollToTopAbout from './ScrollToTopAbout'
import AboutWhatWeDo from './AboutWhatWeDo'
import AboutValues from './AboutValues'
import AboutExcellence from './AboutExcellence'
import OurStory from './OurStory'
import CultureSection from './CultureSection'
import FeaturesSection from './FeaturesSection'
import TeamSection from './TeamSection'


const AboutPage = () => {
  return (
    <div>
      <AboutHero/>
      <AboutWhatWeDo />
      <Vision />
      <Mission />
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