import React from "react";

const HeaderMain = () => {
  return (
    <header className="w-full h-[38vh] flex justify-center items-center md:h-[55vh] lg:h-[66vh]">
      {/* Left Navigation Button */}
      <button className="text-2xl mx-5 md:text-3xl lg:text-4xl">
        <i className="ri-arrow-left-circle-fill"></i>
      </button>

      {/* Content Wrapper */}
      <div className="w-[85%] h-[95%] flex">
        {/* Instructions Section */}
        <div className="hidden md:flex flex-col justify-between bg-[#E7FAFE] h-full w-[50%] rounded-l-3xl p-8">
          {/* Tag */}
          <div className="h-8 w-32 flex items-center justify-center bg-white rounded-xl gap-1 px-2">
            <img className="h-[2vh]" src="./image.png" alt="Tag icon" />
            <h6 className="text-sm font-bold">Hot recipes</h6>
          </div>

          {/* Recipe Name */}
          <h1 className="text-2xl font-bold lg:text-3xl">
            Name of the Recipe
          </h1>

          {/* Recipe Description */}
          <p className="text-xs lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            perferendis placeat aperiam quam corporis nihil, vitae eligendi
            maiores eos eius. Delectus odio exercitationem cumque iste vel vero
            nobis nam hic.
          </p>

          {/* Recipe Details */}
          <div className="flex gap-5">
            <span className="text-xs lg:text-sm bg-zinc-300 rounded-xl p-1 flex items-center gap-1">
              <i className="ri-timer-line"></i> 45 minutes
            </span>
            <span className="text-xs lg:text-sm bg-zinc-300 rounded-xl p-1">
              Non-Vegetarian
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
                  Sahashank Dhaiya
                </h6>
                <span className="text-xs lg:text-sm text-gray-500">
                  13/08/2001
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
            src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Recipe Dish"
          />
        </div>
      </div>

      {/* Right Navigation Button */}
      <button className="text-2xl mx-5 md:text-3xl lg:text-4xl">
        <i className="ri-arrow-right-circle-fill"></i>
      </button>
    </header>
  );
};

export default HeaderMain;
