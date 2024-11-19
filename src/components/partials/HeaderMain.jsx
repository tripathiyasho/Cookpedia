import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderMain = ({ data, handleNext, handlePrev, generateRandomDate }) => {
  return (
    <header className="w-full h-[38vh] flex justify-center items-center md:h-[55vh] lg:h-[66vh] overflow-hidden relative my-6 lg:mt-8">
      {/* Left Navigation Button */}
      <button
        onClick={handlePrev}
        className="absolute left-5 text-2xl md:text-3xl lg:text-4xl z-10"
      >
        <i className="ri-arrow-left-circle-fill"></i>
      </button>

      {/* Recipe Content */}
      {data && (
        <Link to = {`/recipe/detail/${data.id}`} className="w-[73%] h-[95%] flex md:w-[85%] ">
          {/* Instructions Section */}
          <div className="hidden md:flex flex-col justify-between bg-[#E7FAFE] h-full w-[50%] rounded-l-3xl p-8">
            {/* Tag */}
            <div className="h-8 w-32 flex items-center justify-center bg-white rounded-xl gap-1 px-2">
              <img className="h-[2vh]" src="../image.png" alt="Tag icon" />
              <h6 className="text-sm font-bold">Hot recipes</h6>
            </div>

            {/* Recipe Name */}
            <h1 className="text-2xl font-bold lg:text-3xl">{data.name}</h1>

            {/* Recipe Description */}
            <p className="text-xs lg:text-base text-gray-600">
              {data.description || "No description available."}
            </p>

            {/* Recipe Details */}
            <div className="flex gap-5">
              <span className="text-xs lg:text-sm bg-zinc-300 rounded-xl p-1 flex items-center gap-1">
                <i className="ri-timer-line"></i>{" "}
                {data.total_time_minutes > 0 ? data.total_time_minutes : 30}{" "}
                minutes
              </span>
              <span className="text-xs lg:text-sm bg-zinc-300 rounded-xl p-1">
                {data.yields || "Serves 1"}
              </span>
            </div>

            {/* Footer: Creator Info and Action */}
            <div className="flex justify-between items-center">
              {/* Creator Info */}
              <div className="flex gap-2 items-center">
                <img
                  className="rounded-full h-12 w-12 object-cover"
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Creator"
                />
                <div>
                  <h6 className="text-xs lg:text-sm font-bold">
                    {data.credits[0].name ? data.credits[0].name : "Anonymous"}
                  </h6>
                  <span className="text-xs lg:text-sm text-gray-500">
                    {generateRandomDate()}
                  </span>
                </div>
              </div>

              {/* View Recipe Button */}
              <button className="text-xs lg:text-base border rounded-3xl px-4 py-2 flex items-center gap-1 hover:bg-gray-100 transition-all">
                View Recipe <i className="ri-play-circle-fill"></i>
              </button>
            </div>
          </div>

          {/* Product Image Section */}
          <div className="w-full h-full md:w-[50%]">
            <img
              className="rounded-3xl w-full h-full object-cover md:rounded-l-none"
              src={data.thumbnail_url}
              alt="Recipe Dish"
            />
          </div>
        </Link>
      )}

      {/* Right Navigation Button */}
      <button
        onClick={handleNext}
        className="absolute right-5 text-2xl md:text-3xl lg:text-4xl z-10"
      >
        <i className="ri-arrow-right-circle-fill"></i>
      </button>
    </header>
  );
};

export default HeaderMain;
