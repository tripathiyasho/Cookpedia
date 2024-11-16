import React from "react";

const Card = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center  gap-6 p-4">
      {data.map((d, i) => (
        <div
          key={i}
          className="w-full sm:w-[90%] md:w-[48%] lg:w-[25%] bg-gradient-to-b from-transparent to-[#E7F9FD] rounded-2xl shadow-lg overflow-hidden flex flex-col"
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
            <div className="flex items-center justify-start gap-4 mt-2 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <i className="ri-timer-line"></i>{" "}
                {d.total_tine_minutes > 0 ? d.total_tine_minutes : 30} minutes
              </span>
              <span className="flex items-center gap-1">
                <i className="ri-database-2-line"></i> {d.yields}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
