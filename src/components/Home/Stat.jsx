import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    value: 10,
    suffix: "+",
    title: "PROJECTS DELIVERED",
    desc: "Completed a wide range of successful projects",
  },
  {
    value: 4,
    suffix: "+",
    title: "COUNTRIES SERVED",
    desc: "Trusted by clients across multiple countries",
  },
  {
    value: 2,
    suffix: "+",
    title: "YEARS OF EXPERIENCE",
    desc: "Years of industry expertise and knowledge",
  },
  {
    value: 95,
    suffix: "%",
    title: "CLIENT SATISFACTION",
    desc: "Consistently delivering results that satisfy clients.",
  },
];

export default function Stat() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
  className="
    relative w-full text-white py-30 px-6 md:px-12 lg:px-24

  "
    >

           {/* ===== TOP FOG OVERLAY ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
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

           {/* ===== TOP FOG OVERLAY ===== */}
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
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000]/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 ">
            We Turn <br />
            Ideas into <br />
            Visual Masterpieces
          </h2>

          <p className="text-white/60 text-justify text-sm md:text-base leading-relaxed mb-8">
            We transform your ideas into stunning visual experiences. From concept to creation, our designs combine creativity, strategy, and innovation to craft visuals that captivate, communicate, and leave a lasting impression.
          </p>

          <a href="/about">
            <button className="border border-[var(--primary-color)] text-[var(--primary-color)] cursor-pointer px-6 py-3 text-sm hover:bg-white hover:border-white hover:text-black transition">
              Know More About us
            </button>
          </a>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {stats.map((item, index) => (
            <div key={index} >
              <h3 className="text-4xl text-[var(--primary-color)] md:text-5xl font-bold mb-2">
                {inView ? (
                  <CountUp
                    end={item.value}
                    duration={2.5}
                    suffix={item.suffix}
                  />
                ) : (
                  `0${item.suffix}`
                )}
              </h3>

              <p className="text-xs tracking-widest text-gray-400 mb-2">
                {item.title}
              </p>

              <p className="text-sm text-gray-500 leading-relaxed max-w-[220px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}