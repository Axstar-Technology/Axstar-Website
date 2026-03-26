import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiFolder,
  FiPhone,
  FiGrid,
  FiChevronDown,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";
import logo from "../assets/c1.png";

/* ---------------- NAV ITEMS ---------------- */
const navItems = [
  { id: "home", label: "Home", icon: <FiHome size={20} />, path: "/" },
  { id: "services", label: "Services", icon: <FiGrid size={20} />, path: "/services" },
  { id: "about", label: "About Us", icon: <FiUser size={20} />, path: "/about" },
  { id: "careers", label: "Careers", icon: <FiUser size={20} />, path: "/careers" },
  { id: "projects", label: "Portfolio", icon: <FiFolder size={20} />, path: "/projects" },
  { id: "contact", label: "Contact Us", icon: <FiPhone size={20} />, path: "/contact" },
];

/* ---------------- SERVICES ---------------- */
const itTechSubServices = [
  { label: "Web Development", path: "/web-development" },
  { label: "Mobile App Development", path: "/mobile-app-development" },
  { label: "AI Driven & Automation Solutions", path: "/ai-driven-solutions" },
  { label: "E-commerce Software Solutions", path: "/ecommerce" },
  { label: "Digital Presence Setup", path: "/digital-presence" },
];

const digitalSubServices = [
  { label: "Social Media Management", path: "/social-media-management" },
  { label: "Search Engine Marketing (SEO)", path: "/seo" },
  { label: "Branding & Content Creation", path: "/branding" },
  { label: "Digital Marketing Support", path: "/digital-marketing-support" },
];

const businessSubServices = [
  { label: "Business Planning & Growth Strategy", path: "/business-planning" },
  { label: "Business & Project Documentation", path: "/business-documentation" },
  { label: "Digital Transformation Consulting", path: "/digital-consulting" },
];

