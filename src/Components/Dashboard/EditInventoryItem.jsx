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

const EditInventoryItem = ({ isUpdateModalOpen, closeUpdateModal }) => {
  const modalRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState({
    nama_barang: "",
    tipe_barang: "",
    kualitas: "Pilih Kualitas Barang",
    tanggal: null,
    sn: "",
    jumlah: "",
    satuan: "",
    tujuan_keluar: "",
    picture: null,
    bukti: null,
    keterangan: "",
    work_unit: "",
    lokasi: "",
    tanggal_awal_pinjam: "",
    tanggal_akhir_pinjam: "",
    divisi_peminjam: "",
    nama_peminjam: "",
    status_barang: "",
    solusi_barang: "",
  });

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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //   const handleImageChange = (file) => {
  //     const url = URL.createObjectURL(file); // Create object URL
  //     setImageURL(url);
  //     setImageFile(file); // Save file for upload
  //     setEditData({
  //       ...editData,
  //       picture: file,
  //     });
  //   };

  //Untuk Upload Foto
  const handlePhotoChange = (file) => {
    setEditData((prevData) => ({
      ...prevData,
      picture: file,
    }));
  };

  const handleFileChange = (file) => {
    setEditData((prevData) => ({
      ...prevData,
      bukti: file,
    }));
  };

  //Untuk Form Keterangan
  const handleInformationChange = (e) => {
    const { name, value } = e.target;
    setEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("nama_barang", editData.nama_barang || "");
      formData.append("nama_peminjam", editData.nama_peminjam || "");
      formData.append("divisi_peminjam", editData.divisi_peminjam || "");
      formData.append("tujuan_keluar", editData.tujuan_keluar || "");
      formData.append("status_barang", editData.status_barang || "");
      formData.append("solusi_barang", editData.solusi_barang || "");
      formData.append("sn", editData.sn || "");
      formData.append("tipe_barang", editData.tipe_barang || "");
      formData.append("jumlah", editData.jumlah || "");
      formData.append("kualitas", editData.kualitas || "");
      formData.append("satuan", editData.satuan || "");
      formData.append("keterangan", editData.keterangan || "");
      formData.append("work_unit", editData.work_unit || "");
      formData.append("lokasi", editData.lokasi || "");
      formData.append("kategori_input", editData.kategori_input || "");
      formData.append(
        "tanggal_awal_pinjam",
        editData.tanggal_awal_pinjam || ""
      );
      formData.append(
        "tanggal_akhir_pinjam",
        editData.tanggal_akhir_pinjam || ""
      );
      formData.append("picture", editData.picture);
      formData.append("bukti", editData.bukti);

      //   if (editData.picture) {
      //     formData.append("picture", editData.picture);
      //   }
      //   if (editData.bukti) {
      //     formData.append("bukti", editData.bukti);
      //   }

      const response = await fetch("http://localhost:8000/api/input-barang", {
        method: "PUT",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Data saved:", result);
        toast.success("Data berhasil disimpan!");
      } else {
        console.error("Error saving data:", await response.text());
        toast.error("Terjadi kesalahan saat menyimpan data!");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Terjadi kesalahan pada server!");
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
                {editData?.picture && (
                  <img
                    src={`http://localhost:8000/storage/pictures/${editData.picture}`}
                    alt={editData.nama_barang}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )}
                <InputPicture onChange={handlePhotoChange} />
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
                  <div className="text-center mb-4">
                    <InputBuktiKeluar
                      selectedDate={editData?.bukti}
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="mb-4">
                    <InputStartDate
                      selectedDate={editData?.tanggal_awal_pinjam}
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
                      selectedDate={editData?.tanggal_akhir_pinjam}
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
                      label="Divisi Peminjam"
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
                      label="Nama Peminjam"
                      value={editData?.nama_peminjam || ""}
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
              {selectedCategory === "Barang Keluar" && (
                <>
                  <div className="text-center mb-4">
                    <InputBuktiKeluar
                      selectedDate={editData?.bukti}
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="mb-4">
                    <InputTujuanKeluar
                      label="Tujuan Keluar"
                      value={editData?.tujuan_keluar || ""}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          tujuan_keluar: e.target.value,
                        })
                      }
                    />
                  </div>
                </>
              )}
              {selectedCategory === "Barang Rusak" && (
                <>
                  <div className="mb-4">
                    <InputStatusRusak
                      label="Status Barang"
                      value={editData?.status_barang || ""}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          status_barang: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="mb-4">
                    <InputSolusiRusak
                      label="Solusi Barang"
                      value={editData?.solusi_barang || ""}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          solusi_barang: e.target.value,
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
                  onChange={handleInformationChange}
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
                className="w-full bg-[#3498DB] hover:bg-[#2980B9] text-white"
                onClick={handleSave}
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

export default EditInventoryItem;
