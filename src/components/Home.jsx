import React from "react";
import NavBar from "./partials/NavBar";
import HeaderMain from "./partials/HeaderMain";
import LearnMore from "./partials/LearnMore";
import Subscribe from "./partials/Subscribe";
import RecipeHome from "./partials/RecipeHome";
import Footer from "./partials/Footer";
import InstaSection from "./partials/InstaSection";
import HorzintalCard from "./partials/HorzintalCard";
import { useState, useEffect } from "react";
import axios from "./utils/axios";
import Loading from "./partials/Loading";
const Home = () => {
  const [dishData, setDishData] = useState([]);

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
  }, []);
  return dishData.length > 0 ?  (
    <>
      <div className="w-full h-auto overflow-auto">
        <NavBar />
        <HeaderMain />
        <RecipeHome />
        <LearnMore />
        <InstaSection/>
         <HorzintalCard data={dishData}  title={"Try this delicious recipe to make your day "}
            length={8} /> 
       
        <Subscribe />
        <Footer />
      </div>
    </>
  ) : <Loading />
};

export default Home;
