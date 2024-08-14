import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios"; // Import axios for HTTP requests
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import UpdateBarangRusak from "./UpdateBarangRusak";

function TblBarangRusak() {
  const [records, setRecords] = useState([]);
  const [entries, setEntries] = useState(10);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/barang-rusak"
        );

        setRecords(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  function handleFilter(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredData = data.filter((row) =>
      row.nama_barang.toLowerCase().includes(searchTerm)
    );
    setRecords(filteredData);
  }

  function handleEntriesChange(event) {
    setEntries(parseInt(event.target.value));
  }

  // Fungsi untuk menghapus data dengan konfirmasi
  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`/api/barang-rusak/${id}`);
        setRecords(records.filter((record) => record.id !== id));
        alert("Data berhasil dihapus");
      } catch (error) {
        console.error("Terjadi kesalahan saat menghapus data!", error);
      }
    }
  }

  function openUpdateModal(data) {
    setEditData(data);
    setIsUpdateModalOpen(true);
  }

  function closeUpdateModal() {
    setIsUpdateModalOpen(false);
  }

  async function handleUpdate() {
    if (editData) {
      try {
        await axios.put(`/api/barang-rusak/${editData.id}`, editData);
        const updatedRecords = records.map((record) =>
          record.id === editData.id ? editData : record
        );
        setRecords(updatedRecords);
        alert("Data berhasil diperbarui");
        setIsUpdateModalOpen(false);
      } catch (error) {
        console.error("Terjadi kesalahan saat memperbarui data!", error);
      }
    }
  }

  return (
    <div className="container px-0 py-2 mt-3 w-full">
      <div className="bg-white rounded-xl p-4 shadow-md poppins-font">
        <div className="flex justify-between mb-3">
          <div className="flex items-center">
            <label htmlFor="entries" className="me-2">
              Show
            </label>
            <select
              id="entries"
              className="form-select"
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
          <div className="text-end">
            <input
              type="text"
              placeholder="Search"
              onChange={handleFilter}
              className="form-control"
              style={{ width: "200px" }}
            />
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
            field="id"
            header="No"
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
            field="nama_barang"
            header="Nama Barang"
            sortable
            style={{ width: "15%", textAlign: "left" }}
          />
          <Column
            field="tipe_barang"
            header="Tipe"
            sortable
            style={{ width: "10%", textAlign: "left" }}
          />
          <Column
            field="kualitas"
            header="Kualitas"
            sortable
            style={{ width: "15%", textAlign: "left" }}
          />
          <Column
            field="tanggal"
            header="Tanggal"
            sortable
            style={{ width: "12%", textAlign: "left" }}
          />
          <Column
            field="sn"
            header="S/N"
            sortable
            style={{ width: "10%", textAlign: "left" }}
          />
          <Column
            field="jumlah"
            header="Jumlah"
            sortable
            style={{ width: "10%", textAlign: "left" }}
          />
          <Column
            field="satuan"
            header="Satuan"
            sortable
            style={{ width: "10%", textAlign: "left" }}
          />
          <Column
            field="keterangan"
            header="Keterangan"
            sortable
            style={{ width: "20%", textAlign: "left" }}
          />
          <Column
            field="work_unit"
            header="Unit Kerja"
            sortable
            style={{ width: "20%", textAlign: "left" }}
          />
          <Column
            field="lokasi"
            header="Lokasi"
            sortable
            style={{ width: "20%", textAlign: "left" }}
          />
          <Column
            header="Aksi Admin"
            headerStyle={{ backgroundColor: "#F8F9FA" }} // Gaya header tabel
            bodyStyle={{ backgroundColor: "#F3F4F6" }} // Gaya isi kolom
            style={{
              width: "10%", // Menggunakan lebar 10%
              textAlign: "center", // Mengatur teks rata tengah
              position: "sticky",
              right: 0,
              zIndex: 1,
            }}
            body={(rowData) => (
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  justifyContent: "center",
                }}
              >
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
                  className="bg-[#C80036] px-2 py-2 rounded-3"
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
        </DataTable>
      </div>
      <UpdateBarangRusak
        isUpdateModalOpen={isUpdateModalOpen}
        closeUpdateModal={closeUpdateModal}
        handleUpdate={handleUpdate}
        editData={editData}
        setEditData={setEditData}
      />
    </div>
  );
}

export default TblBarangRusak;