// Sidebar.js
import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaUsers,
  FaComments,
  FaSignOutAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="h-full dark:bg-gray-800 text-white  shadow-md">
      <div className="p-4">
        <h1 className="text-sm text-gray-800 dark:text-white">
          Dear {currentUser.username}
        </h1>
      </div>
      <nav className="mt-10">
        <a
          href="#"
          className="flex items-center p-4 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <FaTachometerAlt className="mr-3" />
          <span>Dashboard</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <FaUser className="mr-3" />
          <span>Profile</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <FaUsers className="mr-3" />
          <span>Users</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <FaComments className="mr-3" />
          <span>Comments</span>
        </a>
        <a
          href="#"
          className="flex items-center p-4 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <FaSignOutAlt className="mr-3" />
          <span>Sign Out</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
