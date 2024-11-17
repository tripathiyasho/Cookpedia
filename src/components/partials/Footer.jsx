import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col w-full py-6 mt-14 lg:mt-20">
      {/* Name and Tagline */}
      <div className="w-full flex items-center justify-center flex-col lg:justify-between lg:flex-row lg:w-[90%] mb-6">
        <div className="text-center flex items-center justify-center flex-col w-full lg:w-[40%] lg:items-start">
          <img src="../ac.png" alt="Logo" className="w-[40%] md:w-[20%] mb-4" />
          <p className="text-sm lg:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mt-5 lg:mt-0 lg:w-[60%]">
          <ul className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6 text-sm lg:text-base text-gray-700">
            <Link to="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <Link className="hover:text-gray-900 transition-colors">
              Recipe
            </Link>
            <Link className="hover:text-gray-900 transition-colors">Blog</Link>
            <Link
              to="/contact"
              className="hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
            <Link className="hover:text-gray-900 transition-colors">
              About Us
            </Link>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 w-full lg:w-[90%] my-6" />

      {/* Footer Bottom */}
      <div className="flex items-center justify-center flex-col lg:flex-row lg:w-[90%] text-gray-600">
        <span className="text-sm lg:text-base">
          © 2020 Flowbase. Powered by Webflow
        </span>
        <div className="flex gap-4 mt-4 lg:mt-0 lg:ml-auto">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Facebook"
          >
            <i className="ri-facebook-fill text-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Twitter"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Instagram"
          >
            <i className="ri-instagram-fill text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
