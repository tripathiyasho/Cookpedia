import React from "react";
import NavBar from "./partials/NavBar";
import HeaderMain from "./partials/HeaderMain";
import LearnMore from "./partials/LearnMore";
import Subscribe from "./partials/Subscribe";
import RecipeHome from "./partials/RecipeHome";
import Footer from "./partials/Footer";
import SuggestHome from "./partials/SuggestHome";
import InstaSection from "./partials/InstaSection";
const Home = () => {
  return (
    <>
      <div className="w-full h-auto overflow-auto">
        <NavBar />
        <HeaderMain />
        <RecipeHome />
        <LearnMore />
        <InstaSection/>
        <SuggestHome />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
