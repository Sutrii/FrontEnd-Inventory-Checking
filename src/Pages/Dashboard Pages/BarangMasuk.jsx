import React from "react";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import TotalBarang from "../../Components/Dashboard/BoxTotalBarang";
import NameInput from "../../Components/Dashboard/InputName";
import InputType from "../../Components/Dashboard/InputType";
import InputSerialNumber from "../../Components/Dashboard/InputSerialNumber";
import InputQuantity from "../../Components/Dashboard/InputQuantity";
import InputUnits from "../../Components/Dashboard/InputUnits";
import InputQuality from "../../Components/Dashboard/InputQuality";
import InputDate from "../../Components/Dashboard/InputDate";
import InputPicture from "../../Components/Dashboard/InputPicture";

const BarangMasuk = () => {
  return (
    <div id="DashboardParent" className="w-screen flex flex-col">
      <div
        id="DashboardHeader"
        className="fixed top-0 right-0 z-10 w-[85%] h-[10%]"
      >
        <NavbarDashboard />
        <div id="DashboardContent" className="flex flex-row">
          <div className="flex flex-row bg-gray-100 w-full h-screen p-4 space-x-6">
            <div id="LeftBoxParent" className="w-[50%] space-y-8">
              <div id="FirstData">
                <div className="flex w-full space-x-6">
                  <div className="w-[50%]">
                    <NameInput />
                  </div>
                  <div className="w-[50%]">
                    <InputSerialNumber />
                  </div>
                </div>
              </div>
              <div id="SecondData">
                <div className="flex w-full space-x-6">
                  <div className="w-[50%]">
                    <InputType />
                  </div>
                  <div className="w-[50%]">
                    <InputQuantity />
                  </div>
                </div>
              </div>
              <div id="ThirdData">
                <div className="flex w-full space-x-6">
                  <div className="w-[50%]">
                    <InputQuality />
                  </div>
                  <div className="w-[50%]">
                    <InputUnits />
                  </div>
                </div>
              </div>
              <div id="FourthData">
                <div className="flex w-full space-x-6">
                  <div className="w-[50%]">
                    <InputDate />
                  </div>
                  <div className="w-[50%]">
                    <InputPicture />
                  </div>
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

export default BarangMasuk;
