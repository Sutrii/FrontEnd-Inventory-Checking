import React, { useState, useEffect } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

// Dummy data for the table
const dummyData = [
  {
    id: 1,
    namaBarang: "Barang A",
    tipe: "Tipe 1",
    kualitas: "Baik",
    tanggal: "2024-08-01",
    sn: "SN123",
    jumlah: 10,
    satuan: "Pcs",
    keterangan: "Keterangan A",
  },
  {
    id: 2,
    namaBarang: "Barang B",
    tipe: "Tipe 2",
    kualitas: "Sedang",
    tanggal: "2024-08-02",
    sn: "SN124",
    jumlah: 5,
    satuan: "Pcs",
    keterangan: "Keterangan B",
  },
  // Add more dummy data as needed
];

const TblBarangMasuk = () => {
  const [data, setData] = useState(dummyData);
  const [sortConfig, setSortConfig] = useState({
    key: "namaBarang",
    direction: "ascending",
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Simulate fetching data
    setData(dummyData);
  }, []);

  const handleSort = (key) => {
    const direction =
      sortConfig.direction === "ascending" ? "descending" : "ascending";
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "ascending" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter(
    (item) =>
      item.namaBarang.toLowerCase().includes(search.toLowerCase()) ||
      item.tipe.toLowerCase().includes(search.toLowerCase()) ||
      item.kualitas.toLowerCase().includes(search.toLowerCase()) ||
      item.sn.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div
        className="w-full h-full table-responsive bg-white p-4 rounded-lg shadow-md"
        style={{ overflowY: "auto" }}
      >
        <label htmlFor="entries" className="mr-2 text-gray-600">
          Show:
        </label>
        <select
          id="entries"
          value={entries}
          onChange={(e) => setEntries(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-xl"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <label htmlFor="entries" className="mr-2 text-gray-600">
          Entries
        </label>

        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[15%] p-2 border border-gray-300 rounded-xl mb-4"
          />
        </div>

        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("id")}
              >
                No
              </th>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("namaBarang")}
              >
                Nama Barang
              </th>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("tipe")}
              >
                Tipe
              </th>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("kualitas")}
              >
                Kualitas
              </th>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("tanggal")}
              >
                Tanggal
              </th>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("sn")}
              >
                S/N
              </th>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("jumlah")}
              >
                Jumlah
              </th>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("satuan")}
              >
                Satuan
              </th>
              <th
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSort("keterangan")}
              >
                Keterangan
              </th>
              <th className="p-2 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className="p-2 border-b">{item.id}</td>
                <td className="p-2 border-b">{item.namaBarang}</td>
                <td className="p-2 border-b">{item.tipe}</td>
                <td className="p-2 border-b">{item.kualitas}</td>
                <td className="p-2 border-b">{item.tanggal}</td>
                <td className="p-2 border-b">{item.sn}</td>
                <td className="p-2 border-b">{item.jumlah}</td>
                <td className="p-2 border-b">{item.satuan}</td>
                <td className="p-2 border-b">{item.keterangan}</td>
                <td className="p-2 border-b flex space-x-2 justify-center">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEye />
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TblBarangMasuk;
