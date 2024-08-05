import React from "react";
import NavbarDashboard from "../Components/NavbarDashboard";
import SidebarDashboard from "../Components/SidebarDashboard";
import { FiSquare } from "react-icons/fi";
import { TbCheckbox } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { VscListFlat } from "react-icons/vsc";

const Dashboard = () => {
  return (
    <div id="DashboardParent" className="w-screen flex flex-col">
      <div
        id="DashboardHeader"
        className="fixed top-0 right-0 z-10 w-[85%] h-[10%]"
      >
        <NavbarDashboard />
        <div className="flex flex-col bg-[#F4F6FA] w-full h-screen p-5">
          <div id="FirstData" className="w-full flex flex-col">
            {/* Baris Pertama: Box Utama */}
            <div className="flex flex-wrap gap-4 w-full">
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-md rounded-3xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Barang Masuk</h2>
                  <div className="bg-[#EBB64D] p-2 rounded-2xl">
                    <FiSquare className="text-black" />
                  </div>
                </div>
                <h1 className="text-gray-600 text-3xl mb-3">11</h1>
                <p className="text-gray-600">Total Masuk</p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-md rounded-3xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Barang Keluar</h2>
                  <div className="bg-[#EBB64D] p-2 rounded-2xl">
                    <TbCheckbox className="text-black" />
                  </div>
                </div>
                <h1 className="text-gray-600 text-3xl mb-3">3</h1>
                <p className="text-gray-600">Total Masuk</p>
              </div>
            </div>
          </div>
          <div id="SecondData" className="w-full flex flex-col mt-3">
            {/* Baris Pertama: Box Utama */}
            <div className="flex flex-wrap gap-4 w-full">
              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-md rounded-3xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Barang Pinjaman</h2>
                  <div className="bg-[#EBB64D] p-2 rounded-2xl">
                    <CiGrid41 className="text-black" />
                  </div>
                </div>
                <h1 className="text-gray-600 text-3xl mb-3">7</h1>
                <p className="text-gray-600">Total Masuk</p>
              </div>

              <div className="w-full sm:w-1/2 lg:w-1/4 p-4 bg-white shadow-md rounded-3xl">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Barang Rusak</h2>
                  <div className="bg-[#EBB64D] p-2 rounded-2xl">
                    <VscListFlat  className="text-black" />
                  </div>
                </div>
                <h1 className="text-gray-600 text-3xl mb-3">0</h1>
                <p className="text-gray-600">Total Masuk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[15%] h-screen fixed top-0 left-0 z-10">
          <SidebarDashboard />
        </div>
    </div>
  );
};

export default Dashboard;
