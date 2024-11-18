import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Recipes from "./components/Recipes";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
