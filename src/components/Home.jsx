import React, { useState, useEffect } from "react";
import NavBar from "./partials/NavBar";
import HeaderMain from "./partials/HeaderMain";
import LearnMore from "./partials/LearnMore";
import Subscribe from "./partials/Subscribe";
import RecipeHome from "./partials/RecipeHome";
import Footer from "./partials/Footer";
import InstaSection from "./partials/InstaSection";
import HorzintalCard from "./partials/HorzintalCard";
import Loading from "./partials/Loading";
import axios from "./utils/axios";

const Home = () => {
  const [dishData, setDishData] = useState(null);
  const [recipeData, setRecipeData] = useState(null);
  const [recipedetails, setRecipeDetails] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetching all data in batches
  const fetchAllData = async () => {
    try {
      setLoading(true);

      // Fetch horizontal card data (4 recipes)
      const dishResponse = axios.get("/recipes/list", {
        params: { from: "10", size: "4" },
      });
      // Fetch main recipe data (9 recipes)
      const recipeResponse = axios.get("/recipes/list", {
        params: { from: "20", size: "9" },
      });
      // Fetch header recipe data (10 recipes for carousel)
      const headerResponse = axios.get("/recipes/list", {
        params: { from: "100" },
      });

      const [dishData, recipeData, headerData] = await Promise.all([
        dishResponse,
        recipeResponse,
        headerResponse,
      ]);

      setDishData(dishData.data.results);
      setRecipeData(recipeData.data.results);
      setRecipeDetails(headerData.data.results);

      setLoading(false); // Stop loading spinner
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? recipedetails.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === recipedetails.length - 1 ? 0 : prev + 1
    );
  };

  const generateRandomDate = () => {
    const start = new Date(2020, 0, 1);
    const end = new Date();
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toLocaleDateString("en-GB");
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-auto overflow-auto">
      <NavBar />
      {recipedetails && (
        <HeaderMain
          data={recipedetails[currentIndex]}
          handlePrev={handlePrev}
          handleNext={handleNext}
          generateRandomDate={generateRandomDate}
        />
      )}
      {recipeData && <RecipeHome data={recipeData} />}
      <LearnMore />
      <InstaSection />
      {dishData && (
        <HorzintalCard
          data={dishData}
          title={"Try this delicious recipe to make your day"}
          length={4}
        />
      )}
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
