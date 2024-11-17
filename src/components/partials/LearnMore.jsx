import React from "react";

const LearnMore = () => {
  return (
    <header className="w-full h-auto flex justify-center items-center mt-14 lg:mt-20">
      {/* Content Wrapper */}
      <div className="w-[90%] max-w-7xl flex flex-col lg:flex-row gap-6">
        {/* Instructions Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-8">
          <div className="text-center lg:mt-10">
            <h1 className="text-2xl lg:text-3xl font-bold leading-tight">
              Everyone can be a chef in their own kitchen
            </h1>

            {/* Recipe Description */}
            <p className="text-sm lg:text-base text-gray-600 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              perferendis placeat aperiam quam corporis nihil, vitae eligendi
              maiores eos eius. Delectus odio exercitationem cumque iste vel
              vero nobis nam hic.
            </p>

            {/* Learn More Button */}
            <button className="text-sm lg:text-base border border-gray-400 rounded-3xl px-6 py-2 mt-6 lg:mt-8 hover:bg-gray-100 transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Product Image Section */}
        <div className="w-full lg:w-1/2 relative ">
          <div className="h-[66vh] w-full bg-gradient-to-b from-transparent to-[#E7F9FD] rounded-3xl overflow-hidden relative flex items-center justify-center">
            <img
              className="absolute bottom-0 w-full h-full object-contain"
              src="./chef.png"
              alt="Chef"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default LearnMore;
