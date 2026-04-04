import React from 'react'

import Hero from './Hero'
import About from './About'
import Services from './Services'
import WhyChooseUs from './WhyChooseUs'
import Technologies from './Technologies'
import Stat from './Stat'

import Testimonials from './Testimonials'


import ScrollToTopHome from './ScrollToTopHome'
import CallUs from './CallUs'
import LatestProjects from './LatestProjects'
import Process2 from './Process2'




const HomePage = () => {
  return (
    <div id='home' className='w-full'>
        
        <Hero/>
        <About/>
        <Services/>
        <WhyChooseUs/>
        <Stat/>
        <Process2 />
        <Technologies/>      
        <Testimonials/>
        <LatestProjects />
        <CallUs />
        <ScrollToTopHome />
    </div>
  )
}

export default HomePage