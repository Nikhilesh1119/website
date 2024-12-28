import React from "react";
import navbarbg from "../assets/navbarbg.png";

export default function ContactUs() {
  return (
    <>
      {/* Navbar Background */}
      <img
        src={navbarbg}
        alt="Background"
        className="w-full h-[100px] sm:h-[200px] absolute top-0 object-cover"
      />

      {/* Main Container */}
      <div className="mt-[40px] sm:mt-[96px] p-4 sm:p-10 flex flex-col md:flex-row">
        {/* Text Section */}
        <div className="px-2 sm:px-[40px] lg:px-[70px] w-full md:w-5/12 text-center md:text-left">
          <div className="text-[36px] md:text-[46px] font-gilroy leading-[1.2]">
            Have questions or need assistance?
          </div>
          <div className="mt-4 px-2 text-[20px] sm:text-[24px] font-roboto-regular">
            We're here to help—reach out to us today!
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-7/12 mt-6 md:mt-0">
          <div className="p-4 sm:p-6 mx-auto">
            <form className="">
              {/* First Name and Last Name */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-[35px]">
                  <p className="text-sm font-roboto-medium text-[#374151]">
                    First Name
                  </p>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border-b border-[#8D8D8D] font-roboto-medium outline-none text-sm"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-[35px]">
                  <p className="text-sm font-roboto-medium text-[#374151]">
                    Last Name
                  </p>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-[#8D8D8D] outline-none text-sm"
                  />
                </div>
              </div>

              {/* School Name */}
              <div className="mb-[35px]">
                <p className="text-sm font-roboto-medium text-[#374151]">
                  School Name
                </p>
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full border-b border-[#8D8D8D] outline-none text-sm"
                />
              </div>

              {/* Email and Phone */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-[35px]">
                  <p className="text-sm font-roboto-medium text-[#374151]">
                    Email
                  </p>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border-b border-[#8D8D8D] outline-none text-sm"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-[35px]">
                  <p className="text-sm font-roboto-medium text-[#374151]">
                    Phone Number
                  </p>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border-b border-[#8D8D8D] outline-none text-sm"
                  />
                </div>
              </div>

              {/* State and City */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-[35px]">
                  <p className="text-sm font-roboto-medium text-[#374151]">
                    State
                  </p>
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full border-b border-[#8D8D8D] outline-none text-sm"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-[35px]">
                  <p className="text-sm font-roboto-medium text-[#374151]">
                    City
                  </p>
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border-b border-[#8D8D8D] outline-none text-sm"
                  />
                </div>
              </div>

              {/* No of Teachers and Source */}
              <div className="flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 px-2 mb-[35px]">
                  <p className="text-sm font-roboto-medium text-[#374151]">
                    No of Teachers
                  </p>
                  <input
                    type="text"
                    placeholder="No. of Teachers"
                    className="w-full border-b border-[#8D8D8D] outline-none text-sm"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-[35px]">
                  <p className="text-sm font-roboto-medium text-[#374151]">
                    How Did You Get to Know About Us?
                  </p>
                  <input
                    type="text"
                    placeholder="Source"
                    className="w-full border-b border-[#8D8D8D] outline-none text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-[35px]">
                <p className="text-sm font-roboto-medium text-[#374151]">
                  Message
                </p>
                <textarea
                  placeholder="Message"
                  className="w-full border-b border-[#8D8D8D] outline-none text-sm resize-none"
                  rows="4"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center md:justify-end">
                <button
                  type="button"
                  className="text-base px-6 py-2 rounded-xl font-medium text-white bg-[#0F4189] hover:bg-blue-800"
                >
                  Start for Free
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
