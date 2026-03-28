import React from 'react'

const Section7 = () => {
  return (
    <div className="w-full bg-transparent mt-15 rounded-[2rem] py-30 px-2 flex items-center justify-center">
      <div className="max-w-5xl text-center text-white">
        
        {/* Title */}
        <h2 className="text-2xl text-neutral-200 sm:text-3xl md:text-4xl mb-5 font-bold leading-snug">
        Transform Your Business with AI Precision.
        </h2>

        {/* Description */}
        <p className="mt-4 text-[1rem] text-neutral-400 leading-relaxed">
          As a trusted AI development partner, Axstar builds powerful solutions that make operations faster, smarter, and easier to manage. Our technology combines automation, analytics, and optimization to simplify workflows and support better decision-making.
        </p>


        {/* Button */}
        <button className="mt-6 px-6 py-3 text-sm sm:text-base font-medium bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/50 cursor-pointer transition-all duration-300 rounded-full">
         Contact Our Team
        </button>

      </div>
    </div>
  )
}

export default Section7