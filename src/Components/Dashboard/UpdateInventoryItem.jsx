import React, { useRef, useEffect, useState } from "react";
import InputSerialNumber from "./InputSerialNumber";
import InputType from "./InputType";
import InputQuantity from "./InputQuantity";
import InputQuality from "./InputQuality";
import InputUnits from "./InputUnits";
import InputPicture from "./InputPicture";
import InputInformation from "./InputInformation";
import InputWorkUnit from "./InputWorkUnit";
import InputLocation from "./InputLocation";
import InputName from "./InputName";
import InputCategory from "./InputCategory";
import InputStartDate from "./InputStartDate";
import InputEndDate from "./InputEndDate";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";
import InputNamaPeminjam from "./InputNamaPeminjam";
import InputDivisiPeminjam from "./InputDivisiPeminjam";

const UpdateInventoryItem = ({
  isUpdateModalOpen,
  closeUpdateModal,
  handleUpdate,
  editData,
  setEditData,
}) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    editData?.kategori_input || ""
  );
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setEditData({
      ...editData,
      kategori_input: category,
    });
  };

  const [imageURL, setImageURL] = useState(editData?.picture || "");
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (isUpdateModalOpen) {
      setLoading(false);
      if (editData?.picture) {
        setImageURL(editData.picture);
      }
    }
  }, [isUpdateModalOpen, editData?.picture]);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeUpdateModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleImageChange = (file) => {
    if (file) {
      const url = URL.createObjectURL(file); // Create object URL
      setImageURL(url);
      setImageFile(file); // Save file for upload
      setEditData({
        ...editData,
        pictureFile: file,
        pictureFileName: file.name,
      });
    }
  };

  useEffect(() => {
    return () => {
      if (imageURL && imageURL.startsWith("blob:")) {
        URL.revokeObjectURL(imageURL);
      }
    };
  }, [imageURL]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    // Prepare form data
    const formData = new FormData();
    formData.append("nama_barang", editData.nama_barang || "");
    formData.append("nama_peminjam", editData.nama_peminjam || "");
    formData.append("divisi_peminjam", editData.divisi_peminjam || "");
    formData.append("sn", editData.sn || "");
    formData.append("tipe_barang", editData.tipe_barang || "");
    formData.append("jumlah", editData.jumlah || "");
    formData.append("kualitas", editData.kualitas || "");
    formData.append("satuan", editData.satuan || "");
    formData.append("keterangan", editData.keterangan || "");
    formData.append("work_unit", editData.work_unit || "");
    formData.append("lokasi", editData.lokasi || "");
    formData.append("kategori_input", editData.kategori_input || "");
    formData.append("tanggal_awal_pinjam", editData.tanggal_awal_pinjam || "");
    formData.append(
      "tanggal_akhir_pinjam",
      editData.tanggal_akhir_pinjam || ""
    );

    if (imageFile) {
      formData.append("picture", imageFile);
    }

    console.log("FormData:", ...formData);

    // Send data to the backend
    try {
      await handleUpdate(formData);
    } catch (error) {
      console.error("Error updating item:", error);
    } finally {
      setLoading(false);
      closeUpdateModal();
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
            <Modal.Body ref={modalRef}>
              <div className="text-center mb-4">
                {imageURL ? (
                  <img
                    src={imageURL}
                    alt={editData?.nama_barang || "Gambar Barang"}
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
                  value={editData?.pictureFileName || "Input Item Picture"}
                  onChange={handleImageChange}
                />
              </div>
              <div className="mb-4">
                <InputCategory
                  label="Kategori Barang"
                  value={editData?.kategori_input || ""}
                  onCategoryChange={handleCategoryChange}
                />
              </div>
              {selectedCategory === "Barang Pinjaman" && (
                <>
                  <div className="mb-4">
                    <InputStartDate
                      selectedDate={editData?.tanggal_awal_pinjam} // Use editData?.tanggal_awal_pinjam directly
                      onDateChange={(date) =>
                        setEditData({
                          ...editData,
                          tanggal_awal_pinjam: date,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <InputEndDate
                      selectedDate={editData?.tanggal_akhir_pinjam} // Use editData?.tanggal_akhir_pinjam directly
                      onDateChange={(date) =>
                        setEditData({
                          ...editData,
                          tanggal_akhir_pinjam: date,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <InputDivisiPeminjam
                      label="Nama Peminjam"
                      value={editData?.divisi_peminjam || ""}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          divisi_peminjam: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <InputNamaPeminjam
                      label="Divisi Peminjam"
                      value={editData?.nama_peminja || ""}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          nama_peminjam: e.target.value,
                        })
                      }
                    />
                  </div>
                </>
              )}
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
                  onChange={(quality) =>
                    setEditData({
                      ...editData,
                      kualitas: quality,
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
                  onChange={(work_unit) =>
                    setEditData({
                      ...editData,
                      work_unit: work_unit,
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

              <Button
                type="button"
                variant="primary"
                className="w-full"
                onClick={(e) => handleSubmit(e)} // Pass the event manually
              >
                Update
              </Button>
            </Modal.Body>
          </Modal>
        </>
      )}
    </div>
  );
};

export default UpdateInventoryItem;
