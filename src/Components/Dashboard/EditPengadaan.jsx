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
import InputDivisiPeminjam from "./InputDivisiPeminjam";
import InputNamaPeminjam from "./InputNamaPeminjam";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";
import InputBuktiKeluar from "./InputBuktiKeluar";
import InputTujuanKeluar from "./InputTujuanKeluar";
import InputStatusRusak from "./InputStatusRusak";
import InputSolusiRusak from "./InputSolusiRusak";
import InputNomorPengadaan from "./InputNomorPengadaan";
import InputNamaPengadaan from "./InputNamaPengadaan";
import InputTanggalPengadaan from "./InputTanggalPengadaan";
import InputJenisAnggaran from "./InputJenisAnggaran";
import InputSubAnggaran from "./InputSubAnggaran";
import InputNilaiBarang from "./InputNilaiBarang";

const EditPengadaan = ({
  isUpdateModalOpen,
  closeUpdateModal,
  handleSave,
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

  const [imageURL, setImageURL] = useState(editData.picture || "");
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

  // const handleImageChange = (file) => {
  //   if (file) {
  // const url = URL.createObjectURL(file); // Create object URL
  // setImageURL(url);
  // setImageFile(file); // Save file for upload
  // setEditData({
  //   ...editData,
  //   pictureFile: file,
  //   pictureFileName: file.name,
  // });
  //   }
  // };
  const handleImageChange = (file) => {
    const url = URL.createObjectURL(file); // Create object URL
    setImageURL(url);
    setImageFile(file); // Save file for upload
    setEditData({
      ...editData,
      picture: file,
    });
  };

  // useEffect(() => {
  //   return () => {
  //     if (imageURL && imageURL.startsWith("blob:")) {
  //       URL.revokeObjectURL(imageURL);
  //     }
  //   };
  // }, [imageURL]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true);

    // Prepare form data
    const formData = new FormData();
    formData.append("no_pengadaan", editData.no_pengadaan || "");
    formData.append("nama_pengadaan", editData.nama_pengadaan || "");
    formData.append("tanggal_pengadaan", editData.tanggal_pengadaan || "");
    formData.append("jenis_anggaran", editData.jenis_anggaran || "");
    formData.append("sub_anggaran", editData.sub_anggaran || "");
    formData.append("nilai_barang", editData.nilai_barang || "");
    formData.append("jumlah_barang", editData.jumlah_barang || "");

    if (editData.bukti) {
      formData.append("bukti", editData.bukti);
    }

    console.log("FormData:", ...formData);

    // Send data to the backend
    try {
      await handleSave(formData);
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
              <Modal.Title>Edit Pengadaan</Modal.Title>
            </Modal.Header>
            <Modal.Body ref={modalRef}>
              <div className="mb-4">
                <InputNomorPengadaan
                  label="Nomor Pengadaan"
                  value={editData?.no_pengadaan || ""}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      no_pengadaan: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <InputNamaPengadaan
                  value={editData?.nama_pengadaan || ""}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      nama_pengadaan: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <InputTanggalPengadaan
                  selectedDate={editData?.tanggal_pengadaan} // Use editData?.tanggal_awal_pinjam directly
                  onDateChange={(date) =>
                    setEditData({
                      ...editData,
                      tanggal_pengadaan: date,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <InputJenisAnggaran
                  value={editData?.jenis_anggaran || ""}
                  onChange={(jenis_anggaran) =>
                    setEditData({
                      ...editData,
                      jenis_anggaran: jenis_anggaran,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <InputSubAnggaran
                  value={editData?.sub_anggaran || ""}
                  onChange={(sub_anggaran) =>
                    setEditData({
                      ...editData,
                      sub_anggaran: sub_anggaran,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <InputNilaiBarang
                  value={editData?.nilai_barang || ""}
                  onChange={(e) =>
                    setEditData({
                      ...editData,
                      nilai_barang: e.target.value,
                    })
                  }
                />
              </div>
              <Button
                type="button"
                variant="primary"
                className="w-full bg-[#3498DB] hover:bg-[#2980B9] text-white"
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

export default EditPengadaan;
