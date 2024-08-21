import React, { useState, useEffect } from "react";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import logoPelindo from "../assets/img/logo-pelindo.png";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsTruck } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";

const SidebarDashboard = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    // Update activeTab based on the current route
    const path = location.pathname;
    if (path.includes("dashboard")) setActiveTab("dashboard");
    else if (path.includes("tabel-barang-masuk")) setActiveTab("barangMasuk");
    else if (path.includes("tabel-barang-keluar")) setActiveTab("barangKeluar");
    else if (path.includes("tabel-barang-pinjaman"))
      setActiveTab("barangPinjaman");
    else if (path.includes("tabel-barang-rusak")) setActiveTab("barangRusak");
    else if (path.includes("input-barang-masuk"))
      setActiveTab("barangMasukInv");
    else if (path.includes("input-barang-keluar"))
      setActiveTab("barangKeluarInv");
    else if (path.includes("input-barang-pinjaman"))
      setActiveTab("barangPinjamanInv");
    else if (path.includes("input-barang-rusak"))
      setActiveTab("barangRusakInv");
    else if (path.includes("tabel-inventory")) setActiveTab("inputInventory");
    else if (path.includes("input-barang")) setActiveTab("inputBarangInv");
    else if (path.includes("social-media")) setActiveTab("socialMedia");
    else if (path.includes("logout")) setActiveTab("logout");
  }, [location]);

  return (
    <div
      id="SidebarParent"
      className="w-full h-screen bg-[#222E3C] border border-black p-3"
    >
      <div id="InsideParent" className="flex flex-col w-full h-full">
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
            style={{ borderBottom: "0.5px solid #BEBEBE" }}
          >
            Menu
          </span>
        </div>
        <NavLink to="/dashboard">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "dashboard" ? "text-white" : "text-[#919191]"
            }`}
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

        <NavLink to="/tabel-inventory">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "inputInventory" ? "text-white" : "text-[#919191]"
            }`}
          >
            <BsTruck
              className={`text-base mr-2 ${
                activeTab === "inputInventory" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "inputInventory" ? "text-white" : "text-[#919191]"
              }`}
            >
              Tabel Inventaris
            </span>
          </div>
        </NavLink>

        <NavLink to="/input-barang">
          <div
            className={`flex items-center text-left px-2 mb-4 cursor-pointer ${
              activeTab === "inputBarangInv" ? "text-white" : "text-[#919191]"
            }`}
          >
            <VscListFlat
              className={`text-base mr-2 ${
                activeTab === "inputBarangInv" ? "text-white" : "text-[#919191]"
              }`}
            />
            <span
              className={`text-xs poppins-regular ${
                activeTab === "inputBarangInv" ? "text-white" : "text-[#919191]"
              }`}
            >
              Input Inventaris
            </span>
          </div>
        </NavLink>
        {/* About Us Section */}
        <div className="text-left text-white mb-3 px-2">
          <span
            className="text-xs poppins-regular pb-1 w-full inline-block"
            style={{ borderBottom: "0.5px solid #BEBEBE" }}
          >
            Tentang Kami
          </span>
        </div>
        <a
          href="https://www.instagram.com/pelindomultiterminal?igsh=MXhmN2VsOHRpMWJuNQ=="
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center text-left px-2 mb-3 cursor-pointer ${
            activeTab === "socialMedia" ? "text-white" : "text-[#919191]"
          }`}
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
        </a>
      </div>
    </div>
  );
};

export default SidebarDashboard;
