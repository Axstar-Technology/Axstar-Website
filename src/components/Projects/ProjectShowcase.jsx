import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [

     {
    id: 1,
    image: "https://i.pinimg.com/736x/cb/d7/8d/cbd78d295e767641b7adc9021dc4bb10.jpg",
    title: "Web Application For the EFG Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsum repellendus? Doloribus aliquam itaque atque qui at a voluptate quis quidem nostrum assumenda repudiandae dolores, possimus eligendi porro iusto nisi?.",
     
      requirements: [
      "Fully Responsive",
      "SEO-friendly structure",
      "Beautiful light and dark mode",
      "Cross-browser compatibility",
      "Easy navigation and user-friendly layout",
      "High-quality images and visuals",
      "Smooth scrolling and animations",
      "Optimized for conversions",
      "Secure and reliable"
    ],
    clientCountry: "Japan",
    industry: 'Fashion Store',
    duration: '1 Weeks',
    projectType: 'Landing Page',
    techStack: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Lenis",
      "GSAP",
    ],
    security: ["jwt Auth", "Google Auth"],
    status: "Completed",
    projectSuccessRate: "4.8",
    deliveryTime: "100%",
    clientName: 'Hiroshi Tanaka',
    clientImg: "https://randomuser.me/api/portraits/women/46.jpg",

    
    
  },
  
  {
    id: 2,
    image: "https://i.pinimg.com/1200x/0b/98/23/0b9823cc17c74d97a62b6d4baa7293e8.jpg",
    title: "Web Application For the XYZ Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsum repellendus? Doloribus aliquam itaque atque qui at a voluptate quis quidem nostrum assumenda repudiandae dolores, possimus eligendi porro iusto nisi?.",
     
      requirements: [
      "36 Compositions",
      "Lightning-fast creation",
      "Beautiful light and dark mode",
      "Fully customizable",
      "Minimal & thoughtful designs",
    ],
    clientCountry: "UK",
    industry: 'Retail',
    duration: '5 Weeks',
    projectType: 'Web Application',
    techStack: [
      "React",
      "HTML",
      "CSS",
    ],
    security: ["jwt Auth", "Google Auth"],
    status: "Under Development",
    projectSuccessRate: "4.5",
    deliveryTime: "99%",
    clientName: 'Raven Rayes',
    clientImg: "https://randomuser.me/api/portraits/women/45.jpg",

    
    
  },

  {
    id: 3,
    image: "https://i.pinimg.com/1200x/ba/2b/e5/ba2be5002b8a495e14533ad7c2ea8e6a.jpg",
    title: "Website for ABC Company",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsum repellendus? Doloribus aliquam itaque atque qui at a voluptate quis quidem nostrum assumenda repudiandae dolores, possimus eligendi porro iusto nisi?",
  
      requirements: [
      "36 Compositions",
      "Lightning-fast creation",
      "Beautiful light and dark mode",
      "Fully customizable",
      "Minimal & thoughtful designs",
    ],
    clientCountry: "USA",
    industry: 'IT',
    duration: '2 Weeks',
    projectType: 'Website',
    techStack: [
      "React",
      "Tialwind",
    ],
    security: ["jwd Auth", "Firebase"],
    status: "Not Completed",
    projectSuccessRate: "5.0",
    deliveryTime: "100%",
    clientName: "Clark Griffin",
    clientImg: "https://randomuser.me/api/portraits/women/44.jpg",
    
    
  },


];

const ProjectShowcase = () => {
  const navigate = useNavigate();

  const handleDetails = (project) => {
    navigate("/project-details", { state: project });
  };

  return (
    <section id="portfolio-showcase" className="w-full bg-[#0A0A0A] py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-neutral-800 rounded-2xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-white text-lg font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm flex-grow">
                {project.description}
              </p>

              <div className="flex gap-3 justify-center mt-6">
                <button className="cursor-pointer px-10 py-2 text-sm rounded-lg bg-[var(--primary-color)] text-black">
                  View
                </button>

                <button
                  onClick={() => handleDetails(project)}
                  className="cursor-pointer px-10 py-2 text-sm rounded-lg border border-neutral-500 text-green-200 hover:bg-green-800"
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;