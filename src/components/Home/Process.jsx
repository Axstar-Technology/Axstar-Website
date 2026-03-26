import React, { useRef } from "react";
import { User, MessageCircle, Layout, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);




const steps = [
  {
    icon: User,
    title: "Understand, Analysis & Explore",
    description:
      "We begin by thoroughly understanding your business, target audience, and project requirements. This ensures every decision aligns with your goals and sets a solid foundation for success.",
  },
  {
    icon: MessageCircle,
    title: "Plan & Strategize",
    description:
      "Using insights from the discovery phase, we develop a clear roadmap and plan, focusing on the most effective approach to achieve your objectives efficiently.",
  },
  {
    icon: Layout,
    title: "Development & Progress Updates",
    description:
      "Our team builds your solution using the latest technologies, while providing regular progress updates to keep you informed at every stage.",
  },
  {
    icon: CheckCircle,
    title: "Launch, Deliver & Support",
    description:
      "We ensure a smooth product launch and provide ongoing support, maintenance, and enhancements to ensure long-term success.",
  },
];

const Process = () => {

  const sectionRef = useRef(null);
    const Animate1Ref = useRef(null);
    const Animate2Ref = useRef(null);
   


  useGSAP(
  () => {

    gsap.from(Animate1Ref.current, {
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.utils.toArray(".step-card").forEach((card) => {
      gsap.from(card, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

  },
  { scope: sectionRef }
);





  return (
    <section ref={sectionRef} id="how" className="w-full bg-black py-20 px-4">
      <div ref={Animate1Ref} className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="relative flex items-center justify-center mb-16">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[var(--primary-color)] to-transparent" />
          <h2 className="relative bg-[#0b0f0d] px-6 rounded-2xl py-5 text-white text-2xl md:text-3xl font-semibold">
            How We Do It
          </h2>
        </div>

        {/* Flow */}
        <div className="relative flex flex-col items-center">
          {/* Start */}
          <div className="step-card flex flex-col items-center mb-4">
            <span className="text-sm text-[var(--primary-color)] mb-2">Start</span>
            <span className="w-3 h-3 rounded-full bg-[var(--primary-color)]" />
          </div>

          {/* Vertical line */}
          <div className="step-card w-1 bg-[var(--primary-color)]/40 h-10" />

          {/* Steps */}
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={index}>
                <div className="step-card relative flex flex-col items-center w-full max-w-md mb-6">
                  <div className="flex items-start gap-4 bg-[#121816] border border-white/10 rounded-xl px-5 py-4 text-white shadow-lg w-full">
                    <Icon className="w-6 h-6 text-[var(--primary-color)] shrink-0 mt-1" />
                    <div>
                      <h3 className="text-white font-semibold text-base md:text-lg">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[var(--primary-color)]/60 mt-1 leading-snug">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div className="w-1 bg-[var(--primary-color)]/40 h-10" />
                )}
              </React.Fragment>
            );
          })}

          {/* Approved / Finished */}
          <div className="flex flex-col items-center text-center mt-4">
            <CheckCircle className="w-8 h-8 text-[var(--primary-color)] mb-2" />
            <p className="text-sm md:text-base text-[var(--primary-color)] max-w-xs">
                                                          “Your solution is ready to go live! 🚀 
We ensure a smooth launch and continued support for long-term success.”

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;