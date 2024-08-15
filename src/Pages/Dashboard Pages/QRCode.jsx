import React from "react";
import QRCode from "qrcode.react";
import { useParams } from "react-router-dom";
import axios from "axios";

function QrCodePage() {
  const { id } = useParams(); // Mengambil ID dari URL
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/barang-masuk/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold mb-4">
        Scan untuk Mengetahui Informasi Barang
      </h1>
      {data ? (
        <QRCode
          value={`Nama Barang: ${data.nama_barang}\nTipe: ${data.tipe_barang}\nKeterangan: ${data.keterangan}\nUnit Kerja: ${data.work_unit}\nLokasi: ${data.lokasi}`}
          size={256} // Ukuran QR code dapat disesuaikan
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default QrCodePage;
