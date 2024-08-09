import React from "react";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import NameInput from "../../Components/Dashboard/InputName";
import InputType from "../../Components/Dashboard/InputType";
import InputSerialNumber from "../../Components/Dashboard/InputSerialNumber";
import InputQuantity from "../../Components/Dashboard/InputQuantity";
import InputUnits from "../../Components/Dashboard/InputUnits";
import InputQuality from "../../Components/Dashboard/InputQuality";
import InputDate from "../../Components/Dashboard/InputDate";
import InputPicture from "../../Components/Dashboard/InputPicture";
import InputInformation from "../../Components/Dashboard/InputInformation";
import InputWorkUnit from "../../Components/Dashboard/InputWorkUnit";
import InputLocation from "../../Components/Dashboard/InputLocation";

const BarangMasuk = () => {
  const handleSave = (data, context) => {
    if (context === "barangMasuk") {
      console.log("Saving data to Barang Masuk:", data);
    }
  };
  return (
    <div className="w-screen flex flex-col bg-white">
      <div className="fixed top-0 right-0 z-10 w-[85%]">
        <NavbarDashboard />
      </div>
      <div className="flex overflow-y-hidden">
        <div className="absolute right-0 w-[85%]">
          <div className="h-screen">
            <div id="DashboardContent" className="flex flex-row">
              <div className="flex flex-col bg-gray-100 w-full h-screen pt-24">
                <div className="flex flex-row w-full h-full space-x-6 px-4">
                  <div id="LeftBoxParent" className="w-[60%] space-y-6">
                    <div id="FirstData">
                      <div className="flex w-full space-x-6 h-[12%]">
                        <div className="w-[50%]">
                          <NameInput
                            label="Item Name"
                            onSubmit={handleSave}
                            className="text-sm"
                          />
                        </div>
                        <div className="w-[50%]">
                          <InputSerialNumber className="text-sm" />
                        </div>
                      </div>
                    </div>
                    <div id="SecondData">
                      <div className="flex w-full space-x-6 h-[12%]">
                        <div className="w-[50%]">
                          <InputType className="text-sm" />
                        </div>
                        <div className="w-[50%]">
                          <InputQuantity className="text-sm" />
                        </div>
                      </div>
                    </div>
                    <div id="ThirdData">
                      <div className="flex w-full space-x-6 h-[12%]">
                        <div className="w-[50%]">
                          <InputQuality className="text-sm" />
                        </div>
                        <div className="w-[50%]">
                          <InputUnits className="text-sm" />
                        </div>
                      </div>
                    </div>
                    <div id="FourthData">
                      <div className="flex w-full space-x-6 h-[12%]">
                        <div className="w-[50%]">
                          <InputDate className="text-sm" />
                        </div>
                        <div className="w-[50%]">
                          <InputPicture className="text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="RightBoxParent" className="w-[40%] space-y-6">
                    <div id="FristData" className="w-full flex flex-col">
                      <div className="w-[100%] h-[12%]">
                        <InputInformation className="text-sm" />
                      </div>
                    </div>
                    <div id="SecondData" className="w-full flex flex-col">
                      <div className="w-[100%] h-[12%]">
                        <InputWorkUnit className="text-sm" />
                      </div>
                    </div>
                    <div id="ThirdData" className="w-full flex flex-col">
                      <div className="w-[100%] h-[12%]">
                        <InputLocation className="text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-16 flex justify-end px-4 w-full">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md w-[25%] poppins-regular text-xs">
                    Submit Data
                  </button>
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

export default BarangMasuk;
