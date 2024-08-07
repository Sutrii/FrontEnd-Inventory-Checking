import React from "react";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import BarangMasuk from "../../Components/Dashboard/BoxBarangMasuk";
import BarangKeluar from "../../Components/Dashboard/BoxBarangKeluar";
import BarangPinjaman from "../../Components/Dashboard/BoxBarangPinjaman";
import BarangRusak from "../../Components/Dashboard/BoxBarangRusak";
import TotalBarang from "../../Components/Dashboard/BoxTotalBarang";

const Dashboard = () => {
  return (
    <div id="DashboardParent" className="w-screen flex flex-col">
      <div
        id="DashboardHeader"
        className="fixed top-0 right-0 z-10 w-[85%] h-[10%]"
      >
        <NavbarDashboard />
        <div id="DashboardContent" className="flex flex-row">
          <div className="flex flex-row bg-gray-100 w-full h-screen p-4 space-x-6">
            <div id="LeftBoxParent" className="w-[50%]">
              <div id="FirstData">
                <div className="flex w-full space-x-6">
                  <div className="w-[50%]">
                    <BarangMasuk />
                  </div>
                  <div className="w-[50%]">
                    <BarangKeluar />
                  </div>
                </div>
              </div>
              <div id="SecondData" className="mt-3">
                <div className="flex w-full space-x-6">
                  <div className="w-[50%]">
                    <BarangPinjaman />
                  </div>
                  <div className="w-[50%]">
                    <BarangRusak />
                  </div>
                </div>
              </div>
              <div id="ThirdData" className="mt-3">
                <div className="w-[100%]">
                  <TotalBarang />
                </div>
              </div>
            </div>
            <div id="RightBoxParent" className="w-[50%] h-[60%]">
              <div id="ThirdData" className="w-full h-full flex flex-col">
                <div className="w-[100%] h-[20%]">
                  <TotalBarang />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="DashboardSidebar"
        className="w-[15%] h-screen fixed top-0 left-0 z-10"
      >
        <SidebarDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
