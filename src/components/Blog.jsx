import React, { useState, useEffect } from "react";
import NavBar from "./partials/NavBar";
import Subscribe from "./partials/Subscribe";
import HorzintalCard from "./partials/HorzintalCard";
import axios from "./utils/axios";
import Footer from "./partials/Footer";
import Loading from "./partials/Loading";

const Blog = () => {
  document.title = "Cookpedia | Blog";

  const [dishData, setDishData] = useState([]);

  const fetchData = async () => {
    try {
      // Generate a random offset for 'from' parameter
      const randomOffset = Math.floor(Math.random() * 150); // Adjust max value based on API range

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

  return dishData.length > 0 ? (
    <div className="w-full h-auto overflow-auto flex flex-col items-center mb-2">
      <NavBar />
      <div className="w-full flex justify-center items-center flex-col mt-8">
        {/* Header Section */}
        <div className="w-[90%] flex  lg:my-6 flex-col items-center text-center">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Full Guide to Becoming a Professional Chef
          </h1>
          <div className="flex flex-row items-center justify-center mt-6 gap-4 lg:my-8">
            <div className="flex items-center gap-3">
              <img
                className="rounded-full h-12 w-12 object-cover"
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Creator"
              />
              <span className="text-sm md:text-base">John Noah</span>
            </div>
            <div className=" w-[1px] h-10 bg-gray-300"></div>
            <span className="text-sm md:text-base">13/08/2024</span>
          </div>
          <p className="text-sm md:text-base text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-[90%] mt-6 lg:mt-10">
          <img
            src="../cheffire.png"
            alt="Chef in Action"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row w-[90%]  gap-6">
          <div className="lg:w-[75%] flex flex-col items-center">
            {/* Question Blocks */}
            {[
              {
                title: "How did you start out in the food industry?",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
              },
              {
                title: "What do you like most about your job?",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
              },
              {
                title: "Do you cook at home on your days off?",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
                image: "../lady.png",
              },
              {
                title:
                  "What would your advice be to young people looking to get their foot in the door?",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
              },
            ].map((q, index) => (
              <div key={index} className="w-full mt-16">
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {q.title}
                </h3>
                {q.image && (
                  <img
                    src={q.image}
                    alt="Illustration"
                    className="w-full h-auto mt-6 object-cover rounded"
                  />
                )}
                <p className="text-sm md:text-base text-gray-600 mt-6 leading-relaxed">
                  {q.text}
                </p>
              </div>
            ))}

            {/* Quote Section */}
            <div className="w-full bg-gradient-to-r from-[#F3F3F3] to-transparent mt-16 text-center p-8 md:p-12 border-y-2 border-l-2">
              <p className="text-xl md:text-2xl lg:text-4xl font-bold leading-tight">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio.”
              </p>
            </div>

            {/* Final Question */}
            <div className="w-full mt-16">
              <h3 className="text-xl md:text-2xl font-bold leading-tight">
                What is the biggest misconception that people have about being a
                professional chef?
              </h3>
              <p className="text-sm md:text-base text-gray-600 mt-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum
                velit vel pulvinar.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="hidden lg:flex lg:w-[25%] lg:mt-16  flex-col items-center">
            <span className="text-md font-bold  ">Share this on:</span>
            <div className=" flex flex-col mt-4 gap-4">
              {/* Replace with actual icons */}
              <a
                className="mx-2 text-gray-600 hover:text-gray-900 transition-colors"
                href=""
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                className="mx-2 text-gray-600 hover:text-gray-900 transition-colors"
                href=""
              >
                <i className="ri-twitter-x-fill"></i>
              </a>
              <a
                className="mx-2 text-gray-600 hover:text-gray-900 transition-colors"
                href=""
              >
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <Subscribe />
      <HorzintalCard
        data={dishData}
        title={"Check out the delicious recipe"}
        length={4}
      />
      <Footer />
    </div>
  ) : (
    <Loading />
  );
};

export default Blog;
