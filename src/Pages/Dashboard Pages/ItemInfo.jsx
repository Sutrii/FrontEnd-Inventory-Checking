import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ItemInfo() {
  const { id } = useParams(); // Mengambil ID dari URL
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/input-barang/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="container mt-4">
      {data ? (
        <div>
          <h1 className="text-xl font-bold mb-2">Informasi Barang</h1>
          <p>
            <strong>Nama Barang:</strong> {data.nama_barang}
          </p>
          <p>
            <strong>Tipe Barang:</strong> {data.tipe_barang}
          </p>
          <p>
            <strong>Keterangan:</strong> {data.keterangan}
          </p>
          <p>
            <strong>Unit Kerja:</strong> {data.work_unit}
          </p>
          <p>
            <strong>Lokasi:</strong> {data.lokasi}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemInfo;
