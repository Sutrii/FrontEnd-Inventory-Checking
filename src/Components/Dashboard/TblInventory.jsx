import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios"; // Import axios for HTTP requests
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { CiSearch } from "react-icons/ci";
import SeeDetail from "./ViewInventoryItem";
import UpdateInventoryItem from "./UpdateInventoryItem";

function TblInventory() {
  const [records, setRecords] = useState([]);
  const [allRecords, setAllRecords] = useState([]);
  const [entries, setEntries] = useState(5);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editData, setEditData] = useState();
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/input-barang"
        );
        const recordsWithNumbers = response.data.map((record, index) => ({
          ...record,
          nomor: index + 1,
        }));
        setRecords(recordsWithNumbers);
        setAllRecords(recordsWithNumbers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  function handleFilter(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === "") {
      // Jika input kosong, kembalikan semua data
      setRecords(allRecords);
    } else {
      const filteredData = allRecords.filter(
        (row) =>
          row.nama_barang.toLowerCase().includes(searchTerm) ||
          row.nama_peminjam?.toLowerCase().includes(searchTerm) // Memastikan nama_peminjam ada sebelum mencarinya
      );
      setRecords(filteredData);
    }
  }

  function handleEntriesChange(event) {
    setEntries(parseInt(event.target.value));
  }

  function openUpdateModal(data) {
    setEditData(data); // Pastikan data yang diset di sini sudah benar
    setIsUpdateModalOpen(true);
  }

  function closeUpdateModal() {
    setIsUpdateModalOpen(false);
  }

  function openDetailModal(data) {
    setDetailData(data);
    setIsDetailModalOpen(true);
  }

  function closeDetailModal() {
    setIsDetailModalOpen(false);
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8000/api/input-barang/${id}`);
        const updatedRecords = records.filter((record) => record.id !== id);
        const recordsWithNumbers = updatedRecords.map((record, index) => ({
          ...record,
          nomor: index + 1,
        }));
        setRecords(recordsWithNumbers);
        alert("Data berhasil dihapus");
      } catch (error) {
        console.error("Terjadi kesalahan saat menghapus data!", error);
        alert("Gagal menghapus data. Silakan coba lagi.");
      }
    }
  }

  async function handleUpdate() {
    if (editData) {
      const formData = new FormData();
      if (editData.picture) {
        formData.append("picture", editData.picture);
      }
      try {
        await axios.put(
          `http://localhost:8000/api/input-barang/${editData.id}`,
          editData,
          {
            // headers: {
            //   "Content-Type": "multipart/form-data",
            // },
          }
        );
        // Update records setelah update berhasil
        const updatedRecords = records.map((record) =>
          record.id === editData.id ? editData : record
        );
        const recordsWithNumbers = updatedRecords.map((record, index) => ({
          ...record,
          nomor: index + 1,
        }));
        setRecords(recordsWithNumbers);
        alert("Data berhasil diperbarui");
        setIsUpdateModalOpen(false);
      } catch (error) {
        console.error("Terjadi kesalahan saat memperbarui data!", error);
      }
    }
  }

  return (
    <div className="container px-0 py-2 mt-3 w-full">
      <div className="bg-white rounded-xl p-4 shadow-md poppins-regular text-sm">
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <label htmlFor="entries" className="me-2">
              Show
            </label>
            <select
              id="entries"
              className="form-select text-sm"
              style={{ width: "80px" }}
              onChange={handleEntriesChange}
              value={entries}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
            <label htmlFor="entries" className="ms-2">
              entries
            </label>
          </div>
          <div className="h-full">
            <div className="relative flex items-center">
              <CiSearch className="absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Cari Nama Barang atau Nama Peminjam"
                onChange={handleFilter}
                className="form-control rounded-2xl pl-10 poppins-regular text-xs h-10"
                style={{ width: "320px" }}
              />
            </div>
          </div>
        </div>
        <DataTable
          value={records}
          paginator
          rows={entries}
          rowsPerPageOptions={[5, 10, 15, 20]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          className="p-datatable-striped space-y-4"
          rowClassName={(data, rowIndex) =>
            rowIndex % 2 === 0
              ? "bg-white border-b border-gray-200"
              : "bg-gray-100 border-b border-gray-200"
          }
          sortMode="multiple"
          headerStyle={{ backgroundColor: "#F8F9FA" }}
        >
          <Column
            field="nomor"
            header="No"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
            headerStyle={{ backgroundColor: "#F8F9FA" }}
            bodyStyle={{ backgroundColor: "#F3F4F6" }}
            style={{
              width: "5%",
              textAlign: "left",
              position: "sticky",
              left: 0,
              zIndex: 1,
            }}
          />
          <Column
            field="kategori_input"
            header="Kategori"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="nama_barang"
            header="Nama Barang"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="tipe_barang"
            header="Tipe"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="kualitas"
            header="Kualitas"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="tanggal"
            header="Tanggal"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="tanggal_awal_pinjam"
            header="Awal Peminjaman"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="tanggal_akhir_pinjam"
            header="Akhir Peminjaman"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="divisi_peminjam"
            header="Divisi Peminjam"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="nama_peminjam"
            header="Nama Peminjam"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="sn"
            header="S/N"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="jumlah"
            header="Jumlah"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="satuan"
            header="Satuan"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="keterangan"
            header="Keterangan"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="work_unit"
            header="Unit Kerja"
            headerClassName="text-sm"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            field="lokasi"
            header="Lokasi"
            headerClassName="text-sm"
            className="text-center poppins-regular text-xs"
            sortable
          />
          <Column
            header="Aksi Admin"
            headerClassName="text-xs sticky right-0 z-[1]"
            className="sticky right-0 z-[1]"
            headerStyle={{ backgroundColor: "#F8F9FA" }}
            bodyStyle={{ backgroundColor: "#F3F4F6" }}
            body={(rowData) => (
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  justifyContent: "center",
                }}
              >
                <div
                  className="bg-[#3498DB] px-2 py-2 rounded-3"
                  onClick={() => openDetailModal(rowData)}
                >
                  <FaEye
                    title="Lihat Detail"
                    className="text-white cursor-pointer text-sm sm:text-base"
                  />
                </div>
                <div
                  className="bg-[#387F39] px-2 py-2 rounded-3"
                  onClick={() => openUpdateModal(rowData)}
                >
                  <FaEdit
                    title="Edit"
                    className="text-white cursor-pointer text-sm sm:text-base"
                  />
                </div>
                <div
                  className="bg-[#C53929] px-2 py-2 rounded-3"
                  onClick={() => handleDelete(rowData.id)}
                >
                  <FaTrash
                    title="Hapus"
                    className="text-white cursor-pointer text-sm sm:text-base"
                  />
                </div>
              </div>
            )}
          />
          {/* Kondisional untuk menampilkan kolom tanggal_awal_pinjam dan tanggal_akhir_pinjam */}
        </DataTable>
        {isUpdateModalOpen && (
          <UpdateInventoryItem
            isUpdateModalOpen={isUpdateModalOpen}
            closeUpdateModal={closeUpdateModal}
            setIsUpdateModalOpen={setIsUpdateModalOpen}
            editData={editData}
            setEditData={setEditData}
            handleUpdate={handleUpdate}
            detailData={detailData}
          />
        )}
        {isDetailModalOpen && (
          <SeeDetail
            isDetailModalOpen={isDetailModalOpen}
            setIsDetailModalOpen={setIsDetailModalOpen}
            closeDetailModal={closeDetailModal}
            detailData={detailData}
          />
        )}
      </div>
    </div>
  );
}

export default TblInventory;
