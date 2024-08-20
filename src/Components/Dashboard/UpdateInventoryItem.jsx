import React, { useRef, useEffect, useState } from "react";
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
import InputCategory from "./InputCategory";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";

const UpdateInventoryItem = ({
  isUpdateModalOpen,
  closeUpdateModal,
  handleUpdate,
  editData,
  setEditData,
}) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isUpdateModalOpen) {
      setLoading(false); // Set loading ke false jika modal dibuka
    }
  }, [isUpdateModalOpen]);

  // Fungsi untuk menangani klik di luar modal
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeUpdateModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isUpdateModalOpen) return null;

  const handleImageChange = (e) => {
    if (e.target && e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setEditData({
        ...editData,
        picture: URL.createObjectURL(file),
        pictureFile: file, // Simpan file asli
        pictureFileName: file.name, // Simpan nama file
      });
    }
  };

  return (
    <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <Modal
            show={isUpdateModalOpen}
            onHide={closeUpdateModal}
            size="md"
            scrollable
            dialogClassName="modal-dialog-centered"
          >
            <Modal.Header>
              <Modal.Title>Edit Barang</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="text-center">
                {editData?.picture ? (
                  <img
                    src={
                      editData.picture && editData.picture.startsWith("http")
                        ? editData.picture
                        : editData.picture // URL.createObjectURL(file) digunakan di tempat lain, pastikan ini adalah URL gambar lokal atau placeholder
                    }
                    alt={editData.nama_barang || "Gambar Barang"}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Placeholder"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )}
                <InputPicture
                  value={editData?.picture || ""}
                  onChange={handleImageChange} // Pastikan untuk menggunakan handler yang benar
                  placeholder={editData.picture}
                />
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUpdate();
                }}
              >
                <div className="mb-4">
                  <InputCategory
                    label="Kategori Barang"
                    value={editData?.kategori_input || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        kategori_input: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <InputName
                    label="Item Name"
                    value={editData?.nama_barang || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        nama_barang: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4">
                  <InputSerialNumber
                    value={editData?.sn || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        sn: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputType
                    value={editData?.tipe_barang || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        tipe_barang: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputQuantity
                    value={editData?.jumlah || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        jumlah: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputQuality
                    value={editData?.kualitas || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        kualitas: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputUnits
                    value={editData?.satuan || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        satuan: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputInformation
                    value={editData?.keterangan || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        keterangan: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputWorkUnit
                    value={editData?.work_unit || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        work_unit: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <InputLocation
                    value={editData?.lokasi || ""}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        lokasi: e.target.value,
                      })
                    }
                  />
                </div>
                <Modal.Footer>
                  <div className="d-flex justify-content-end gap-2">
                    <Button
                      className="bg-blue-500 text-white px-4 rounded"
                      type="submit"
                      onClick={() => {
                        // Update clicked, trigger the handleUpdate
                        console.log("Update clicked");
                        handleUpdate();
                      }}
                    >
                      Update
                    </Button>
                    <Button variant="danger" onClick={closeUpdateModal}>
                      Close
                    </Button>
                  </div>
                </Modal.Footer>
              </form>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
};

export default UpdateInventoryItem;
