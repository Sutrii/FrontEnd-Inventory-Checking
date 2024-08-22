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
    <div className="min-h-screen bg-[#d6eaf8] flex items-center justify-center">
      {data ? (
        <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex">
          {/* Bagian Informasi Barang */}
          <div className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-4 text-[#85c1e9] text-center">
              Informasi Barang
            </h1>
            <div className="space-y-2">
              {/* Kategori Barang */}
              <div>
                <p className="text-[#b2babb] text-sm font-semibold">
                  Kategori Barang
                </p>
                <p className="text-black text-lg font-regular">
                  {data.kategori_input}
                </p>
                <hr className="border-[#b2babb] border-t-2 my-2" />
              </div>

              {/* Tanggal Peminjaman */}
              {data.kategori_input === "Barang Pinjaman" && (
                <>
                  <div>
                    <p className="text-[#b2babb] text-sm font-semibold">
                      Tanggal Awal Peminjaman
                    </p>
                    <p className="text-black text-lg font-regular">
                      {data.tanggal_awal_pinjam}
                    </p>
                    <hr className="border-[#b2babb] border-t-2 my-2" />
                  </div>

                  <div>
                    <p className="text-[#b2babb] text-sm font-semibold">
                      Tanggal Akhir Peminjaman
                    </p>
                    <p className="text-black text-lg font-regular">
                      {data.tanggal_akhir_pinjam}
                    </p>
                    <hr className="border-[#b2babb] border-t-2 my-2" />
                  </div>
                </>
              )}

              {/* Nama Barang */}
              <div>
                <p className="text-[#b2babb] text-sm font-semibold">
                  Nama Barang
                </p>
                <p className="text-black text-lg font-regular">
                  {data.nama_barang}
                </p>
                <hr className="border-[#b2babb] border-t-2 my-2" />
              </div>

              {/* Tipe Barang */}
              <div>
                <p className="text-[#b2babb] text-sm font-semibold">
                  Tipe Barang
                </p>
                <p className="text-black text-lg font-regular">
                  {data.tipe_barang}
                </p>
                <hr className="border-[#b2babb] border-t-2 my-2" />
              </div>

              {/* Unit Kerja */}
              <div>
                <p className="text-[#b2babb] text-sm font-semibold">
                  Unit Kerja
                </p>
                <p className="text-black text-lg font-regular">
                  {data.work_unit}
                </p>
                <hr className="border-[#b2babb] border-t-2 my-2" />
              </div>

              {/* Lokasi */}
              <div>
                <p className="text-[#b2babb] text-sm font-semibold">Lokasi</p>
                <p className="text-black text-lg font-regular">{data.lokasi}</p>
                <hr className="border-[#b2babb] border-t-2 my-2" />
              </div>
            </div>
          </div>
          {/* Bagian Gambar */}
          <div className="flex-shrink-0 w-2/3 bg-[#85c1e9] flex items-center justify-center p-4">
            {data?.picture && (
              <img
                src={`http://localhost:8000/storage/pictures/${data.picture}`}
                alt={data.nama_barang}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ItemInfo;
