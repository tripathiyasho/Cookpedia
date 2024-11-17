import React from "react";

const InstaSection = () => {
  return (
    <>
      {/* Outer container: Full width, centered content, and gradient background */}
      <div className="w-full flex items-center justify-center bg-gradient-to-b from-transparent to-[#E7F9FD] mt-14 lg:mt-20">
        {/* Inner container: 90% width, vertically stacked items */}
        <div className="w-[90%] flex items-center justify-center flex-col py-5">
          {/* Section Header: Text is center-aligned and responsive */}
          <div className="w-[80%] flex justify-center items-center flex-col text-center md:w-[60%] mb-10 md:mb-16">
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
              Check out @foodieland on Instagram
            </h1>
            <p className="text-sm lg:text-base text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>

          {/* Instagram Images Section: Flex container with responsive layout */}
          <div className="flex flex-col items-center justify-between mt-10 gap-5 md:flex-row">
            {/* Instagram Post #1 */}
            <img
              className="w-[90%] md:w-[48%] lg:w-[25%] bg-gradient-to-b from-transparent to-[#E7F9FD] rounded-2xl shadow-lg overflow-hidden"
              src="../ins.png"
              alt="Instagram Post 1"
            />
            {/* Instagram Post #2 */}
            <img
              className="w-[90%] md:w-[48%] lg:w-[25%] bg-gradient-to-b from-transparent to-[#E7F9FD] rounded-2xl shadow-lg overflow-hidden"
              src="../ins.png"
              alt="Instagram Post 2"
            />
            {/* Instagram Post #3 */}
            <img
              className="w-[90%] md:w-[48%] lg:w-[25%] bg-gradient-to-b from-transparent to-[#E7F9FD] rounded-2xl shadow-lg overflow-hidden"
              src="../ins.png"
              alt="Instagram Post 3"
            />
            {/* Instagram Post #4 */}
            <img
              className="w-[90%] md:w-[48%] lg:w-[25%] bg-gradient-to-b from-transparent to-[#E7F9FD] rounded-2xl shadow-lg overflow-hidden"
              src="../ins.png"
              alt="Instagram Post 4"
            />
          </div>

          {/* Call-to-Action Button: Links to Instagram profile */}
          <button className="text-sm bg-black text-white lg:text-base border border-gray-400 rounded-xl px-6 py-2 mt-6 lg:mt-8 hover:bg-gray-100 transition-all">
            Visit our Instagram <i className="ri-instagram-fill text-lg"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default InstaSection;
