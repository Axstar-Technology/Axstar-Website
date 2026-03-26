import React, { useState, useEffect } from "react";
import {
  FaCode,
  FaShoppingCart,
  FaRobot,
  FaBullhorn,
  FaLightbulb,
  FaDatabase,
  FaSyncAlt,
  FaChartLine,
  FaProjectDiagram,
  FaSearch,
  FaLaptopCode,
  FaPencilRuler,
  FaRocket,
  FaMobileAlt,
} from "react-icons/fa";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import bgVideo from "../../assets/vid.mp4";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Build responsive, high-performance websites",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "iOS & Android apps for business growth",
  },
  {
    icon: <FaRocket />,
    title: "Product MVP Development",
    description: "Quickly validate ideas with minimum viable products",
  },
  {
    icon: <FaPencilRuler />,
    title: "UI/UX Design",
    description: "Create intuitive, engaging digital experiences",
  },
  {
    icon: <FaLaptopCode />,
    title: "Custom Software Development",
    description: "Tailored solutions to meet business needs",
  },
  {
    icon: <FaRobot />,
    title: "AI & Automation Solutions",
    description: "Smart automation to improve efficiency",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-commerce Platforms & Solutions",
    description: "Scalable online stores and marketplaces",
  },
  {
    icon: <FaBullhorn />,
    title: "Social Media Management",
    description: "Grow brand presence and audience engagement",
  },
  {
    icon: <FaSearch />,
    title: "Search Engine Optimization (SEO)",
    description: "Increase visibility and organic traffic",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Product Strategy & Digital Transformation",
    description: "Align products with business goals",
  },
  {
    icon: <FaChartLine />,
    title: "Business Model & Growth Strategy",
    description: "Plan scalable, profitable business models",
  },
  {
    icon: <FaSyncAlt />,
    title: "Digital Transformation Consulting",
    description: "Guide your business to modern tech adoption",
  },
  {
    icon: <FaDatabase />,
    title: "Data & Technology Consulting",
    description: "Make data-driven decisions and optimize tech stacks",
  },
  {
    icon: <FaLightbulb />,
    title: "Startup Advisory",
    description: "Support startups with strategy, growth, and execution",
  },
];

const Services = () => {
  // CONFIGURATION
  const visibleCards = 4;
  const cardWidth = 280; // Slightly wider to match image proportions
  const gap = 24; 
  const totalItemWidth = cardWidth + gap;
  const transitionSpeed = 800;

  const containerWidth = (cardWidth * visibleCards) + (gap * (visibleCards - 1));

  const extendedServices = [
    ...services.slice(-visibleCards),
    ...services,
    ...services.slice(0, visibleCards),
  ];

  const [index, setIndex] = useState(visibleCards);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMoving, setIsMoving] = useState(false);

  const handleTransitionEnd = () => {
    setIsMoving(false);
    const total = services.length;

    if (index >= total + visibleCards) {
      setIsTransitioning(false);
      setIndex(visibleCards);
    }

    if (index <= 0) {
      setIsTransitioning(false);
      setIndex(total);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  const nextSlide = () => {
    if (isMoving) return;
    setIsMoving(true);
    setIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isMoving) return;
    setIsMoving(true);
    setIndex((prev) => prev - 1);
  };

  return (
<section className="relative w-full py-24 overflow-hidden font-sans">

  {/* Video Background (limited to this section) */}
  <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={bgVideo} type="video/mp4" />
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/70"></div>

    {/* Bottom Fog Overlay */}
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

  {/* Main Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">
    Our Core Services
    </h2>

    {/* Carousel Cards */}
    <div className="relative mx-auto" style={{ width: `${containerWidth}px` }}>
      <div
        onTransitionEnd={handleTransitionEnd}
        className="flex gap-6"
        style={{
          transform: `translateX(-${index * totalItemWidth}px)`,
          transition: isTransitioning
            ? `transform ${transitionSpeed}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : "none",
        }}
      >
        {extendedServices.map((service, i) => (
          <div key={i} style={{ width: `${cardWidth}px` }} className="flex-shrink-0 relative group">
            {/* Glass Card */}
            <div className="h-full min-h-[320px] flex flex-col items-center justify-center p-8 rounded-2xl 
                            bg-emerald-900/10 border border-emerald-500/20 backdrop-blur-md
                            transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-900/20">
              
              {/* Icon */}
              <div className="text-4xl text-emerald-400 mb-6 filter drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 leading-tight">{service.title}</h3>
              <p className="text-sm text-emerald-100/70 leading-relaxed">{service.description}</p>

              {/* Decorative Bottom Bar */}
              <div className="absolute bottom-4 left-8 right-8 h-[2px] bg-emerald-900/40 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-emerald-400 shadow-[0_0_10px_#10b981]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Controls */}
    <div className="flex justify-center gap-6 mt-12">
      <button
        onClick={prevSlide}
        className="p-3 cursor-pointer rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all"
      >
        <FiArrowLeft size={19} />
      </button>

      <button
        onClick={nextSlide}
        className="p-3 cursor-pointer rounded-full border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all"
      >
        <FiArrowRight size={19} />
      </button>
    </div>
  </div>
</section>
  );
};

export default Services;