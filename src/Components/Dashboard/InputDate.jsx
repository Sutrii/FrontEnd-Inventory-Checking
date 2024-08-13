import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const InputDate = ({ onDateChange, selectedDate }) => {
  const [localDate, setLocalDate] = useState(selectedDate || null);

  useEffect(() => {
    setLocalDate(selectedDate);
  }, [selectedDate]);

  const handleChange = (date) => {
    setLocalDate(date);
    console.log("Date before formatting:", date);
    if (onDateChange) {
      const formattedDate = date ? format(date, "yyyy-MM-dd") : "";
      console.log("Formatted Date:", formattedDate);
      onDateChange(formattedDate);
    }
  };

  // Format placeholder sesuai dengan format yang diinginkan
  const placeholderText = localDate
    ? format(localDate, "MM/dd/yyyy") // Format tanggal sesuai kebutuhan
    : "Input Date";

  return (
    <div className="w-full h-auto p-3 bg-white shadow-md rounded-2xl space-y-3">
      <div className="flex justify-between items-center">
        <h2 className="text-sm poppins-semibold">Item Date</h2>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <DatePicker
          selected={localDate}
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
