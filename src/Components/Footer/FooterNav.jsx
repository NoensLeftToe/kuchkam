import React from "react";
import { Instagram, Facebook, Phone } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full relative top-0 z-50 bg-red-700 text-white shadow-md rounded-b-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-9 py-12 relative">
        
        {/* Left Section - Nav Links */}
        <div className="flex items-center space-x-5 text-sm">
          <a href="#about" className="hover:underline transition">
            About
          </a>
          <a href="#services" className="hover:underline transition">
            Services
          </a>
          <a href="#product" className="hover:underline transition">
            Products
          </a>
          <a href="#works" className="hover:underline transition">
            Recent Work
          </a>
        </div>

        {/* Center Section - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="/Logo.png" alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <Facebook size={22} />
          </a>
          <a
            href="https://wa.me/your-number-here"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <Phone size={22} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
