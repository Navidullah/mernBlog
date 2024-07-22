import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { FiSun, FiMoon } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice.js";

import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  const dispatch = useDispatch();
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" shadow-md">
      <navbar className="navbar">
        <Link to="/" className="logo">
          <span className="text-red-500 ">The</span>
          <span>Pulse</span>
        </Link>
        <div className="search_input">
          <input
            type="text"
            placeholder="Search..."
            className="w-full  px-2 py-2 border-none rounded-md "
          />
        </div>
        <div className="links">
          <div className="nav_links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
          <button
            className=" mode w-12 h-10"
            color="gray"
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FiSun /> : <FiMoon />}
          </button>

          <Link
            to="/signin"
            className="border-4 px-1 border-indigo-600 rounded-md"
          >
            Sign in
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <CiMenuFries className="h-6 w-6" />
            )}
          </button>
        </div>
      </navbar>
      {isOpen && (
        <div className="md:hidden">
          <div className=" w-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className=" hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className=" hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className=" hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <button
              className="w-full"
              color="gray"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "light" ? (
                <>
                  <div className=" px-3 flex items-center gap-3 text-[20px]">
                    <FiMoon />
                    <span>Dark mode</span>
                  </div>
                </>
              ) : (
                <>
                  <div className=" px-3 flex items-center  gap-3 text-[20px]">
                    <FiSun />
                    <span>Light mode</span>
                  </div>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
