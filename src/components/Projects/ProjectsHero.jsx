import React from "react";
import { FaArrowDown, FaPlay } from "react-icons/fa";

const ProjectsHero = () => {
  return (
    <section id="projects-hero" className="relative w-full bg-black text-white overflow-hidden">

      {/* Top spacing */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 text-center">

        

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
         Our Portfolio
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi aspernatur consequatur in minima iste harum consequuntur, natus, odio laudantium deserunt consectetur nulla expedita! Quidem blanditiis delectus voluptatibus ut fuga?
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

            <a href="#web">
                <button className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)] cursor-pointer px-4 py-3 rounded-full font-medium transition mx-auto flex items-center gap-3">
            Explore More
          </button>
            </a>
          

        </div>

       

      </div>

      {/* Bottom gradient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[var(--primary-color)]/30 blur-[180px] rounded-full pointer-events-none"></div>

    </section>
  );
};

export default ProjectsHero;