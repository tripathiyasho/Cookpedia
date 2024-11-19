import React, { useState, useEffect } from "react";
import NavBar from "./partials/NavBar";
import Subscribe from "./partials/Subscribe";
import Footer from "./partials/Footer";
import axios from "./utils/axios";
import Loading from "./partials/Loading";
import HorzintalCard from "./partials/HorzintalCard";
import VideoPlayer from "./partials/VideoPlayer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
  const [dishData, setDishData] = useState([1]);
  const [recpdata, setrecpdata] = useState(null);
  const [sideData, setSideData] = useState([]); // Side suggestions

  const { id } = useParams();

  const getSideData = async () => {
    try {
      const { data } = await axios.get("/recipes/list", {
        params: { from: 120, size: 3 },
      });
      setSideData(data.results || []);
    } catch (error) {
      console.error("Error fetching side data:", error);
    }
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(
        `recipes/get-more-info?id=${id || 2088}`
      );
      // console.log("API Response:", data);
      setrecpdata(data); // Save the API response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/recipes/list", {
        params: {
          from: "10",
          size: "4",
        },
      });
      setDishData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    getSideData();
  }, []);

  return sideData && recpdata && dishData.length > 0 ? (
    <>
      <div className="w-full h-auto overflow-auto flex flex-col items-center mb-2">
        <NavBar />
        {/* top part */}
        <div className="w-[90%] mt-12 mx-auto">
          {/* Heading and Info */}
          <div className="w-full flex flex-col md:flex-row justify-center sm:justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center md:items-start flex-col">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold ">
                {recpdata.name}
              </h1>
              <div className="flex flex-wrap justify-center items-center mt-6 gap-4 lg:my-8">
                <div className="flex gap-2 items-center">
                  <img
                    className="rounded-full h-12 w-12 object-cover"
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Creator"
                  />
                  <div>
                    <h6 className="text-xs lg:text-sm font-bold">
                      {" "}
                      {recpdata?.credits?.[0]?.name || "Anonymous"}
                    </h6>
                    <span className="text-xs lg:text-sm text-gray-500">
                      13/08/2024
                    </span>
                  </div>
                </div>
                <div className="w-[1.5px] h-10 bg-gray-300"></div>
                <div className="flex gap-2 items-center">
                  <i className="ri-timer-line"></i>
                  <div>
                    <h6 className="text-xs lg:text-sm font-bold">Total Time</h6>
                    <span className="text-xs lg:text-sm text-gray-500">
                      {recpdata.total_time_minutes || "N/A"} mins
                    </span>
                  </div>
                </div>
                <div className="w-[1.5px] h-10 bg-gray-300"></div>
                <div className="flex gap-2 items-center">
                  <i className="ri-database-2-line"></i>
                  <div>
                    <h6 className="text-xs lg:text-sm font-bold">Servings</h6>
                    <span className="text-xs lg:text-sm text-gray-500">
                      {recpdata.num_servings || "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <i className="ri-printer-line  p-3 text-md lg:text-2xl lg:p-5 font-light bg-[#E7FAFE] rounded-full"></i>
              <i className="ri-share-2-line p-3 text-md lg:text-2xl lg:p-5 font-light bg-[#E7FAFE] rounded-full"></i>
            </div>
          </div>
          {/* Video and Nutrition */}
          <div className="w-full flex flex-col lg:flex-row gap-5 mt-6">
            <div className="w-full lg:w-[70%]">
              {/* <img src="../lady.png" alt="Dish" className="w-full rounded-lg" /> */}
              <VideoPlayer data={recpdata.video_url} />
            </div>
            {recpdata.nutrition && (
              <div className="bg-[#E7FAFE] p-5 w-full lg:w-[30%] rounded-2xl">
                <span className="text-lg font-bold">
                  Nutrition Information:
                </span>
                <ul className="mt-2 text-md">
                  <li className="flex text-gray-500 py-2 justify-between">
                    Calories{" "}
                    <span className="text-black">
                      {recpdata.nutrition.calories} kcl
                    </span>
                  </li>
                  <hr className="border-t border-gray-200 w-full" />
                  <li className="flex text-gray-500 py-2 justify-between">
                    Carbohydrates{" "}
                    <span className="text-black">
                      {recpdata.nutrition.carbohydrates} g
                    </span>
                  </li>
                  <hr className="border-t border-gray-200 w-full" />
                  <li className="flex text-gray-500 py-2 justify-between">
                    Fat{" "}
                    <span className="text-black">
                      {recpdata.nutrition.fat} g
                    </span>
                  </li>
                  <hr className="border-t border-gray-200 w-full" />
                  <li className="flex text-gray-500 py-2 justify-between">
                    Fiber{" "}
                    <span className="text-black">
                      {recpdata.nutrition.fiber} g
                    </span>
                  </li>
                  <hr className="border-t border-gray-200 w-full" />
                  <li className="flex text-gray-500 py-2 justify-between">
                    Protein{" "}
                    <span className="text-black">
                      {recpdata.nutrition.protein} g
                    </span>
                  </li>
                  <hr className="border-t border-gray-200 w-full" />
                  <li className="flex text-gray-500 py-2 justify-between">
                    Sugar{" "}
                    <span className="text-black">
                      {recpdata.nutrition.sugar} g
                    </span>
                  </li>
                </ul>
                <p className="mt-5 text-sm text-gray-600">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            )}
          </div>
          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 mt-10 leading-relaxed">
            {recpdata.description}
          </p>
        </div>

        {/* Ingredients and Directions  */}
        <div className="flex flex-wrap w-[90%] mt-10">
          {/* Main Content */}
          <div className="w-full lg:w-[75%] flex flex-col mb-10">
            {/* Ingredients Section */}

            <div className="w-full flex flex-col mb-10 p-5 ">
              <span className="text-2xl lg:text-3xl font-bold mb-4">
                Ingredients:
              </span>
              <ul className="list-disc ml-5">
                {recpdata.sections?.[0]?.components?.length > 0 ? (
                  recpdata.sections[0].components.map((Indigred, key) => (
                    <li key={key} className="text-md lg:text-xl py-2">
                      {Indigred.raw_text}
                    </li>
                  ))
                ) : (
                  <p>No Ingredients available</p>
                )}
              </ul>
            </div>

            {/* Directions Section */}

            <div className="w-full flex flex-col mb-10 p-5">
              <span className="text-2xl lg:text-3xl font-bold mb-4">
                Directions:
              </span>
              <ol className="list-decimal ml-5">
                {recpdata.instructions?.length > 0 ? (
                  recpdata.instructions.map((direction, k) => (
                    <li key={k} className="text-md lg:text-xl py-2">
                      {direction.display_text}
                    </li>
                  ))
                ) : (
                  <li>No directions available</li>
                )}
              </ol>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="hidden lg:flex w-full lg:w-[25%]  flex-col mt-10 lg:mt-0  p-5 ">
            <span className="text-xl lg:text-2xl font-bold mb-4">
              Other Recipes:
            </span>
            <div className="flex flex-col gap-4">
              {/* Example Recipe */}
              {sideData.map((da, i) => (
                <Link
                  to={`/recipe/detail/${da.id}`}
                  key={i}
                  className="w-full flex  p-3 rounded-lg "
                >
                  <img
                    src={da.thumbnail_url}
                    alt={da.name}
                    className="w-[60%] h-40 rounded-2xl object-cover"
                  />
                  <div className="w-full ml-2 flex flex-col justify-center">
                    <h1 className="text-lg font-bold">{da.name}</h1>
                    <p className="text-sm text-gray-600 mt-2">
                      {da.credits[0]?.name || "Anonymous"}
                    </p>
                  </div>
                </Link>
              ))}
              {/* Add more recipes as needed */}
            </div>
            <img src="../ad.png" alt="" className="mt-10" />
          </div>
        </div>

        <Subscribe />
        <HorzintalCard
          data={dishData}
          title={"You may like these recipe too"}
          length={4}
        />
        <Footer />
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default RecipeDetails;
