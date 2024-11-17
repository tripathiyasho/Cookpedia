import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import Card from "./Card";

const RecipeHome = () => {
  const [dishData, setDishData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/recipes/list", {
        params: {
          from: "20",
          size: "9",
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

    <div className=" w-full h-max  flex justify-center items-center flex-col ">
      <div className="w-[80%] mb-10 md:mb-16 flex justify-center items-center flex-col text-center md:w-[60%]  ">
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
          Simple and tasty recipes
        </h1>
        <p className="text-sm lg:text-base text-gray-600 mt-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      
      <Card data={dishData} />
    </div>
  );
};

export default RecipeHome;
