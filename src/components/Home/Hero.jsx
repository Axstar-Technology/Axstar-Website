import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      // TOP SECTION ANIMATION (on load)
      gsap.from(".h-animate", {
        opacity: 0,
        y: 60,
        duration: 1.9,
        stagger: 0.25,
        ease: "power3.out",
        delay: 0.5,
      });

      gsap.from(".p-animate", {
        opacity: 0,
        y: 60,
        duration: 1.3,
        stagger: 0.3,
        ease: "power3.out",
        delay: 1,
      });

      gsap.from(".buttons-animate", {
        opacity: 0,
        y: 60,
        duration: 1.3,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.5,
      });

      // CARDS ANIMATION (on scroll)
      gsap.from(".card-animate", {
        opacity: 0,
        y: 80,
        delay: 1.7,
        duration: 1.4,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards-wrapper",
          start: "top 100%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="home-hero"
      className="relative w-full text-white h-screen flex items-center overflow-hidden"
    >
     

      {/* ===== BOTTOM FOG OVERLAY ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to top,
                rgba(0,0,0,1) 0%,
                rgba(0,0,0,0.9) 7%,
                rgba(0,0,0,0.7) 23%,
                rgba(0,0,0,0.4) 40%,
                rgba(0,0,0,0.15) 70%,
                rgba(0,0,0,0) 100%
              )
            `,
          }}
        />
      </div>

      {/* ===== HERO CONTENT ===== */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col justify-center items-center">
        <div className="space-y-6 w-full max-w-7xl mt-12 md:mt-1 text-center mx-auto">
          <h1 className="h-animate text-neutral-100 text-[2.5rem] sm:text-5xl md:text-[3.3rem] lg:text-[4.1rem] font-medium tracking-w[1rem] leading-tight">
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] bg-clip-text text-transparent block mt-4 md:mt-6 lg:mt-5">
              Scalable Digital Solutions
            </span>
          </h1>

          <p className="p-animate text-sm sm:text-base md:text-[.9rem] text-white leading-relaxed max-w-2xl mx-auto">
            Axstar drives business growth through smart technology, strategic consulting, and digital transformation. We deliver scalable, high-performance solutions that align technology with your business goals—from strategy to full deployment.
          </p>

          <div className="buttons-animate flex flex-wrap justify-center gap-4 pt-4">
            <a href="#about">
              <button className="cursor-pointer px-10 py-2 text-sm rounded-lg 
                bg-gradient-to-r from-[#02ffdd] to-[#02ffdd]
                text-black transition">
                Discover ↓
              </button>
            </a>

            <a href="/projects#projects-hero">
              <button className="cursor-pointer px-10 py-2 text-sm rounded-lg border border-neutral-500 text-green-200 hover:bg-green-800">
                View Portfolio
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;