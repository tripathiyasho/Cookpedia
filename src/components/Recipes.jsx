import NavBar from "./partials/NavBar";
import Subscribe from "./partials/Subscribe";
import Footer from "./partials/Footer";
import Loading from "./partials/Loading";
import axios from "./utils/axios";
import React, { useState, useEffect } from "react";

const Recipes = () => {
  const [allDishData, setAllDishData] = useState([]); // All fetched recipes
  const [sideData, setSideData] = useState([]); // Side suggestions
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [loading, setLoading] = useState(false); // Loading state

  const itemsPerPage = 6; // Number of items per page
  const totalPages = Math.ceil(allDishData.length / itemsPerPage); // Calculate total pages dynamically

  // Fetch all recipes (fetch enough data for pagination)
  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/recipes/list", {
        params: {from: 40, 
          size: 60, // Fetch a larger dataset (adjust based on your needs)
        },
      });
      setAllDishData(data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch side recipes
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

  useEffect(() => {
    fetchData();
    getSideData();
  }, []);

  // Get the data for the current page
  const paginatedData = allDishData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Generate pagenumbers
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="w-full h-auto overflow-auto flex flex-col items-center mb-2">
        <NavBar />
        <div className="w-full flex flex-col items-center">
          {/* Header  */}
          <div className="w-[90%] my-10 flex justify-center items-center flex-col">
            <h1 className="text-4xl lg:text-6xl font-bold text-center">
              Recipes
            </h1>
            <p className="text-sm md:text-base text-gray-600 mt-4 text-center">
              Discover delicious recipes tailored for every occasion and taste.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap w-[90%] gap-6">
            {/* card  */}
            <div className="w-full lg:w-[75%] flex flex-col items-center mb-10">
              {paginatedData.map((d, i) => (
                <div
                  key={i}
                  className="w-full overflow-hidden flex flex-wrap lg:flex-nowrap  p-4 rounded-lg "
                >
                  <img
                    src={d.thumbnail_url}
                    alt={d.name}
                    className="w-full lg:w-[30%] h-40 rounded-2xl object-cover"
                  />
                  <div className="w-[70%] mt-4 lg:mt-0 lg:ml-8 flex flex-col">
                    <h1 className="text-xl md:text-4xl lg:text-xl font-bold">
                      {d.name}
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 mt-4">
                      {d.description || "No description available."}
                    </p>
                    <div className="flex flex-row items-center mt-5 gap-4 lg:mt-2">
                      <div className="flex items-center gap-3">
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src={d.credits[0]?.image_url || "../chef.png"}
                          alt="Creator"
                        />
                        <span className="text-sm md:text-base">
                          {d.credits[0]?.name || "Anonymous"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* suggestion  */}
            <div className="hidden lg:flex lg:w-[25%] flex-col">
              <span className="text-xl font-bold">Tasty Recipes</span>
              <div className="flex flex-col mt-4">
                {sideData.map((da, i) => (
                  <div key={i} className="w-full flex  p-3 rounded-lg ">
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Pagination Controls Above Subscribe */}
        <div className="flex justify-center w-full mt-4 gap-2">
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 shadow-xl py-2 rounded-md ${
                currentPage === page
                  ? "bg-red-500 text-white"
                  : "bg-white-200 hover:bg-gray-300"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Recipes;
