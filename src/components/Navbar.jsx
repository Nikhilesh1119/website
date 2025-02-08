import React, { useState } from "react";
import Smrti from "../assets/Smrti.png";
import Smrtiw from "../assets/Smrtiw.png";
import Menu from "../assets/menu.png";
import cross from "../assets/cross.png";
import { Link, useLocation } from "react-router-dom";
import { baseURL } from "../services";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Determine styles or layout based on the current URL
  const isContactPage = location.pathname === "/contact";

  return (
    <div className="relative select-none h-24 w-full px-6 py-4 bg-transparent flex flex-row justify-between items-center z-10">
      {/* Logo */}
      <Link to="/">
        {/* <img
          src={isContactPage ? Smrtiw : Smrti}
          alt="Logo"
          className="w-[80px] h-[35px] cursor-pointer object-contain transition-all duration-300"
        /> */}
        <span
          className={`text-3xl font-bold font-roboto cursor-pointer ${
            isContactPage ? "text-white" : "text-black"
          }`}
        >
          SharedRI
        </span>
      </Link>

      {/* Desktop Buttons */}
      <div className="hidden sm:flex flex-row items-center">
        <Link
          to="/contact"
          className={` text-base px-4 py-2 font-medium hover:text-orange-400 mr-[17px] ${
            isContactPage ? "text-white" : "text-black"
          }`}
        >
          Contact Us
        </Link>
        <a
          href="https://development-web.nisaiji.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-base  px-4 py-2 rounded-xl font-medium ${
            isContactPage
              ? "text-black bg-white hover:bg-[#0F4189] hover:text-white"
              : "text-white bg-[#0F4189] hover:bg-blue-800"
          }`}
        >
          Start for Free
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex items-center">
        <img
          src={isMenuOpen ? cross : Menu}
          alt="Menu Icon"
          className={`w-[32px] h-[32px] cursor-pointer ${
            isContactPage ? "invert" : ""
          }`}
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
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-[#FF793F] text-base px-4 py-2 font-roboto-medium hover:text-orange-400 hover:transition-colors hover::duration-700 w-full text-center"
          >
            Contact Us
          </Link>
          <a
            onClick={() => setIsMenuOpen(false)}
            href="https://development-web.nisaiji.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-base bg-[#1D5CB7] mx-10 py-2 rounded-xl font-roboto-medium mt-2 hover:bg-blue-800 transition-all duration-700 ease-in-out w-full text-center"
          >
            Start for Free
          </a>
        </div>
      </div>
    </div>
  );
}
