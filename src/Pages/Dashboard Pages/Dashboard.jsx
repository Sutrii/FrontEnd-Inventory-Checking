import React from "react";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import BarangMasuk from "../../Components/Dashboard/BoxBarangMasuk";
import BarangKeluar from "../../Components/Dashboard/BoxBarangKeluar";
import BarangPinjaman from "../../Components/Dashboard/BoxBarangPinjaman";
import BarangRusak from "../../Components/Dashboard/BoxBarangRusak";
import TotalBarang from "../../Components/Dashboard/BoxTotalBarang";
import PolarChart from "../../Components/Dashboard/Chart";

const Dashboard = () => {
  return (
    <div className="w-screen flex flex-col bg-white">
      <div className="fixed top-0 right-0 z-10 w-[85%]">
        <NavbarDashboard />
      </div>
      <div className="flex overflow-y-hidden">
        <div className="absolute right-0 w-[85%]">
          <div className="h-screen">
            <div id="DashboardContent" className="flex flex-row">
              <div className="flex flex-row bg-gray-100 w-full h-screen pt-24">
                <div className="flex w-full h-full space-x-6 px-4">
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
                  <div id="RightBoxParent" className="w-[50%] h-[35%]">
                    <div
                      id="ChartSection"
                      className="w-full h-full flex flex-col"
                    >
                      <div className="w-[100%] h-[100%]">
                        <div className="w-full h-[573px]">
                          <PolarChart />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed w-[15%] h-screen right-0 left-0">
        <SidebarDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
