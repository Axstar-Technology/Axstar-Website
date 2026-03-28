import React from 'react'

const OurStrategic = () => {
  return (
    <div className="w-full rounded-[2rem] bg-[#1c1d1c] py-20 mt-15 px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-300 mb-4">
            Our Strategic Mobile App Development Lifecycle
          </h2>

          <p className="text-neutral-500 max-w-2xl mx-auto mb-20 mt-12 text-sm md:text-base">
            At Axstar Technologies, our refined development process ensures your mobile solution aligns perfectly with your business objectives while maintaining peak performance. We employ a disciplined, iterative methodology that prioritizes high-end quality and seamless user experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title: "Analyze the Business Requirements",
                desc: "We collaborate closely with your stakeholders to define core objectives, understand your goals, target users, and desired outcomes."
              },
              {
                title: "Development and Implementation",
                desc: "Our engineering team utilizes agile development to build scalable, feature-rich solutions. We deliver in efficient, transparent stages to ensure the product evolves with your vision."
              },
              {
                title: "Quality Assurance and Testing",
                desc: "Every development phase includes comprehensive testing protocols. We identify and resolve technical debt early, ensuring a reliable, high-performance final product."
              },
              {
                title: "Deployment & Infrastructure Management",
                desc: "We handle the complexities of mobile app store deployment and provide dedicated maintenance to ensure long-term stability and security."
              },
              {
                title: "Operational User Training & Support",
                desc: "We empower your team with the knowledge and tools required to manage and navigate the application effectively for daily business operations."
              },
              {
                title: "Optimization & Continuous Improvement",
                desc: "Post-launch, we monitor performance metrics and user feedback to implement data-driven updates, ensuring your digital product remains competitive."
              }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center mt-10 gap-3 text-center">
                <div className={`
                  w-14 h-14 flex items-center justify-center rounded-xl mb-4 text-white text-lg
                  ${i % 3 === 0 ? "bg-[#2f7a5b]" : ""}
                  ${i % 3 === 1 ? "bg-[#3f9a73]" : ""}
                  ${i % 3 === 2 ? "bg-[#4fb58a]" : ""}
                  ${i % 3 === 3 ? "bg-[#5dc192]" : ""}
                  ${i % 3 === 4 ? "bg-[#7fd0a8]" : ""}
                  ${i % 3 === 5 ? "bg-[#a3e0c2]" : ""}
                `}>
                  {i + 1}
                </div>

                <h3 className="text-lg font-semibold text-neutral-300 mb-2">
                  {step.title}
                </h3>

                <p className="text-neutral-500 text-sm max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
  )
}

export default OurStrategic