export default function Navbar() {
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const desktopDropdownRef = useRef(null);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    services: false,
    itTech: false,
    digital: false,
    business: false,
  });

  /* ---------------- HERO MAP ---------------- */
  const heroMap = {
    "/": "home-hero",
    "/about": "about-hero",
    "/contact": "contact-hero",
    "/careers": "career-hero",
    "/projects": "projects-hero",
    "/services": "services-hero",
  };

  /* ---------------- HANDLE NAV CLICK ---------------- */
  const handleNavClick = (path, heroId) => (e) => {
    if (location.pathname === path && heroId) {
      e.preventDefault();
      const section = document.getElementById(heroId);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    } else {
      if (heroId) sessionStorage.setItem("scrollTarget", heroId);
    }
  };

  /* ---------------- AUTO SCROLL AFTER NAVIGATION ---------------- */
  useEffect(() => {
    const targetId = sessionStorage.getItem("scrollTarget");
    if (targetId) {
      setTimeout(() => {
        const section = document.getElementById(targetId);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        sessionStorage.removeItem("scrollTarget");
      }, 200);
    }
  }, [location]);

  useEffect(() => {
    setOpenServices(false);
    setMobileMenu(false);
    setMobileDropdowns({
      services: false,
      itTech: false,
      digital: false,
      business: false,
    });
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target)) {
        setOpenServices(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileDropdown = (key) => {
    setMobileDropdowns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="lg:hidden fixed top-2 left-1/2 -translate-x-1/2 w-[95%] rounded-[2rem] z-50 bg-white/10 backdrop-blur-xl shadow-lg px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={handleNavClick("/", heroMap["/"])}>
          <img src={logo} className="w-[3.5rem] sm:w-[4rem]" />
        </Link>

        <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white text-2xl">
          {mobileMenu ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {/* ================= MOBILE MENU ================= */}
<div
  className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black text-white z-40 transition-all duration-300 ${
    mobileMenu ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="pt-24 px-5 sm:px-6 space-y-4 overflow-y-auto h-full">
    {navItems.map((item) => {
      if (item.id !== "services") {
        return (
          <Link
            key={item.id}
            to={item.path}
            onClick={handleNavClick(item.path, heroMap[item.path])}
            className={`block py-3 border-b border-white/10 text-base sm:text-lg transition-colors duration-300 ${
              location.pathname === item.path
                ? "text-[var(--primary-color)] font-medium"
                : "text-white"
            }`}
          >
            {item.label}
          </Link>
        );
      }

      // Services dropdown
      return (
        <div key={item.id}>
          <button
            onClick={() => toggleMobileDropdown("services")}
            className="flex justify-between w-full py-3 border-b border-white/10 text-base sm:text-lg font-bold"
          >
            {item.label}
            <FiChevronDown className={`transition-transform duration-300 ${mobileDropdowns.services ? "rotate-180" : ""}`} />
          </button>

          {mobileDropdowns.services && (
            <div className="pl-0 mt-4 space-y-6">
              {/* IT & Technology */}
              <div>
                <Link
                  to="/it&technology"
                  onClick={handleNavClick("/it&technology", heroMap["/it&technology"])}
                  className="flex justify-between items-center text-[var(--primary-color)] font-bold text-lg mb-2"
                >
                  IT & Technology Services <FiChevronRight />
                </Link>
                <div className="pl-4 space-y-1">
                  {itTechSubServices.map((s, i) => (
                    <Link
                      key={i}
                      to={s.path}
                      onClick={handleNavClick(s.path, heroMap[s.path])}
                      className="block text-white/80 text-base hover:text-[var(--primary-color)] transition-colors duration-300"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Business Consulting */}
              <div>
                <Link
                  to="/it&business"
                  onClick={handleNavClick("/it&business", heroMap["/it&business"])}
                  className="flex justify-between items-center text-[var(--primary-color)] font-bold text-lg mb-2"
                >
                  Business Consulting <FiChevronRight />
                </Link>
                <div className="pl-4 space-y-1">
                  {businessSubServices.map((s, i) => (
                    <Link
                      key={i}
                      to={s.path}
                      onClick={handleNavClick(s.path, heroMap[s.path])}
                      className="block text-white/80 text-base hover:text-[var(--primary-color)] transition-colors duration-300"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Digital Services */}
              <div>
                <Link
                  to="/digital-services"
                  onClick={handleNavClick("/digital-services", heroMap["/digital-services"])}
                  className="flex justify-between items-center text-[var(--primary-color)] font-bold text-lg mb-2"
                >
                  Digital Services <FiChevronRight />
                </Link>
                <div className="pl-4 space-y-1">
                  {digitalSubServices.map((s, i) => (
                    <Link
                      key={i}
                      to={s.path}
                      onClick={handleNavClick(s.path, heroMap[s.path])}
                      className="block text-white/80 text-base hover:text-[var(--primary-color)] transition-colors duration-300"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className={`hidden lg:flex fixed top-5 rounded-[2.5rem] border border-[1px] border-neutral-700 left-1/2 -translate-x-1/2 w-[90%] px-6 xl:px-10 py-3 justify-between items-center z-50 transition-all duration-300 ${
          scrolled || openServices
            ? "bg-white/10 backdrop-blur-xl shadow-lg"
            : "bg-white/10 backdrop-blur-xl shadow-lg"
        }`}
      >
        <Link to="/" onClick={handleNavClick("/", heroMap["/"])}>
          <img src={logo} className="w-[4rem] xl:w-[5rem]" />
        </Link>

        <ul className="flex gap-6 xl:gap-12 items-center">
          {navItems.filter((item) => item.id !== "contact").map((item) => (
            <li key={item.id} className="relative">
              {item.id === "services" ? (
                <div ref={desktopDropdownRef}>
                  <button
                    onClick={() => setOpenServices(!openServices)}
                    className={`flex cursor-pointer items-center gap-2 text-sm xl:text-base transition-colors duration-300 ${
                      location.pathname.startsWith("/services") ||
                      itTechSubServices.some((s) => s.path === location.pathname) ||
                      digitalSubServices.some((s) => s.path === location.pathname) ||
                      businessSubServices.some((s) => s.path === location.pathname)
                        ? "text-[var(--primary-color)]"
                        : "text-white"
                    }`}
                  >
                    {item.label}
                    <FiChevronDown className={`transition-transform duration-300 ${openServices ? "rotate-180" : ""}`} />
                  </button>

                  <div
                    className={`fixed left-0 rounded-[2rem] top-[67px] w-full bg-gradient-to-br from-[#010505] to-[#00251f] backdrop-blur-xl transition-all duration-300 ${
                      openServices ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="max-w-7xl mx-auto px-6 xl:px-12 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-20">
                      <div>
                        <h3 className="text-xl text-[var(--primary-color)] font-semibold mb-7">
                          <Link to="/it&technology" className="flex items-center gap-1">
                            IT & Technology Services <FiChevronRight className="text-[1.3rem]" strokeWidth={3} />
                          </Link>
                        </h3>
                        {itTechSubServices.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={handleNavClick(s.path, heroMap[s.path])}
                            className={`block mb-4 transition-colors duration-300 ${
                              location.pathname === s.path
                                ? "text-[var(--primary-color)] font-medium"
                                : "text-neutral-300 hover:text-[var(--primary-color)]"
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>

                      <div>
                        <h3 className="text-xl text-[var(--primary-color)] font-semibold mb-7">
                          <Link to="/it&business" className="flex items-center gap-1">
                            IT & Business Consulting <FiChevronRight className="text-[1.3rem]" strokeWidth={3} />
                          </Link>
                        </h3>
                        {businessSubServices.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={handleNavClick(s.path, heroMap[s.path])}
                            className={`block mb-4 transition-colors duration-300 ${
                              location.pathname === s.path
                                ? "text-[var(--primary-color)] font-medium"
                                : "text-neutral-300 hover:text-[var(--primary-color)]"
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>

                      <div>
                        <h3 className="text-xl text-[var(--primary-color)] font-semibold mb-7">
                          <Link to="/digital-services" className="flex items-center gap-1">
                            Digital Services <FiChevronRight className="text-[1.3rem]" strokeWidth={3} />
                          </Link>
                        </h3>
                        {digitalSubServices.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={handleNavClick(s.path, heroMap[s.path])}
                            className={`block mb-4 transition-colors duration-300 ${
                              location.pathname === s.path
                                ? "text-[var(--primary-color)] font-medium"
                                : "text-neutral-300 hover:text-[var(--primary-color)]"
                            }`}
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  onClick={handleNavClick(item.path, heroMap[item.path])}
                  className={`text-sm xl:text-base transition-colors duration-300 ${
                    location.pathname === item.path
                      ? "text-[var(--primary-color)] font-medium"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {navItems.filter((item) => item.id === "contact").map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={handleNavClick(item.path, heroMap[item.path])}
            className="px-6 py-2 bg-[var(--primary-color)]/0 border border-[1px] border-[var(--primary-color)] text-[var(--primary-color)] font-medium rounded-full transition-all duration-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}