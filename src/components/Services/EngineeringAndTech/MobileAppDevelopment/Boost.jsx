import React from 'react'

const Boost = () => {
  return (
    <div className="w-full bg-transparent mt-15 rounded-[2rem] py-30 px-2 flex items-center justify-center">
      <div className="max-w-5xl text-center text-white">
        
        {/* Title */}
        <h2 className="text-2xl text-neutral-200 sm:text-3xl md:text-4xl mb-5 font-bold leading-snug">
          Boost Your Business Presence with the #1 Global Mobile App Development Company 
        </h2>

        {/* Description */}
        <p className="mt-4 text-[1rem] text-neutral-400 leading-relaxed">
          Axstar is a global mobile app development company delivering high-quality and affordable app solutions to businesses worldwide. Our expert mobile app developers create powerful, user-friendly apps for iOS, Android, and cross-platform environments. We help brands enhance visibility, improve engagement, and scale efficiently across international markets.
        </p>

        <p className="mt-4 text-[1rem] mb-5 text-neutral-400 leading-relaxed">
          Partner with a trusted mobile app development agency recognized for innovation, reliability, and performance. Schedule a free consultation today to discover how our global team can turn your ideas into successful digital products.
        </p>

        {/* Button */}
        <button className="mt-6 px-6 py-3 text-sm sm:text-base font-medium bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/50 cursor-pointer transition-all duration-300 rounded-full">
         Contact Our Team
        </button>

      </div>
    </div>
  )
}

export default Boost