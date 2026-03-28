
import React from 'react'

const WhyWorkWithUs = () => {
      const cards = [
  { title: "Fast, smooth performance you can rely on", desc: "Sell access to an exclusive Discord community." },
  { title: "Clean, simple designs that people enjoy using", desc: "Sell access to your TradingView indicators." },
  { title: "Security baked in from the start", desc: "Sell access to an online course or program." },
  { title: "Solutions that scale as your business grows", desc: "Sell access to an exclusive Discord community." },
  { title: "A team that’s with you before, during, and after launch", desc: "Sell access to an exclusive Discord community." },
  
];
  return (
    
      <div className="w-full  bg-gradient-to-br from-[#000000] to-[#002e2a] rounded-[2rem] mt-20 text-white py-30 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT */}
    <div className="space-y-6 text-center lg:text-left">
      

      <h2 className="text-[4rem] lg:text-[6rem] font-bold leading-tight">
        Why Work With Us
      </h2>

    

    </div>

    {/* RIGHT */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#1f2e2b] p-5 rounded-xl border border-neutral-700 hover:border-gray-500 transition hover:scale-[1.02]"
        >
          <h3 className="font-semibold mb-2 text-neutral-300">{card.title}</h3>
          
        </div>
      ))}
    </div>

  </div>
</div>
  )
}

export default WhyWorkWithUs