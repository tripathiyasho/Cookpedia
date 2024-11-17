import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import HorzintalCard from "../partials/HorzintalCard";
const SuggestHome = () => {
  const [dishData, setDishData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/recipes/list", {
        params: {
          from: "10",
          size: "8",
        },
      });
      setDishData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" w-full h-max  flex justify-center items-center flex-col   mt-14 lg:mt-20  ">
      <div className="w-[80%] flex justify-center items-center flex-col text-center md:w-[60%] mb-10 md:mb-16">
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
          Try this delicious recipe to make your day
        </h1>
        <p className="text-sm lg:text-base text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <HorzintalCard data={dishData} />
    </div>
  );
};

export default SuggestHome;
