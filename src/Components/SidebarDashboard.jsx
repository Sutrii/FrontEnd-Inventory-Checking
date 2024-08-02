import React from "react";

const SidebarDashboard = () => {
  return (
    <div
      id="NavbarParent"
      className="w-full h-screen bg-white border border-black p-3"
    >
      <div id="InsideParent" className="flex w-full h-full">
        <div
          id="TitleSection"
          className="flex align-items-center w-[45%] h-full pl-1"
        >
          <div className="flex">
            <span className="poppins-medium text-lg">
              SPMT INVENTORY CHECKING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDashboard;
