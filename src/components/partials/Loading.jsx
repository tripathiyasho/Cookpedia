import React from "react";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center  text-white">
      {/* Animated Dual Ring Loader */}
      <div className="relative flex justify-center items-center mb-8">
        <div className="w-16 h-16 border-4 border-solid border-t-transparent border-r-transparent border-blue-600 rounded-full animate-spin-fast"></div>
        <div className="absolute w-10 h-10 border-4 border-solid border-b-transparent border-l-transparent border-blue-600 rounded-full animate-spin-slow"></div>
      </div>
      <p className="text-lg font-semibold animate-pulse text-black">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loading;
