import React from "react";
import NavbarDashboard from "../Components/NavbarDashboard";
import SidebarDashboard from "../Components/SidebarDashboard";

const Dashboard = () => {
  return (
    <div id="DashboardParent" className="w-screen flex flex-col">
      <div
        id="DashboardHeader"
        className="fixed top-0 right-0 z-10 w-[85%] h-full"
      >
        <NavbarDashboard />
      </div>
      <div className="flex">
        <div
          id="DashboardContent"
          className="absolute top-24 right-0 w-[82.5%]"
        >
          This is Dashboard Content
        </div>
        <div className="fixed w-[15%] h-screen left-0 top-0 z-[-1]">
          <SidebarDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
