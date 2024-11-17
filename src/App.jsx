import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Blog from "./components/Blog";


const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
