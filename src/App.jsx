import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import ServicesPage from "./components/Services/ServicesPage";
/* ===== IT & Technology Services ===== */
import WebDevelopment from "./components/Services/ItandTechServices/WebDevelopment";
import MobileAppDevelopment from "./components/Services/ItandTechServices/MobileAppDevelopment";
import AiDrivenSolutions from "./components/Services/ItandTechServices/AiDrivenSolutions";
import Ecommerce from "./components/Services/ItandTechServices/Ecommerce";
import DigitalPresence from "./components/Services/ItandTechServices/DigitalPresence";
/* ===== Digital Services ===== */

import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import ContactPage from "./components/Contact/ContactPage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import ProjectDetails from "./components/Projects/ProjectDetails";
import WhatsAppPopup from "./components/WhatsAppPopup";
import CareersPage from "./components/Careers/CareersPage";
import DigitalServicesPage from "./components/Services/DigitalServices/DigitalServicesPage";
import ItandBusinessPage from "./components/Services/ItandBusiness/ItandBusinessPage";
import ItandTechnologyPage from "./components/Services/ItandTechServices/ItandTechnologyPage";

const AppWrapper = () => {
  const scrollRef = useRef();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1s loader
    return () => clearTimeout(timer);
  }, []);

  // Show loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // shorter loader for navigation
    return () => clearTimeout(timer);
  }, [location.pathname]);

  // 🔥 Only render loader while loading
  if (loading) return <Loading />;

  return (
    <>
      <ScrollToTop scrollRef={scrollRef} />
      <SmoothScroll ref={scrollRef}>
        <div
          className="
            min-h-screen
            w-full
            bg-cover
            bg-center
            bg-fixed
            bg-blend-darken
            bg-[url('/src/assets/mobile-bg-4.jpeg')]
            md:bg-[url('/src/assets/hero-bg-24.png')]
          "
        >
          <div className="max-w-full mx-auto">
            <Navbar />

            <Routes>
              {/* ===== Main Pages ===== */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project-details" element={<ProjectDetails />} />
              <Route path="/careers" element={<CareersPage />} />

              {/* ===== IT & Technology Services ===== */}
              <Route path="/it&technology" element={<ItandTechnologyPage />} />
              <Route path="/web-development" element={<WebDevelopment />} />
              <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
              <Route path="/ai-driven-solutions" element={<AiDrivenSolutions />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/digital-presence" element={<DigitalPresence />} />

              {/* ===== Digital Services ===== */}
              <Route path="/digital-services" element={<DigitalServicesPage />} />

              {/* ===== IT & Business Consulting ===== */}
              <Route path="/it&business" element={<ItandBusinessPage />} />
            </Routes>

            <WhatsAppPopup />
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;