import React, { useState } from "react";
import NavigationBar from "../Components/Navbar";
import backgroundImage from "../assets/img/about-us.jpg";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div
      className="relative h-[100vh] w-[100vw] overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10">
        <NavigationBar />
      </div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4">
        <div className="text-left">
          <h1 className="poppins-semibold text-white text-3xl md:text-4xl uppercase font-bold mb-2">
            Menghubungkan Dunia{" "}
          </h1>
          <h2 className="poppins-semibold text-white text-2xl md:text-3xl uppercase font-bold mb-2">
            dengan Kepulauan Terbesar di Dunia
          </h2>
          <p className="poppins-regular text-white text-left text-sm md:text-base mb-6 px-4">
            PT Pelabuhan Indonesia I (Persero), PT Pelabuhan Indonesia II
            (Persero), PT Pelabuhan Indonesia III (Persero), dan PT Pelabuhan
            Indonesia IV (Persero) adalah perusahaan BUMN Non-Listed yang
            sahamnya 100% dimiliki oleh Kementerian BUMN selaku Pemegang Saham
            mewakili Negara Republik Indonesia.
            {showMore && (
              <>
                <br />
                <br />
                Kami memiliki misi untuk mengembangkan infrastruktur pelabuhan
                dan logistik di seluruh Indonesia, memfasilitasi perdagangan
                internasional, serta meningkatkan konektivitas antara
                pulau-pulau besar dan kecil. Dengan berbagai fasilitas dan
                layanan yang kami sediakan, kami berkomitmen untuk mendukung
                pertumbuhan ekonomi nasional dan regional.
              </>
            )}
          </p>
          <button
            onClick={handleToggle}
            className="poppins-semibold bg-[#EBB64D] text-black px-6 py-3 rounded-lg"
          >
            {showMore ? "Tutup" : "Selengkapnya"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
