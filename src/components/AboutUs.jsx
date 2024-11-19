import NavBar from "./partials/NavBar";
import Footer from "./partials/Footer";
import React from "react";

const AboutUs = () => {
  document.title = "Cookpedia | AboutUs";

  return (
    <>
      <div className="w-full h-auto flex flex-col items-center">
        <NavBar />
        {/* Hero Section */}
        <div className="w-full bg-red-500 text-white py-16 flex justify-center items-center">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Cookpedia
            </h1>
            <p className="text-lg md:text-xl mt-4">
              Your ultimate destination for discovering and sharing recipes from
              around the world.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] my-16 text-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About Us
          </h2>
          <p className="mt-6 text-lg leading-relaxed">
            At Cookpedia, we believe that cooking is not just about food—it's
            about bringing people together, creating memories, and exploring
            cultures. We are passionate about providing a platform where food
            enthusiasts, both beginners and experts, can find inspiration, learn
            new skills, and share their culinary creations with the world.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            Whether you're looking for a quick weeknight dinner, a show-stopping
            dessert, or a traditional dish from a far-off land, Cookpedia has
            something for everyone.
          </p>
        </div>

        {/* Mission Section */}
        <div className="w-full bg-gray-100 py-12">
          <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              To empower home cooks and food lovers with easy access to
              high-quality, tested, and trusted recipes that inspire creativity
              and bring joy to the kitchen.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] my-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg text-center">
            Have questions, suggestions, or just want to say hello? We'd love to
            hear from you!
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-between gap-8">
            {/* Placeholder for contact details */}
            <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold text-red-500">Our Address</h3>
              <p className="mt-4 text-lg text-gray-700 ">
              DELHI , INDIA
              </p>
            </div>
            <div className="flex-1 bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold text-red-500">Contact Us</h3>
              <p className="mt-4 text-lg text-gray-700">
                Email: yasho130802@gmail.com
              </p>
              <p className="mt-2 text-lg text-gray-700">
                Github:
                <a href="https://github.com/tripathiyasho"> tripathiyasho</a>
              </p>
            </div>
          </div>
        </div>

        {/* Visionary Quote */}
        <div className="w-full bg-red-500 text-white py-12">
          <div className="w-[90%] md:w-[80%] lg:w-[60%] text-center mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              "Cooking is an art, and Cookpedia is your canvas."
            </h2>
            <p className="mt-4 text-lg">
              Join us on this culinary adventure and let’s make every meal
              special!
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
