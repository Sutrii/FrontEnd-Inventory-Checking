import React, { useState } from "react";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import TblBarangMasuk from "../../Components/Dashboard/TblBarangMasuk";

const TabelBarangMasuk = () => {
  const [search, setSearch] = useState("");

  return (
    <div id="DashboardParent" className="w-screen h-full flex flex-col">
      <div
        id="DashboardHeader"
        className="fixed top-0 right-0 z-10 w-[85%] h-[10%]"
      >
        <NavbarDashboard />
        <div className="flex flex-col bg-[#F4F6FA] w-full h-screen p-2">
          <TblBarangMasuk />
        </div>
      </div>
      <div className="w-[15%] h-screen fixed top-0 left-0 z-10">
        <SidebarDashboard />
      </div>
    </div>
  );
};

export default TabelBarangMasuk;
