import React, { useState } from "react";
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
  const [data, setData] = useState({
    itemName: "",
    serialNumber: "",
    type: "",
    quantity: 0,
    units: "",
    quality: "",
    date: "",
    picture: null,
    information: "",
    workUnit: "",
    location: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!data.itemName.trim()) newErrors.itemName = "Item Name is required.";
    if (!data.serialNumber.trim())
      newErrors.serialNumber = "Serial Number is required.";
    if (!data.type.trim()) newErrors.type = "Type is required.";
    if (!data.quantity || isNaN(data.quantity))
      newErrors.quantity = "Valid Quantity is required.";
    if (!data.units.trim()) newErrors.units = "Units is required.";
    if (!data.quality.trim()) newErrors.quality = "Quality is required.";
    if (!data.date) newErrors.date = "Date is required.";
    if (!data.picture) newErrors.picture = "Picture is required.";
    if (!data.information.trim())
      newErrors.information = "Information is required.";
    if (!data.workUnit.trim()) newErrors.workUnit = "Work Unit is required.";
    if (!data.location.trim()) newErrors.location = "Location is required.";

    return newErrors;
  };

  const handleSave = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const formData = new FormData();
        formData.append("nama_barang", data.itemName);
        formData.append("tipe_barang", data.type);
        formData.append("kualitas", data.quality);
        formData.append("tanggal", data.date);
        formData.append("sn", data.serialNumber);
        formData.append("jumlah", data.quantity);
        formData.append("satuan", data.units);
        formData.append("keterangan", data.information);
        formData.append("lokasi", data.location);
        formData.append("picture", data.picture);
        formData.append("work_unit", data.workUnit);

        const response = await fetch("http://localhost:8000/api/barang-masuk", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const savedData = await response.json();
          console.log("Data saved:", savedData);
        } else {
          console.error("Failed to save data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
                            onChange={(e) =>
                              setData({ ...data, itemName: e.target.value })
                            }
                            className="text-sm"
                          />
                          {errors.itemName && (
                            <p className="text-red-500 text-xs">
                              {errors.itemName}
                            </p>
                          )}
                        </div>
                        <div className="w-[50%]">
                          <InputSerialNumber
                            onChange={(e) =>
                              setData({ ...data, serialNumber: e.target.value })
                            }
                            className="text-sm"
                          />
                          {errors.serialNumber && (
                            <p className="text-red-500 text-xs">
                              {errors.serialNumber}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div id="SecondData">
                      <div className="flex w-full space-x-6 h-[12%]">
                        <div className="w-[50%]">
                          <InputType
                            onChange={(e) =>
                              setData({ ...data, type: e.target.value })
                            }
                            className="text-sm"
                          />
                          {errors.type && (
                            <p className="text-red-500 text-xs">
                              {errors.type}
                            </p>
                          )}
                        </div>
                        <div className="w-[50%]">
                          <InputQuantity
                            onChange={(e) =>
                              setData({ ...data, quantity: e.target.value })
                            }
                            className="text-sm"
                          />
                          {errors.quantity && (
                            <p className="text-red-500 text-xs">
                              {errors.quantity}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div id="ThirdData">
                      <div className="flex w-full space-x-6 h-[12%]">
                        <div className="w-[50%]">
                          <InputQuality
                            onChange={(e) =>
                              setData({ ...data, quality: e.target.value })
                            }
                            className="text-sm"
                          />
                          {errors.quality && (
                            <p className="text-red-500 text-xs">
                              {errors.quality}
                            </p>
                          )}
                        </div>
                        <div className="w-[50%]">
                          <InputUnits
                            onChange={(e) =>
                              setData({ ...data, units: e.target.value })
                            }
                            className="text-sm"
                          />
                          {errors.units && (
                            <p className="text-red-500 text-xs">
                              {errors.units}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div id="FourthData">
                      <div className="flex w-full space-x-6 h-[12%]">
                        <div className="w-[50%]">
                          <InputDate
                            onChange={(date) => setData({ ...data, date })}
                            className="text-sm"
                          />
                          {errors.date && (
                            <p className="text-red-500 text-xs">
                              {errors.date}
                            </p>
                          )}
                        </div>
                        <div className="w-[50%]">
                          <InputPicture
                            onChange={(e) =>
                              setData({ ...data, picture: e.target.files[0] })
                            }
                            className="text-sm"
                          />
                          {errors.picture && (
                            <p className="text-red-500 text-xs">
                              {errors.picture}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="RightBoxParent" className="w-[40%] space-y-6">
                    <div id="FristData" className="w-full flex flex-col">
                      <div className="w-[100%] h-[12%]">
                        <InputInformation
                          onChange={(e) =>
                            setData({ ...data, information: e.target.value })
                          }
                          className="text-sm"
                        />
                        {errors.information && (
                          <p className="text-red-500 text-xs">
                            {errors.information}
                          </p>
                        )}
                      </div>
                    </div>
                    <div id="SecondData" className="w-full flex flex-col">
                      <div className="w-[100%] h-[12%]">
                        <InputWorkUnit
                          onChange={(e) =>
                            setData({ ...data, workUnit: e.target.value })
                          }
                          className="text-sm"
                        />
                        {errors.workUnit && (
                          <p className="text-red-500 text-xs">
                            {errors.workUnit}
                          </p>
                        )}
                      </div>
                    </div>
                    <div id="ThirdData" className="w-full flex flex-col">
                      <div className="w-[100%] h-[12%]">
                        <InputLocation
                          onChange={(e) =>
                            setData({ ...data, location: e.target.value })
                          }
                          className="text-sm"
                        />
                        {errors.location && (
                          <p className="text-red-500 text-xs">
                            {errors.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-16 flex justify-end px-4 w-full">
                  <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md w-[25%] poppins-regular text-xs"
                  >
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
