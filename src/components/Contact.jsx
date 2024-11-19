import React, { Suspense, useState, useEffect } from "react";
import axios from "./utils/axios";

// Lazy load sub-components
const NavBar = React.lazy(() => import("./partials/NavBar"));
const Contactform = React.lazy(() => import("./partials/Contactform"));
const Footer = React.lazy(() => import("./partials/Footer"));
const Subscribe = React.lazy(() => import("./partials/Subscribe"));
const HorzintalCard = React.lazy(() => import("./partials/HorzintalCard"));
const Loading = React.lazy(() => import("./partials/Loading"));

const Contact = () => {
  document.title = "Cookpedia | Contact";

  const [dishData, setDishData] = useState([]);

  const fetchData = async () => {
    try {
      // Generate a random offset for 'from' parameter
      const randomOffset = Math.floor(Math.random() * 350); // Adjust max value based on API range

      const { data } = await axios.get("/recipes/list", {
        params: {
          from: randomOffset.toString(), // Ensure the value is within the API's valid range
          size: "4", // Number of recipes to fetch
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
    <Suspense fallback={<div>Loading...</div>}>
      {dishData.length > 0 ? (
        <>
          <div className="w-full h-auto overflow-auto flex flex-col items-center mb-2">
            <NavBar />
            {/* Contact form and image */}
            <Contactform />
            <Subscribe />
            <HorzintalCard
              data={dishData}
              title={"Check out the delicious recipe "}
              length={4}
            />
            <Footer />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </Suspense>
  );
};

export default Contact;
