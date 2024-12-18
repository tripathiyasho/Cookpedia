import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [navopen, setnavopen] = useState(false);

  const togglenav = () => {
    setnavopen(!navopen);
  };
  return (
    <>
      <nav className="w-full h-[14vh]  ">
        <div className="w-full h-full px-10 flex justify-between   items-center ">
          {/* logo */}
          <div className="w-[40%] md:w-[20%] h-[100%] flex justify-center items-center ">
            <img
              className="w-[100%] md:w-[10vw] h-[6vh]"
              src="./ac.png"
              alt=""
            />
          </div>
          {/* middle part */}
          <div className="hidden md:flex w-[60%] justify-center  ">
            <ul>
              <Link to="/" className="mx-4 hover:text-2xl transition-all ">
                Home
              </Link>
              <Link to="/recipe" className="mx-4 hover:text-2xl transition-all">
                Recipe
              </Link>
              <Link to="/blog" className="mx-4 hover:text-2xl transition-all">
                Blog
              </Link>
              <Link to="/contact" className="mx-4 hover:text-2xl transition-all">
                Contact
              </Link>
              <Link to="/aboutus" className="mx-4 hover:text-2xl transition-all">
                About us
              </Link>
            </ul>
          </div>
          {/* side part */}
          <div className="hidden md:flex w-[20%] justify-center gap-3">
            <a
              className="mx-2 text-gray-600 hover:text-black transition-colors"
              href=""
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              className="mx-2 text-gray-600 hover:text-black transition-colors"
              href=""
            >
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a
              className="mx-2 text-gray-600 hover:text-black transition-colors"
              href=""
            >
              <i className="ri-instagram-fill"></i>
            </a>
          </div>
          {/* side nav  */}
          <div className="text-2xl md:hidden">
            <button onClick={togglenav}>
              {navopen ? (
                <i className=" ri-close-circle-line   "></i>
              ) : (
                <i className="ri-menu-line "></i>
              )}
            </button>
          </div>
        </div>
        {navopen && (
          <div className="w-full h-auto py-8  border md:hidden flex flex-col justify-center items-center absolute  z-20 bg-white  ">
            <ul className="flex flex-col justify-center items-center gap-10 ">
              <Link to="/" className="mx-4">
                Home
              </Link>
              <Link to="/recipe" className="mx-4 ">
                Recipe
              </Link>
              <Link to="/blog" className="mx-4 ">
                Blog
              </Link>
              <Link to="/contact" className="mx-4 ">
                Contact
              </Link>
              <Link to="/aboutus" className="mx-4 ">
                About us
              </Link>
            </ul>
          </div>
        )}
      </nav>

      <hr className="border-t border-gray-300 w-full " />
    </>
  );
};

export default NavBar;
