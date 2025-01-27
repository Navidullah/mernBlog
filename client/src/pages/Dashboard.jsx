import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar/DashSidebar.jsx";
import DashProfile from "../components/DashProfile/DashProfile.jsx";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    console.log(urlParams);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="flex-1  md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
    </div>
  );
};

export default Dashboard;
