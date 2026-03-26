import React from "react";
import { FaArrowDown, FaCogs, FaComments, FaLightbulb, FaPlay } from "react-icons/fa";

const DigitalPresence = () => {
  return (
    <section id="about-hero" className="lg:px-14 px-8 relative w-full  bg-black text-white overflow-hidden">
  {/* ✅ TOP GLOW (FIXED) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[var(--primary-color)]/30 blur-[180px] rounded-full pointer-events-none"></div>

      {/* Top spacing */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-32 text-center">

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto">
         We Build Your Professional, Secure, and Scalable Digital Foundation.
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          Digital Presence is more than a website; it is the infrastructure that builds trust and keeps your business always-on in the AI era. 
        </p>

         {/* Subtitle */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
          As a #1 Leading Tech company we help you to Building the technical foundation for a professional, secure, and always-online business.
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














      {/** */}
      <div className="w-full bg-gradient-to-br from-[#000000] to-[#01302c] border border-[1px] border-neutral-800 rounded-[2rem] text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                  Enterprise Workspace Setup :  <br /> Professionalism & Internal Security
                </h2>
      
                <div className="w-24 h-[1px] bg-neutral-600 mb-6"></div>
      
                <p className="text-gray-400 text-sm md:text-base max-w-md">
                 We replace fragmented tools with a centralized, professional command center that builds trust and efficiency for your team.
                </p>
              </div>
      
              {/* RIGHT SIDE */}
              <div className="space-y-6">
      
               
      
                {/* CARD 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#101b1b] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      Professional Email
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                       Setting up @yourcompany.com using Google Workspace or Microsoft 365.
                    </p>
                  </div>
      
                </div>

                {/* CARD 2 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#101b1b] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      Team Collaboration
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                     Configuring secure cloud storage (Drive/OneDrive) and communication tools (Slack/Teams).
                    </p>
                  </div>
      
                </div>
                
                {/* CARD 3 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#101b1b] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      Identity Management & SSO
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Advanced Single Sign-On (SSO) and secure access controls so only your team accesses sensitive data.
                    </p>
                  </div>
      
                </div>
      
              </div>
      
            </div>
      </div>







      <div className="mt-14 w-full bg-gradient-to-br from-[#000000] to-[#240125] border border-[1px] border-neutral-800 rounded-[2rem] text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                  Secure Infrastructure & Hosting:<br /> Performance & Global Reach
                </h2>
      
                <div className="w-24 h-[1px] bg-neutral-600 mb-6"></div>
      
                <p className="text-gray-400 text-sm md:text-base max-w-md">
                 We build a "Digital Fortress" that ensures your assets are fast, secure, and resilient to any technical failure.
                </p>
              </div>
      
              {/* RIGHT SIDE */}
              <div className="space-y-6">
      
               
      
                {/* CARD 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#201220] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      High-Performance Hosting
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Deploying your website on secure cloud servers (AWS, Google Cloud, or premium VPS).
                    </p>
                  </div>
      
                </div>

                {/* CARD 2 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left  bg-[#201220] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      Domain & DNS Management
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                     Professional acquisition and technical setup of your web address to prevent downtime.
                    </p>
                  </div>
      
                </div>
                
                {/* CARD 3 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#201220] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      SSL & Security
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Advanced encryption, Web Application Firewalls (WAF), and standard protection to boost your Google rankings.
                    </p>
                  </div>
      
                </div>
      
              </div>
      
            </div>
      </div>







      <div className="mt-14 w-full bg-gradient-to-br from-[#000000] to-[#012504] border border-[1px] border-neutral-800 rounded-[2rem] text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                  Local Presence & Reputation Setup:<br />  Local Visibility & Growth
                </h2>
      
                <div className="w-24 h-[1px] bg-neutral-600 mb-6"></div>
      
                <p className="text-gray-400 text-sm md:text-base max-w-md">
                 For businesses that need to be found on the map, we ensure you are visible exactly when and where your customers are searching.
                </p>
              </div>
      
              {/* RIGHT SIDE */}
              <div className="space-y-6">
      
               
      
                {/* CARD 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#132014] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      Google Business Profile (GBP) Launch
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Professional setup and verification of map listings.
                    </p>
                  </div>
      
                </div>

                {/* CARD 2 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#132014] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      Reputation System Setup
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                    Implementing automated tools that ask customers for reviews and display them on the website to build instant trust.
                    </p>
                  </div>
      
                </div>
                
                
      
              </div>
      
            </div>
      </div>







      <div className="mt-14 w-full bg-gradient-to-br from-[#000000] to-[#262b01] border border-[1px] border-neutral-800 rounded-[2rem] text-white mb-14 py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
              {/* LEFT SIDE */}
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-6">
                  Digital Asset Security & "Anti-Clone”:<br /> Brand Verification in the AI Era
                </h2>
      
                <div className="w-24 h-[1px] bg-neutral-600 mb-6"></div>
      
                <p className="text-gray-400 text-sm md:text-base max-w-md">
                 As AI makes it easier to fake businesses, "Verified" presence is in high demand and protected from impersonation.
                </p>
              </div>
      
              {/* RIGHT SIDE */}
              <div className="space-y-6">
      
               
      
                {/* CARD 1 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#202214] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      Brand Verification
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                      Helping businesses get "Verified" (Blue Checks) across LinkedIn, Meta, and Google to prevent impersonation.
                    </p>
                  </div>
      
                </div>

                {/* CARD 2 */}
                <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left bg-[#202214] p-5 rounded-xl border border-gray-800 hover:border-gray-600 transition gap-5 lg:gap-10">
      
                  {/* ICON */}
                  <div className="text-[2rem] bg-[#1b3b3b] p-6 rounded-full text-green-400 mb-3 md:mb-0 md:order-1">
                    <FaComments />
                  </div>
      
                  {/* TEXT */}
                  <div className="md:order-2">
                    <h4 className="text-white font-medium">
                      Secure Brand Vault
                    </h4>
                    <p className="text-sm text-neutral-400 mt-1">
                    Setting up a "Digital Asset Manager" where all logos, brand colors and official photos are stored securely for the team.
                    </p>
                  </div>
      
                </div>
                
                
      
              </div>
      
            </div>
      </div>


    </section>
  );
};

export default DigitalPresence;