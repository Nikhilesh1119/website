import React from "react";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";
import Smrtiw from "../assets/Smrtiw.png";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#1D1F20] select-none flex flex-col-reverse sm:flex-row justify-between items-center px-4 sm:px-[94px] py-[30px]">
        <div className="flex flex-col space-y-4">
          <div className="text-[#9098A0] font-roboto-regular text-[18px] text-center sm:text-left">
            Connect with us
          </div>
          {/* <div className="flex flex-row items-center space-x-[10px]">
            <img src={phone} alt="Phone" className="w-5 h-5" />
            <img src={whatsapp} alt="Phone" className="w-5 h-5" />
            <div className="text-white font-roboto-medium text-[18px]">
              +91 9713 411 511
            </div>
          </div> */}
          {/* <div className="flex flex-row items-center space-x-[10px]">
            <img src={email} alt="Email" className="w-5 h-5" />
            <div className="text-white font-roboto-regular text-sm">
              demo@gmail.com
            </div>
          </div> */}
        </div>
        <span className="text-3xl font-bold font-roboto text-white">
          SharedRI
        </span>
        {/* <img
          src={Smrtiw}
          alt="Logo"
          className="w-[60px] sm:w-[80px] object-contain py-4"
        /> */}
      </div>
      <p className="bg-[#1D1F20] text-[#9098A0] font-roboto-regular text-xs py-5 text-center border-t border-[#31373D]">
        © 2024 Smrti Ltd. All rights reserved.
      </p>
    </footer>
  );
}
