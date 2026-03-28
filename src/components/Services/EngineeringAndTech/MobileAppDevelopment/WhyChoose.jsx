import React from 'react'

const WhyChoose = () => {

    const cards = [
  { title: "User-friendly mobile experiences", desc: "Sell access to an exclusive Discord community." },
  { title: "Fast, secure, and scalable apps", desc: "Sell access to your TradingView indicators." },
  { title: "Agile collaboration and transparent communication", desc: "Sell access to an online course or program." },
  { title: "Cross-platform expertise for faster launch", desc: "Sell access to an exclusive Discord community." },
  { title: "Continuous support and maintenance", desc: "Sell access to an exclusive Discord community." },
  
];
  return (
     <div className="w-full bg-gradient-to-br from-[#000000] to-[#002e2a] text-white py-25 rounded-[2rem] mt-15 px-6 md:px-12">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    
    {/* LEFT */}
    <div className="space-y-6 text-center lg:text-left">
      

      <h2 className="text-3xl md:text-4xl font-bold leading-tight">
        Why Choose Axstar for Mobile App Development?
      </h2>

      <p className="text-gray-400 max-w-lg mx-auto lg:mx-0">
        Axstar, a leading mobile app development company in Sri Lanka, combines technical expertise with user-focused design to create fast, secure, and scalable apps. From MVPs to enterprise solutions, we deliver cross-platform experiences that drive real business results, with transparent collaboration and ongoing support.
      </p>

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

export default WhyChoose