import React from 'react'
import { FiCloud, FiCode, FiFileText, FiPenTool, FiSearch, FiSmartphone, FiTrendingUp, FiZap } from 'react-icons/fi'

const WhatWeOffer = () => {
  return (
    <div className="w-full bg-[#080808]/0 text-white py-30 px-15">
  <div className="max-w-7xl mx-auto text-center">

   

    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
     What we Offer
    </h2>

    {/* Steps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-30">

      {/* 1 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-blue-400 mb-3">
          <FiCode />
        </div>
        <h3 className="text-lg font-semibold mb-2">Fully Custom Coded</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          No templates or pre-made builders used.
        </p>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-purple-400 mb-3">
          <FiPenTool />
        </div>
        <h3 className="text-lg font-semibold mb-2">Unique Premium Designs</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Tailored specifically to match your brand identity.
        </p>
      </div>

      {/* 3 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-green-400 mb-3">
          <FiSmartphone />
        </div>
        <h3 className="text-lg font-semibold mb-2">100% Mobile Responsive</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Optimized for desktops, tablets, and smartphones.
        </p>
      </div>

      {/* 4 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-yellow-400 mb-3">
          <FiFileText />
        </div>
        <h3 className="text-lg font-semibold mb-2">Result-Focused Content</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Content tailored to your business goals.
        </p>
      </div>

      {/* 5 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-pink-400 mb-3">
          <FiTrendingUp />
        </div>
        <h3 className="text-lg font-semibold mb-2">Lead-Driven Strategy</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Built to convert visitors into customers.
        </p>
      </div>

      {/* 6 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-cyan-400 mb-3">
          <FiSearch />
        </div>
        <h3 className="text-lg font-semibold mb-2">SEO Optimization</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          SEO-ready structure for better search visibility.
        </p>
      </div>

      {/* 7 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-orange-400 mb-3">
          <FiZap />
        </div>
        <h3 className="text-lg font-semibold mb-2">Fast Support</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Quick response and dedicated communication.
        </p>
      </div>

      {/* 8 */}
      <div className="flex flex-col items-center text-center">
        <div className="text-4xl text-indigo-400 mb-3">
          <FiCloud />
        </div>
        <h3 className="text-lg font-semibold mb-2">Cloud Hosting</h3>
        <p className="text-gray-400 text-sm max-w-xs">
          Reliable hosting with security and maintenance.
        </p>
      </div>

    </div>

  </div>
</div>
  )
}

export default WhatWeOffer