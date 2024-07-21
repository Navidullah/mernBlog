import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-full md:px-5">
        <div className="flex justify-between items-center h-16">
          <div className="flex-grow">
            <Link
              to="/"
              className="flex items-center text-sm sm:text-lg md:text-lg lg:text-xl xl:text-2xl"
            >
              <h1 className="ml-2 font-bold text-red-500">The</h1>
              <h1 className="font-bold">Pulse</h1>
            </Link>
          </div>
          <div className="flex-grow flex justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 border border-gray-300 rounded-md max-w-[500px] max-sm:w-[100px] "
            />
          </div>
          <div className="hidden flex-grow lg:flex  items-end">
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-[18px] max-sm:text-[12px] font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-[18px] max-sm:text-[12px] font-medium"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-[18px] max-sm:text-[12px] font-medium"
            >
              Projects
            </Link>
          </div>
          <div className="flex-grow flex items-center space-x-4">
            <Link
              to="/signin"
              className="text-white bg-indigo-600 px-3 py-2 rounded-md text-[18px] max-sm:text-[10px] font-medium max-sm:p-[3px]"
            >
              Sign in
            </Link>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <RxCross2 className="h-6 w-6" />
              ) : (
                <CiMenuFries className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
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
            <input
              type="text"
              placeholder="Search..."
              className="mt-2 px-3 py-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
