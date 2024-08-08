import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-full p-4 bg-white shadow-md rounded-3xl space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-base poppins-semibold">Item Date</h2>
      </div>
      <div className="inline-block w-full flex justify-center">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="border border-gray-300 rounded-md px-2 w-full py-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 poppins-regular text-sm text-center"
          placeholderText="Input Date"
        />
      </div>
    </div>
  );
};

export default InputDate;
