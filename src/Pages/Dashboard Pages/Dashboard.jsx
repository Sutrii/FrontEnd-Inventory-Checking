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
        <div className="flex flex-row"></div>
        <div className="flex flex-col bg-[#F4F6FA] w-full h-screen p-4">
          <div id="FirstData" className="w-full flex flex-col">
            {/* Baris Pertama: Box Utama */}
            <div className="flex flex-wrap gap-3 w-full">
              <BarangMasuk />
              <BarangKeluar />
              {/* Kotak baru di samping Barang Keluar */}
            </div>
          </div>

          <div id="SecondData" className="w-full flex flex-col mt-3">
            {/* Baris Kedua: Box Utama */}
            <div className="flex flex-wrap gap-3 w-full">
              <BarangPinjaman />
              <BarangRusak />
            </div>
          </div>

          <div id="ThirdData" className="w-full flex flex-col mt-3">
            {/* Baris Ketiga: Box Total Barang Keseluruhan */}
            <TotalBarang />
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
