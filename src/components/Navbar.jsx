import React, { useState } from "react";
import Smrti from "../assets/Smrti.png";
import Menu from "../assets/Menu.png";
import cross from "../assets/cross.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-24 w-full px-6 py-4 bg-[#ffffff00] flex flex-row justify-between items-center">
      {/* Logo */}
      <img
        src={Smrti}
        alt="Logo"
        className="w-[80px] h-[35px] cursor-pointer object-contain"
      />

      {/* Desktop Buttons */}
      <div className="hidden sm:flex flex-row items-center">
        <button
          type="button"
          className="text-black text-base px-4 py-2 font-medium hover:text-orange-400 mr-[17px]"
        >
          Contact Us
        </button>
        <button
          type="button"
          className="text-white text-base bg-[#0F4189] hover:bg-blue-800 px-4 py-2 rounded-xl font-medium"
        >
          Start for Free
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center">
        <img
          src={isMenuOpen ? cross : Menu}
          alt="Menu Icon"
          className="w-[32px] h-[32px] cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Animated Dropdown Menu */}
      <div
        className={`sm:hidden absolute top-full left-0 bg-white transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } w-full overflow-hidden`}
        style={{
          border: "0px 0px 20px 20px",
          boxShadow: "-20px 20px 24px -4px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="flex flex-col items-center p-4">
          <div
            className="text-[#FF793F] text-base px-4 py-2 font-roboto-medium hover:text-orange-400 hover:transition-colors hover::duration-700 w-full text-center"
            onClick={() => setIsMenuOpen(false)} // Close menu after click
          >
            Contact Us
          </div>
          <div
            className="text-white text-base bg-[#1D5CB7] mx-10 py-2 rounded-xl font-roboto-medium mt-2 hover:bg-blue-800 transition-all duration-700 ease-in-out w-full text-center"
            onClick={() => setIsMenuOpen(false)} // Close menu after click
          >
            Start for Free
          </div>
        </div>
      </div>
    </div>
  );
}
