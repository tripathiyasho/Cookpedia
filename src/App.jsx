import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/partials/Loading";

// Lazy load components
const Home = React.lazy(() => import("./components/Home"));
const Recipes = React.lazy(() => import("./components/Recipes"));
const RecipeDetails = React.lazy(() => import("./components/RecipeDetails"));
const Blog = React.lazy(() => import("./components/Blog"));
const Contact = React.lazy(() => import("./components/Contact"));
const AboutUs = React.lazy(() => import("./components/AboutUs"));

const App = () => {
  return (
    <>
      <div>
        {/* Fallback UI while lazy-loaded components are being loaded */}
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipes />} />
            <Route path="/recipe/detail/:id" element={<RecipeDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};

export default App;
