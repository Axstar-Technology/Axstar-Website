import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import projectImg1 from "../../assets/projectimg1.png";
import projectImg2 from "../../assets/projectimg2.png";




gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: "Website for a Clothing Store",
    description:
      "A modern clothing store website where customers can browse stylish fashion items, explore new arrivals, and shop easily through a clean and user-friendly interface.",
    image: projectImg1,
   
    technologies: ["React", "TailwindCSS", "Firebase", "NodeJS", "ExpressJS", "MongoDB"],
    duration: "2 Weeks",
    client: "Private Business Owner",
    type: "Business Website",
    features: [
      "Responsive design",
      "Admin dashboard",
      "Online Payment",
      "SEO optimization",
      "Modern UI",
      "Product Showcase"
    ],
  },
  {
    title: "Modern Electronics Store Website",
    description:
      "A modern electronics store website that showcases products like headphones, laptops, smartwatches, and gaming devices with a clean and responsive design for easy browsing.",
    image: projectImg2,
  
    technologies: ["React","TailwindCSS", "Node.js", "Express.js", "Firebase", "MongoDB"],
    duration: "3 weeks",
    client: "University Student",
    type: "E-Commerce Website",
    features: [
      "Authentication system",
      "Responsive design",
      "Modern UI/UX",
      "Performance optimized",
      "Product category sections",
    ],
  },
];

export default function ProjectSection() {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const sectionRef = useRef(null);
  const Animation1Ref = useRef(null);
  const Animation2Ref = useRef(null);
  const Animation3Ref = useRef(null);
  const modalRef = useRef(null);

  useGSAP(() => {
    gsap.from(Animation1Ref.current, {
      x: 100,
      opacity: 0,
      delay: 1,
      duration: 1.5,
      ease: "power3.in",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    gsap.from(Animation2Ref.current, {
      x: 100,
      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "power3.in",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });

    gsap.from(Animation3Ref.current, {
      x: -100,
      opacity: 0,
      duration: 1.5,
      delay: 1,
      ease: "power3.in",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
    });
  });

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = scrollBarWidth + "px";

      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section ref={sectionRef} id="projects" className="relative w-full px-6 pb-25">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(120,130,150,0.25),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#0b1117]/60 to-[#000000]" />
      </div>

      <div className="relative w-full overflow-hidden pb-20 pt-20">
       

          <h2 className="text-[1rem] uppercase tracking-[0.4em] text-center text-gray-500">
      Empowered by Global Standards 
          </h2>
    <h2 className="text-3xl text-center font-light md:text-5xl leading-tight text-white mb-16">
    Our Latest Projects
    </h2>

        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="flex flex-col lg:flex-row w-full h-full"
          >

            <div
              ref={Animation2Ref}
              className="w-full lg:w-[40%] flex items-center px-6 md:px-12 text-white space-y-6"
            >
              <div>
                <h1 className="text-3xl md:text-5xl font-bold">
                  {slides[current].title}
                </h1>

                <p className="text-gray-300 text-[.8rem] mt-4">
                  {slides[current].description}
                </p>

                <button
                  onClick={() => setIsOpen(true)}
                  className="cursor-pointer mt-6 px-6 py-3 bg-[var(--primary-color)]/50 text-black rounded font-medium hover:bg-[var(--primary-color)]/60 transition"
                >
                  View Project Details
                </button>
              </div>
            </div>

            <div
              ref={Animation3Ref}
              className="w-full lg:w-[60%] flex items-center mt-6 lg:mt-0"
            >
              <div className="w-full h-[90%] mx-4 md:mx-8 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={slides[current].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
          <button
            onClick={prevSlide}
            className="cursor-pointer w-9 h-9 rounded-full border border-[var(--primary-color)] bg-[var(--primary-color)]/0 text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="cursor-pointer w-9 h-9 rounded-full border border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white"
          >
            ❯
          </button>
        </div>
      </div>

    </section>
  );
}