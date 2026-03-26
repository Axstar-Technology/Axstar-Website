import React from "react";

const Vision = () => {
  return (
    <section className="w-full bg-[#e9e7e2] py-15 px-6 md:px-16 lg:px-24">
      
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center lg:items-center md:justify-between gap-8">

        {/* LEFT TITLE */}
        <div className="leading-none">
          <h2 className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-extrabold
            tracking-tight
            text-black
          ">
            OUR
          </h2>

          <h2 className="
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
            font-extrabold
            tracking-tight
            text-black
          ">
            VISION
          </h2>
        </div>


        {/* RIGHT TEXT */}
        <div className="max-w-md md:text-right">
          <p className="
            text-sm
            sm:text-base
            text-gray-700
            leading-relaxed
          ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloremque veniam ipsum odio ullam incidunt eaque, tempora, dolores at quisquam temporibus maxime eveniet soluta vel modi dolor in totam eum?lorem
          </p>
        </div>

      </div>



      

    </section>
  );
};

export default Vision;