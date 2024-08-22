import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios"; // Import axios for HTTP requests
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { CiSearch } from "react-icons/ci";

function TblNotification() {
  const [records, setRecords] = useState([]);
  const [allRecords, setAllRecords] = useState([]);
  const [entries, setEntries] = useState(10);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/input-barang" // Update endpoint
        );

        // Memfilter data untuk hanya menampilkan "Barang Pinjaman"
        const filteredRecords = response.data
          .filter((record) => record.kategori_input === "Barang Pinjaman")
          .map((record, index) => ({
            ...record,
            nomor: index + 1,
          }));

        setRecords(filteredRecords);
        setAllRecords(filteredRecords);
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

  const calculateRemainingBorrowTime = (endDate) => {
    const now = new Date();
    const end = new Date(endDate);
    const diff = end - now;
    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return daysLeft > 0 ? `${daysLeft} Hari` : "Habis";
  };

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
            body={(rowData) => (
              <span className="p-tag p-tag-info">
                {calculateRemainingBorrowTime(rowData.tanggal_akhir_pinjam)}
              </span>
            )}
            header="Sisa Masa Pinjaman"
            headerClassName="text-xs"
            className="text-center poppins-regular text-xs"
            sortable
          />
        </DataTable>
      </div>
    </div>
  );
}

export default TblNotification;
