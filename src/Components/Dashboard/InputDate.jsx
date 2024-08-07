import React, { useState } from "react";
import { FiSquare } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="poppins-semibold text-lg">Item Date</h2>
        <div className="bg-[#EBB64D] p-2 rounded-2xl">
          <FiSquare className="text-black" />
        </div>
      </div>
      <div className="inline-block">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholderText="Input Date"
        />
      </div>
    </div>
  );
};

export default InputDate;
