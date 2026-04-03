import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

// Assets
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Kevin Marshall",
    role: "Founder (SaaS Startup)",
    image: person1,
    rating: 4.8,
    description: "Great experience working with Axstar. They understood our vision and built an MVP that perfectly matched our initial product goals.",
  },
  {
    name: "Nalin Prasanga",
    role: "Business Owner- Green Wild Safari Resort",
    image: person2,
    rating: 4,
    description: "The team Axstar delivered a fast, modern website that significantly improved our online presence. Their attention to detail, responsive communication, and ability to understand our requirements made the entire process smooth and efficient",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager – Day dream LLC",
    image: person3,
    rating: 5,
    description: "After working with Axstar, our website started ranking better on search engines, and we received more consistent inquiries from potential customers",
  },
  {
    name: "Marco Rossi",
    role: "Casa di lapasa Pizza",
    image: person3,
    rating: 4.5,
    description: "Axstar created a modern website and digital menu that perfectly matches our restaurant’s style. Our customers love how easy it is to use",
  },
  {
    name: "Hendry Earns",
    role: "Founder, StartupX",
    image: person3,
    rating: 5,
    description: "Great experience working with the team. The UI/UX design was modern, smooth, and exactly what we needed for our startup.",
  },
  {
    name: "Daniel Carter",
    role: "Founder (E-commerce Brand)",
    image: person3,
    rating: 5,
    description: "Working with Axstar was a great experience. Their team delivered a fast, reliable solution that helped streamline our e-commerce operations.",
  },
  {
    name: "Thenuka",
    role: "Managing Director, Bird Paradise Inn",
    image: person3,
    rating: 4.7,
    description: "Axstar delivered a modern, user-friendly website that perfectly represents our hotel. It has made it much easier for guests to explore our services and make inquiries.",
  },
  {
    name: "Michael Reeves",
    role: "Business Consultant",
    image: person3,
    rating: 5,
    description: "What impressed me most about Axstar was their structured, data-driven approach to business consulting. They analyzed our processes, identified key gaps, and provided clear strategies that delivered measurable improvements within a short time.",
  },
  {
    name: "Andrew Collins",
    role: "Director EFG",
    image: person3,
    rating: 4.8,
    description: "The level of detail and strategic thinking Axstar brought to our business was impressive. Their data-driven consulting approach and consistent communication led to noticeable performance improvements early on.",
  },
];

const Testimonials = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);
  const tweenRef = useRef(null);

  // Doubling the array for seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  useGSAP(() => {
    // We use a small timeout or requestAnimationFrame to ensure the DOM has rendered 
    // and scrollWidth is accurate (important for images/dynamic content)
    const scrollWidth = scrollRef.current.scrollWidth;
    const halfWidth = scrollWidth / 2;

    // Main Infinite Animation
    tweenRef.current = gsap.to(scrollRef.current, {
      x: `-=${halfWidth}`, 
      duration: 60, // Slower is usually smoother for text
      ease: "none",
      repeat: -1,
      force3D: true, // Key for GPU acceleration (fixes glitches)
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % halfWidth) // Mathematical loop safety
      }
    });

    // Entrance Animation
    gsap.from(".testimonial-header", {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, { scope: containerRef });

  // Hover handlers with smooth slow-down/speed-up instead of hard pause
  const handleMouseEnter = () => {
    gsap.to(tweenRef.current, { timeScale: 0, duration: 0.8, ease: "power2.out" });
  };
  
  const handleMouseLeave = () => {
    gsap.to(tweenRef.current, { timeScale: 1, duration: 0.8, ease: "power2.inOut" });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative bg-[#000000] py-24 overflow-hidden border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(24,109,96,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <div className="testimonial-header text-center mb-20 px-6">
          

          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-center text-[1rem] font-medium tracking-[0.4em] uppercase mb-4 block">
           Where client success meets trust
          </span>
          <h3 className="text-4xl md:text-5xl font-light text-[#e9e7e2] tracking-tight">
             What Our Clients Say
          </h3>
        </div>

        {/* Carousel Wrapper */}
        <div 
          className="flex whitespace-nowrap overflow-visible"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Added will-change-transform for browser optimization */}
          <div 
            ref={scrollRef} 
            className="flex gap-6 will-change-transform"
            style={{ display: 'inline-flex' }} 
          >
            {duplicatedTestimonials.map((item, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] shrink-0 border border-white/10 bg-[black] backdrop-blur-2xl rounded-3xl p-8 md:p-10 transition-colors duration-500 hover:border-white/20 hover:bg-[#000000]"
              >
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border border-white/20"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <h4 className="text-[#e9e7e2] font-medium tracking-wide">{item.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{item.role}</p>

                    <div className="flex mt-1 space-x-1 text-yellow-500 text-xs">
                  {[1, 2, 3, 4, 5].map((star) => {
                    if (item.rating >= star) return <FaStar key={star} />;
                    if (item.rating >= star - 0.5) return <FaStarHalfAlt key={star} />;
                    return <FaRegStar key={star} />;
                  })}
                </div>
                  </div>
                </div>

                

                <p className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] text-[1rem] leading-relaxed italic font-light whitespace-normal opacity-90">
                  “{item.description}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Edge Fades */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
    </section>
  );
};

export default Testimonials;