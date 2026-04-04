import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="relative z-10 bg-black text-gray-300 px-6 md:px-12 lg:px-20 pt-30 pb-8">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-[var(--primary-color)] font-bold text-[3rem] tracking-wide">
              AXSTAR
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Let’s create something extraordinary together!
          </p>
        </div>

        {/* Main Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            MAIN
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-[var(--primary-color)] cursor-pointer transition">
              Works
            </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer transition">
              Services
            </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer transition">
              About
            </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer transition">
              Pricing
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            SUPPORT
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-[var(--primary-color)] cursor-pointer transition">
              Contact Us
            </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer transition">
              Terms & Condition
            </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer transition">
              Privacy Policy
            </li>
            <li className="hover:text-[var(--primary-color)] cursor-pointer transition">
              Disclosures
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-white font-semibold mb-4 tracking-wide">
            SOCIALS
          </h3>

          <div className="grid grid-cols-5 gap-8 w-[220px]">
            <div className="bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] hover:bg-gray-600 w-10 h-10 rounded flex items-center justify-center cursor-pointer transition">
              <FaFacebook size={18} className="text-white" />
            </div>

            <div className="bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] hover:bg-gray-600 w-10 h-10 rounded flex items-center justify-center cursor-pointer transition">
              <FaInstagram size={18} className="text-white" />
            </div>

        <div className="bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] hover:bg-gray-600 w-10 h-10 rounded flex items-center justify-center cursor-pointer transition">
              <FaWhatsapp size={18} className="text-white" />
            </div>

            <div className="bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] hover:bg-gray-600 w-10 h-10 rounded flex items-center justify-center cursor-pointer transition">
              <FaLinkedin size={18} className="text-white" />
            </div>

             <div className="bg-gradient-to-r from-[var(--primary-color)] via-[#02b96d] to-[#186d60] hover:bg-gray-600 w-10 h-10 rounded flex items-center justify-center cursor-pointer transition">
              <FaXTwitter size={18} className="text-white" />
            </div>

         
          </div>
        </div>

        

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 pb-15 text-sm text-gray-400">
        © 2026 AXSTAR. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;