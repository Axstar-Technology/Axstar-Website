import React from 'react'
import appimg1 from "../../../../assets/appImg1.png";

const Section3 = () => {
  return (
    <div className="bg-[#010704] rounded-[2rem] text-white py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Building High-Performance <br />
              Apps for 
              <span className="text-gray-300"> Global Businesses</span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto lg:mx-0 mb-6">
              Axstar provides affordable, reliable mobile app development for businesses worldwide. We build high-performing iOS and Android apps with clean UI/UX and ongoing support. As a trusted offshore team, we turn your ideas into scalable digital products quickly and efficiently.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src={appimg1}
                alt="About Visual"
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
  )
}

export default Section3