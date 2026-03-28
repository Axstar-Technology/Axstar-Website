import React from 'react'

const Exxplore = () => {
  return (
    <div className="w-full bg-[#161616] py-25 rounded-[2rem] px-4 md:px-10">
  {/* Section Title */}
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
      Explore Axstar App Development Expertise Across Industries
    </h2>
    <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
      Axstar builds high-performing mobile apps and websites for multiple industries worldwide. 
      Our expert team helps you grow your online presence, attract more users, and increase sales 
      through data-driven design and advanced technology.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#1f2937] transition">
      <h3 className="text-white font-semibold text-sm md:text-base">
        Healthcare & Fitness Apps
      </h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#1f2937] transition">
      <h3 className="text-white font-semibold text-sm md:text-base">
        E-commerce & Retail Apps
      </h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#1f2937] transition">
      <h3 className="text-white font-semibold text-sm md:text-base">
        Finance & Banking Apps
      </h3>
    </div>

    <div className="bg-[#111827] rounded-xl p-8 flex items-center justify-center text-center hover:bg-[#1f2937] transition">
      <h3 className="text-white font-semibold text-sm md:text-base">
        Education & E-learning Apps
      </h3>
    </div>

  </div>
</div>
  )
}

export default Exxplore