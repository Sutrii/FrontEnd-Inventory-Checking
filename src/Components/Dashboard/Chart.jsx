import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarChart = () => {
  const data = {
    labels: [
      "Barang Masuk",
      "Barang Keluar",
      "Barang Pinjaman",
      "Barang Rusak",
    ],
    datasets: [
      {
        label: "My Dataset",
        data: [11, 16, 7, 14], // Hanya 4 nilai data
        backgroundColor: [
          "rgb(158, 222, 115)",
          "rgb(100, 153, 233)",
          "rgb(255, 205, 86)",
          "rgb(240, 19, 77)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="bg-white w-full h-full p-6 rounded-3xl shadow-md">
      <div className="w-full h-full">
        <h2 className="text-lg font-semibold">Grafik Perbandingan Barang</h2>
        <PolarArea className="p-4" data={data} options={options} />
      </div>
    </div>
  );
};

export default PolarChart;
