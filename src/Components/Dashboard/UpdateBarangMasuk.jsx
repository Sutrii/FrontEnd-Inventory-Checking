import React, { useRef, useEffect } from "react";
import InputSerialNumber from "./InputSerialNumber";
import InputType from "./InputType";
import InputQuantity from "./InputQuantity";
import InputQuality from "./InputQuality";
import InputUnits from "./InputUnits";
import InputDate from "./InputDate";
import InputPicture from "./InputPicture";
import InputInformation from "./InputInformation";
import InputWorkUnit from "./InputWorkUnit";
import InputLocation from "./InputLocation";
import InputName from "./InputName";

const UpdateBarangMasuk = ({
  isUpdateModalOpen,
  closeUpdateModal,
  handleUpdate,
  editData,
  setEditData,
}) => {
  const modalRef = useRef(null);

  // Function to handle clicks outside the modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeUpdateModal();
    }
  };

  // Add and clean up event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isUpdateModalOpen) return null;

  return (
    <div className="modal fixed top-0 left-0 w-full h-full bg-c bg-opacity-50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="modal-content bg-white p-2 rounded w-full max-w-md max-h-[90vh] relative overflow-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 z-20">
          <div className="flex items-center justify-between p-4">
            <h3 className="poppins-semibold text-xl">
              Update Tabel Barang Masuk
            </h3>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={closeUpdateModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-4 pt-0">
          <div className="mb-4">
            <InputName
              label="Item Name"
              value={editData?.itemName || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  itemName: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputSerialNumber
              value={editData?.serialNumber || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  serialNumber: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputType
              value={editData?.type || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  type: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputQuantity
              value={editData?.quantity || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  quantity: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputQuality
              value={editData?.quality || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  quality: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputUnits
              value={editData?.units || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  units: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputDate
              value={editData?.date || ""}
              onChange={(date) =>
                setEditData({
                  ...editData,
                  date,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputPicture
              value={editData?.picture || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  picture: e.target.files[0],
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputInformation
              value={editData?.information || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  information: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputWorkUnit
              value={editData?.workUnit || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  workUnit: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-4">
            <InputLocation
              value={editData?.location || ""}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  location: e.target.value,
                })
              }
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={closeUpdateModal}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBarangMasuk;
