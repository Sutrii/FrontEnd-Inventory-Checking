import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faCog } from "@fortawesome/free-solid-svg-icons";

const NavbarDashboard = () => {
  return (
    <div id="NavbarParent" className="w-full h-16 bg-white p-3">
      <div
        id="InsideParent"
        className="flex w-full h-full justify-between items-center"
      >
        <div
          id="TitleSection"
          className="flex items-center w-full sm:w-[45%] h-full pl-3"
        >
          <span className="uppercase poppins-semibold text-lg sm:text-xl tracking-widest">
            Teknologi Informasi SPMT
          </span>
        </div>
        <div
          id="IconSection"
          className="flex items-center space-x-3 ml-auto w-auto h-full"
        >
          <div className="bg-[#EBB64D] px-3 py-2 rounded-4">
            <FontAwesomeIcon
              icon={faEdit}
              className="text-black cursor-pointer text-sm sm:text-base"
            />
          </div>
          <div className="bg-[#EBB64D] px-3 py-2 rounded-4">
            <FontAwesomeIcon
              icon={faCog}
              className="text-black cursor-pointer text-sm sm:text-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarDashboard;
