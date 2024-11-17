import React from "react";

const Contactform = () => {
  return (
    <>
      <div className="w-full h-auto overflow-auto flex flex-col items-center p-10">
        <div className="w-[90%] flex flex-col lg:flex-row mt-10 gap-10">
          {/* Left Section - Image */}
          <div className="w-full lg:w-[30%] bg-gradient-to-b from-transparent to-[#E7F9FD] rounded-3xl flex justify-center items-center lg:relative ">
            <img
              src="../cook.png"
              alt="Chef illustration"
              className="w-[80%] lg:w-full h-auto object-contain lg:absolute bottom-0"
            />
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-[70%] bg-white shadow-md rounded-3xl p-6">
            <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 text-gray-800">
              Contact Us
            </h1>
            <form
              className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-10"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission
                alert("Form Submitted Successfully!");
              }}
            >
              {/* Form Inputs */}
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 text-gray-700 text-sm">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 text-gray-700 text-sm">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email..."
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="flex flex-col lg:col-span-2">
                <label htmlFor="subject" className="mb-2 text-gray-700 text-sm">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Enter subject..."
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="mb-2 text-gray-700 text-sm"
                >
                  Enquiry Type
                </label>
                <select
                  id="category"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="feedback">Feedback</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex flex-col lg:col-span-2">
                <label htmlFor="message" className="mb-2 text-gray-700 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message..."
                  className="px-4 py-3 h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center lg:col-span-2">
                <button
                  type="submit"
                  className="w-36 md:w-44 h-12 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactform;
