import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FaEdit, FaTrash } from "react-icons/fa";
import "primereact/resources/themes/saga-blue/theme.css"; // Import the theme
import "primereact/resources/primereact.min.css"; // Import core styles
import "primeicons/primeicons.css"; // Import icons

function TblBarangRusak() {
  const data = [
    {
      no: 1,
      nama_barang: "Laptop Asus RAM 8gb warna biru stiker kucing",
      tipe_barang: "Laptop",
      kualitas: "Lecet Pemakaian",
      tanggal: "20 Maret 2024",
      sn: "123456",
      jumlah: 10,
      satuan: "Unit",
      keterangan: "Baterai Kembung",
      aksi_admin: "Edit/Delete",
    },
    {
      no: 2,
      nama_barang: "Samsung TV",
      tipe_barang: "TV",
      kualitas: "Layar Pecah",
      tanggal: "25 Maret 2024",
      sn: "123456",
      jumlah: 2,
      satuan: "Unit",
      keterangan: "Layar 24 inch",
      aksi_admin: "Edit/Delete",
    },
  ];

  const [records, setRecords] = useState(data);
  const [entries, setEntries] = useState(10); // Default entries per page

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

  return (
    <div className="container px-0 py-2 mt-3 w-full h-full">
      <div className="bg-white rounded-xl p-4 shadow-md h-full poppins-font">
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
        >
          <Column
            field="no"
            header="No"
            sortable
            style={{ width: "5%", textAlign: "left" }}
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
            header="Aksi Admin"
            style={{ width: "10%", textAlign: "center" }}
            body={() => (
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  justifyContent: "center",
                }}
              >
                <div className="bg-[#387F39] px-2 py-2 rounded-3">
                  <FaEdit
                    title="Edit"
                    className="text-white cursor-pointer text-sm sm:text-base"
                  />
                </div>
                <div className="bg-[#C80036] px-2 py-2 rounded-3">
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
    </div>
  );
}

export default TblBarangRusak;
