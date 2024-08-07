import React, { useState } from "react";
import logoPelindo from "../assets/img/logo-pelindo.png";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";
import { FiSquare } from "react-icons/fi";
import { TbCheckbox } from "react-icons/tb";
import { CiGrid41 } from "react-icons/ci";
import { VscListFlat } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SidebarDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      id="SidebarParent"
      className="w-full h-screen bg-[#222E3C] border border-black p-3"
    >
      <div id="InsideParent" className="flex flex-col w-full h-full">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={logoPelindo}
            alt="Pelindo Logo"
            className="h-8 w-auto mb-2 mt-2"
          />
        </div>

        {/* Reports Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{
              borderBottom: "0.5px solid #BEBEBE",
            }}
          >
            Reports
          </span>
        </div>

        <NavLink to="/dashboard">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "dashboard" ? "text-white" : "text-[#919191]"
            }`}
            onClick={() => handleTabClick("dashboard")}
          >
            <GiSettingsKnobs
              className={`text-base mr-2 ${
                activeTab === "dashboard" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "dashboard" ? "text-white" : "text-[#919191]"
              }`}
            >
              Dashboard
            </span>
          </div>
        </NavLink>
        {/* Summary Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{
              borderBottom: "0.5px solid #BEBEBE",
            }}
          >
            Summary
          </span>
        </div>

        <NavLink to="/tabel-barang-masuk">
          <div
            className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
              activeTab === "barangMasuk" ? "text-white" : "text-[#919191]"
            }`}
            onClick={() => handleTabClick("barangMasuk")}
          >
            <BsTruck
              className={`text-base mr-2 ${
                activeTab === "barangMasuk" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangMasuk" ? "text-white" : "text-[#919191]"
              }`}
            >
              Tbl Barang Masuk
            </span>
          </div>
        </NavLink>
        <NavLink to="/tabel-barang-keluar">
          <div
            className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
              activeTab === "barangKeluar" ? "text-white" : "text-[#919191]"
            }`}
            onClick={() => handleTabClick("barangKeluar")}
          >
            <BsTruck
              className={`text-base mr-2 ${
                activeTab === "barangKeluar" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "barangKeluar" ? "text-white" : "text-[#919191]"
              }`}
            >
              Tbl Barang Keluar
            </span>
          </div>
        </NavLink>

        <div
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "barangPinjaman" ? "text-white" : "text-[#919191]"
          }`}
          onClick={() => handleTabClick("barangPinjaman")}
        >
          <BsTruck
            className={`text-base mr-2 ${
              activeTab === "barangPinjaman" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "barangPinjaman" ? "text-white" : "text-[#919191]"
            }`}
          >
            Tbl Barang Pinjaman
          </span>
        </div>

        <div
          className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
            activeTab === "barangRusak" ? "text-white" : "text-[#919191]"
          }`}
          onClick={() => handleTabClick("barangRusak")}
        >
          <BsTruck
            className={`text-base mr-2 ${
              activeTab === "barangRusak" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "barangRusak" ? "text-white" : "text-[#919191]"
            }`}
          >
            Tbl Barang Rusak
          </span>
        </div>

        {/* Inventories Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{
              borderBottom: "0.5px solid #BEBEBE",
            }}
          >
            Inventories
          </span>
        </div>

        <div
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "barangMasukInv" ? "text-white" : "text-[#919191]"
          }`}
          onClick={() => handleTabClick("barangMasukInv")}
        >
          <FiSquare
            className={`text-base mr-2 ${
              activeTab === "barangMasukInv" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "barangMasukInv" ? "text-white" : "text-[#919191]"
            }`}
          >
            Barang Masuk
          </span>
        </div>

        <div
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "barangKeluarInv" ? "text-white" : "text-[#919191]"
          }`}
          onClick={() => handleTabClick("barangKeluarInv")}
        >
          <TbCheckbox
            className={`text-base mr-2 ${
              activeTab === "barangKeluarInv" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "barangKeluarInv" ? "text-white" : "text-[#919191]"
            }`}
          >
            Barang Keluar
          </span>
        </div>

        <div
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "barangPinjamanInv" ? "text-white" : "text-[#919191]"
          }`}
          onClick={() => handleTabClick("barangPinjamanInv")}
        >
          <CiGrid41
            className={`text-base mr-2 ${
              activeTab === "barangPinjamanInv"
                ? "text-white"
                : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "barangPinjamanInv"
                ? "text-white"
                : "text-[#919191]"
            }`}
          >
            Barang Pinjaman
          </span>
        </div>

        <div
          className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
            activeTab === "barangRusakInv" ? "text-white" : "text-[#919191]"
          }`}
          onClick={() => handleTabClick("barangRusakInv")}
        >
          <VscListFlat
            className={`text-base mr-2 ${
              activeTab === "barangRusakInv" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "barangRusakInv" ? "text-white" : "text-[#919191]"
            }`}
          >
            Barang Rusak
          </span>
        </div>

        {/* About Us Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{
              borderBottom: "0.5px solid #BEBEBE",
            }}
          >
            About Us
          </span>
        </div>

        <div
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "socialMedia" ? "text-white" : "text-[#919191]"
          }`}
          onClick={() => handleTabClick("socialMedia")}
        >
          <FaInstagram
            className={`text-base mr-2 ${
              activeTab === "socialMedia" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "socialMedia" ? "text-white" : "text-[#919191]"
            }`}
          >
            Social Media
          </span>
        </div>

        {/* Log Out Section */}
        <div
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "logout" ? "text-white" : "text-[#919191]"
          }`}
          onClick={() => handleTabClick("logout")}
        >
          <MdOutlineLogin
            className={`text-base mr-2 ${
              activeTab === "logout" ? "text-white" : "text-[#919191]"
            }`}
          />
          <span
            className={`text-xs poppins-regular ${
              activeTab === "logout" ? "text-white" : "text-[#919191]"
            }`}
          >
            Log Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarDashboard;
