import React, { useState, useEffect, Suspense } from "react";
import axios from "./utils/axios";
import Loading from "./partials/Loading";
import HorzintalCard from "./partials/HorzintalCard";
import VideoPlayer from "./partials/VideoPlayer";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Lazy load components
const NavBar = React.lazy(() => import("./partials/NavBar"));
const Subscribe = React.lazy(() => import("./partials/Subscribe"));
const Footer = React.lazy(() => import("./partials/Footer"));

const RecipeDetails = () => {
  document.title = "Cookpedia | RecipeDetail";

  const [dishData, setDishData] = useState([]);
  const [recpdata, setrecpdata] = useState(null);
  const [sideData, setSideData] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const { id } = useParams();

  const getSideData = async () => {
    try {
      const randomOffset = Math.floor(Math.random() * 500);
      const { data } = await axios.get("/recipes/list", {
        params: { from: randomOffset.toString(), size: 3 },
      });
      setSideData(data.results);
    } catch (error) {
      console.error("Error fetching side data:", error);
    }
  };

  const getData = async () => {
    setLoading(true); // Set loading to true while fetching
    try {
      const { data } = await axios.get(`recipes/get-more-info?id=${id}`);
      setrecpdata(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // End loading state
    }
  };

  const fetchData = async () => {
    try {
      const randomOffset = Math.floor(Math.random() * 500); 

      const { data } = await axios.get("/recipes/list", {
        params: {
          from: randomOffset.toString(),
          size: "4",
        },
      });

      setDishData(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setrecpdata(null); 
    fetchData();
    getData();
    getSideData();
  }, [id]);

  if (loading || !recpdata || dishData.length === 0) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
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
                      {recpdata.num_servings } individual
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
            <div className="w-full lg:w-[70%] h-[60vh]">
              {recpdata.original_video_url ? (
                <VideoPlayer data={recpdata.original_video_url} />
              ) : (
                <img
                  src="../navailable.jpg"
                  alt="Dish"
                  className="w-full rounded-lg object-cover h-full"
                />
              )}
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
                  <hr className="border-t border-gray-200 w-full" />
                </ul>
                <p className="mt-5 text-sm text-gray-600">
                  Knowing about nutrition is crucial for maintaining health,
                  preventing diseases, and making informed food choices.
                </p>
              </div>
            )}
          </div>
          {/* Description */}
          <p className="text-sm md:text-base text-gray-600 mt-10 leading-relaxed">
            {recpdata.description ||
              "This dish brings loved ones together, blending flavors and cherished memories..."}
          </p>
        </div>

        {/* Ingredients and Directions */}
        <div className="flex flex-wrap w-[90%] mt-8">
          <div className="w-full lg:w-[75%] flex flex-col mb-10">
            {/* Ingredients Section */}
            <div className="w-full flex flex-col mb-10 p-5">
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
                <hr className="border-t mt-5 border-gray-200 w-full" />
              </ul>
            </div>

            {/* Directions Section */}
            <div className="w-full flex flex-col mb-2 p-5">
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
                <hr className="border-t mt-5 border-gray-200 w-full" />
              </ol>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="hidden lg:flex w-full lg:w-[25%] flex-col mt-10 lg:mt-0 p-5">
            <span className="text-xl lg:text-2xl font-bold mb-4">
              Other Recipes:
            </span>
            <div className="flex flex-col gap-4">
              {sideData.map((da, i) => (
                <Link
                  to={`/recipe/detail/${da.id}`}
                  key={i}
                  className="w-full flex p-3 rounded-lg "
                >
                  <img
                    src={da.thumbnail_url}
                    alt={da.name}
                    className="w-[60%] h-40 rounded-2xl object-cover"
                    loading="lazy" // Lazy loading for images
                  />
                  <div className="w-full ml-2 flex flex-col justify-center">
                    <h1 className="text-md font-bold">{da.name}</h1>
                    <p className="text-sm text-gray-600 mt-2">
                      {da.credits[0]?.name || "Anonymous"}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <img
              src="../ad.png"
              alt="Advertisement"
              className="mt-10"
              loading="lazy" // Lazy loading for images
            />
          </div>
        </div>

        <Subscribe />
        <HorzintalCard
          data={dishData}
          title={"You may like these recipes too"}
          length={4}
        />
        <Footer />
      </div>
    </Suspense>
  );
};

export default RecipeDetails;



