import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarDashboard from "../../Components/NavbarDashboard";
import SidebarDashboard from "../../Components/SidebarDashboard";
import logoPelindo from "../../assets/img/logo-pelindo.png";
import { saveAs } from "file-saver";
import TableComponent from "../../Components/Dashboard/TableComponent";

const InventoryTable = ({ inventoryData }) => {
  const [records, setRecords] = useState([]);
  const [allRecords, setAllRecords] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailData, setDetailData] = useState(null);

  const handleFilter = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setRecords(allRecords);
    } else {
      const filteredData = allRecords.filter(
        (row) =>
          row.nama_barang.toLowerCase().includes(searchTerm) ||
          row.nama_peminjam?.toLowerCase().includes(searchTerm) // Memastikan nama_peminjam ada sebelum mencarinya
      );
      setRecords(filteredData);
    }
  };

  const fetchData = () => {
    axios
      .get("http://localhost:8000/api/input-barang", {
        withCredentials: true,
      })
      .then((response) => {
        const recordsWithNumbers = response.data.map((record, index) => ({
          ...record,
          nomor: index + 1,
        }));
        setRecords(recordsWithNumbers);
        setAllRecords(recordsWithNumbers);
      })
      .catch((error) => {
        if (error.response && error.response.status === 429) {
          console.error("Terlalu banyak permintaan. Silakan coba lagi nanti.");
        } else {
          console.error("Error fetching data:", error);
        }
      });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus data ini?"
    );
    if (confirmDelete) {
      try {
        axios.delete(`http://localhost:8000/api/input-barang/${id}`);
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
  };

  function openUpdateModal(data) {
    setEditData(data);
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

  const handleExportExcel = async () => {
    try {
      const response = await axios.get("/inventory-export", {
        responseType: "blob", // Specify response type as blob for binary data
      });
      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, "Data Inventaris.xlsx");
    } catch (error) {
      console.error("Failed to export Excel:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Hanya panggil sekali saat komponen dimuat

  return (
    <div className="w-screen flex flex-col bg-white">
      <div className="fixed top-0 right-0 z-10 w-[85%]">
        <NavbarDashboard />
      </div>
      <div className="flex overflow-y-hidden">
        <div className="absolute right-0 w-[85%]">
          <div className="h-screen">
            <div id="DashboardContent" className="flex flex-row">
              <div className="flex flex-row bg-gray-100 w-full h-screen pt-24">
                <div id="TableHeader" className="w-full px-4">
                  <div className="flex w-full justify-between items-center bg-white rounded-xl shadow-md p-4">
                    <img src={logoPelindo} alt="Logo Pelindo" className="h-6" />
                    <h1 className="text-xl poppins-semibold uppercase text-center lg:text-left tracking-widest">
                      Tabel Inventaris
                    </h1>
                    <button
                      onClick={handleExportExcel}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-xl"
                    >
                      Export Excel
                    </button>
                  </div>
                  <TableComponent
                    isUpdateModalOpen={isUpdateModalOpen}
                    openUpdateModal={openUpdateModal}
                    closeUpdateModal={closeUpdateModal}
                    openDetailModal={openDetailModal}
                    closeDetailModal={closeDetailModal}
                    editData={editData}
                    detailData={detailData}
                    isDetailModalOpen={isDetailModalOpen}
                    handleDelete={handleDelete}
                    handleFilter={handleFilter}
                    fetchData={fetchData}
                    records={records}
                    setRecords={setRecords}
                  />
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

export default InventoryTable;
