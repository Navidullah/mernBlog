import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import { FiSun, FiMoon } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice.js";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

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

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    setDropdownOpen(false);
    // Add sign out logic here
    navigate("/");
  };

  return (
    <header className="shadow-md">
      <nav className="navbar">
        <Link
          to="/"
          className="logo bg-gradient-to-r from-orange-800 via-orange-500 to-black p-2 rounded-md text-white"
        >
          <span>The</span>
          <span>Pulse</span>
        </Link>
        <div className="search_input">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-2 py-2 border-none rounded-md"
          />
        </div>
        <div className="links">
          <div className="nav_links dark:text-slate-300">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>
        </div>
        <div className="flex items-center gap-5 text-3xl">
          <button
            className="mode flex items-center justify-center  rounded-full "
            onClick={() => dispatch(toggleTheme())}
          >
            {theme === "light" ? <FiSun /> : <FiMoon />}
          </button>
          {currentUser ? (
            <div className="relative">
              <img
                src={currentUser.profilePicture}
                alt="Profile"
                className="w-[50px] h-[50px] rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 flex flex-col  mt-2  bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg">
                  <span className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {currentUser.username} <br />
                    {currentUser.email}
                  </span>
                  <Link
                    to="/dashboard?tab=profile"
                    className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/signin" className="signin_border p-2">
              Sign in
            </Link>
          )}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <RxCross2 /> : <CiMenuFries />}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
            <button
              className="w-full"
              color="gray"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "light" ? (
                <div className="px-3 flex items-center gap-3 text-[20px]">
                  <FiMoon />
                  <span>Dark mode</span>
                </div>
              ) : (
                <div className="px-3 flex items-center gap-3 text-[20px]">
                  <FiSun />
                  <span>Light mode</span>
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
