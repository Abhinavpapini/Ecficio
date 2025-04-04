"use client"

import { useState } from "react";
import { Calendar } from "lucide-react";

export default function CalendarWidget() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div className="p-4 border border-[#655b5e]/20 rounded-lg bg-[#030303] text-[#f1e8eb]">
      <div className="flex items-center space-x-2 mb-4">
        <Calendar className="h-6 w-6 text-[#d89b1d]" />
        <h3 className="text-lg font-bold">Event Calendar</h3>
      </div>
      <p className="text-sm text-[#655b5e] mb-4">
        Select a date to view events happening on that day.
      </p>
      <input
        type="date"
        className="w-full p-2 rounded bg-[#655b5e]/10 text-[#f1e8eb] border border-[#655b5e]/20"
        onChange={(e) => handleDateChange(new Date(e.target.value))}
      />
      {selectedDate && (
        <p className="mt-4 text-sm">
          Selected Date:{" "}
          <span className="font-bold text-[#d89b1d]">
            {selectedDate.toDateString()}
          </span>
        </p>
      )}
    </div>
  );
}
