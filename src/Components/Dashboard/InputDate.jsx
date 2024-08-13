import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({ onDateChange, selectedDate }) => {
  const [localDate, setLocalDate] = useState(selectedDate || null);

  useEffect(() => {
    setLocalDate(selectedDate);
  }, [selectedDate]);

  const handleChange = (date) => {
    setLocalDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
  };

  const placeholderText = localDate
    ? localDate.toLocaleDateString() // Format tanggal sesuai kebutuhan
    : "Input Date";

  return (
    <div className="w-full h-auto p-3 bg-white shadow-md rounded-2xl space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-sm poppins-semibold">Item Date</h2>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 poppins-regular text-sm text-center"
          placeholderText={placeholderText}
          style={{ width: "100%", height: "2.5rem" }} // Adjust width and height of the DatePicker input
        />
      </div>
    </div>
  );
};

export default InputDate;
