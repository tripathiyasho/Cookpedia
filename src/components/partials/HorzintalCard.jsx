import React from "react";
import { Link } from "react-router-dom";
const HorzintalCard = ({ data, title }) => {
  return (
    <div className=" w-full h-max  flex justify-center items-center flex-col   mt-14 lg:mt-20  ">
      <div className="w-[80%] flex justify-center items-center flex-col text-center md:w-[60%] mb-10 md:mb-16">
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
          {title}
        </h1>
        <p className="text-sm lg:text-base text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>

      <div className="flex flex-wrap justify-center  gap-6 p-4">
        {data.map((d, i) => (
          <Link 
          to = {`/recipe/detail/${d.id}`}
            key={i}
            className="w-[90%] sm:w-[48%]  lg:w-[20%] rounded-2xl shadow-md  overflow-hidden flex flex-col"
          >
            {/* Image */}
            <img
              src={d.thumbnail_url}
              alt={d.name}
              className="w-full h-40 sm:h-48 lg:h-56 object-cover"
            />
            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h1 className="text-lg font-semibold text-gray-800 lg:text-xl">
                {d.name}
              </h1>
              <div className="flex items-center justify-start gap-4 mt-2 text-xs text-gray-600">
                <span className="flex items-center gap-1">
                  <i className="ri-timer-line"></i>{" "}
                  {d.total_tine_minutes > 0 ? d.total_tine_minutes : 30} minutes
                </span>
                <span className="flex items-center gap-1">
                  <i className="ri-database-2-line"></i> {d.yields}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HorzintalCard;
