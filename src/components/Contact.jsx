import React from "react";
import NavBar from "./partials/NavBar";
import Contactform from "./partials/Contactform";
import Footer from "./partials/Footer";
import Subscribe from "./partials/Subscribe";
import HorzintalCard from "./partials/HorzintalCard";
import Loading from "./partials/Loading";
import axios from "./utils/axios";
import { useState, useEffect } from "react";

const Contact = () => {
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
  return dishData.length > 0 ? (
    <>
      <div className="w-full h-auto overflow-auto flex flex-col items-center mb-2">
        <NavBar />
        {/* contact form and image  */}
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
  );
};

export default Contact;
