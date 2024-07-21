import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md">
      <navbar className="navbar">
        <Link to="/" className="logo">
          <span className="text-red-500 ">The</span>
          <span>Pulse</span>
        </Link>
        <div className="search_input">
          <input
            type="text"
            placeholder="Search..."
            className="search w-full  px-2 py-2 border border-gray-300 rounded-md "
          />
        </div>
        <div className="links">
          <div className="nav_links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
          </div>

          <Link
            to="/signin"
            className="border-4 px-1 border-indigo-600 rounded-md"
          >
            Sign in
          </Link>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:hidden"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
