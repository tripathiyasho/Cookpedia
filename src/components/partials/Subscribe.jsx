import React from "react";

const Subscribe = () => {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center mt-14 lg:mt-20 ">
        <div className="w-[90%] h-full bg-[#E7F9FD] rounded-3xl flex justify-center items-center flex-col ">
          <div className="w-[90%] h-[50%] my-12  flex justify-center items-center flex-col md:my-20 ">
            <div className="w-[100%] md:w-[70%]  text-center">
              <h1 className="text-2xl md:3xl lg:text-4xl font-bold leading-tight">
                Deliciousness to your inbox
              </h1>
              <p className="text-sm lg:text-base text-gray-600 mt-4 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                culpa minus, aliquam accusamus, officiis nobis cupiditate
                consectetur soluta sed fuga!
              </p>
            </div>
          </div>
          {/* img and Subscribe */}
          <div className="w-full h-[50%] relative   flex justify-center items-center rounded-r   ">
            <div className="flex w-[80%] md:w-[50%] lg:w-[40%] justify-center items-center bg-white rounded-xl p-4 mb-20">
              <input
                type="email"
                placeholder="Your email address..."
                className="flex-1 px-4 py-2  border-gray-300 rounded-l-md focus:outline-none w-full h-full text-sm "
              />
              <button className="px-5 py-4 text-white bg-black rounded-full hover:bg-gray-800 ">
              <i class="ri-notification-3-line "></i>
              </button>
            </div>
            <img
              src="../img1.png"
              className="hidden md:block absolute w-[25%]   bottom-0 left-0  "
              alt=""
            />
            <img
              src="../img2.png"
              className="hidden md:block absolute w-[25%]   bottom-0 right-0 rounded-r-3xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
