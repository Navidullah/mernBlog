import React from "react";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="flex-7 flex justify-center items-center h-screen">
      <div className="flex flex-col p-3  items-center">
        <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
        <form className="flex flex-col items-center">
          <div className="w-40 h-40 self-center shadow-md overflow-hidden rounded-full">
            <img
              src={currentUser.profilePicture}
              alt="user"
              className="w-full h-full rounded-full object-cover border-8 border-gray-200"
            />
          </div>
          <input
            type="text"
            id="username"
            placeholder="username"
            defaultValue={currentUser.username}
            className="mt-3 bg-gray-100 dark:text-gray-400 rounded-full"
          />
          <input
            type="email"
            id="email"
            placeholder="email"
            defaultValue={currentUser.email}
            className="mt-3 bg-gray-100 dark:text-gray-400 rounded-full"
          />
          <input
            type="password"
            id="password"
            placeholder="password"
            className="mt-3 bg-gray-100 dark:text-gray-400 rounded-full"
          />
          <button
            type="submit"
            className="bg-indigo-600 rounded-full mt-3 w-full p-[8px] text-white"
          >
            Update
          </button>
        </form>
        <div className="flex justify-between w-full mt-4">
          <span className="text-red-500 cursor-pointer">Delete Account</span>
          <span className="text-red-500 cursor-pointer">Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
