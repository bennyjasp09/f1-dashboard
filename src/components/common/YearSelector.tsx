import React from 'react';

interface YearSelectorProps {
  selectedYear: number;
  onChange: (year: number) => void;
}

const YearSelector = ({ selectedYear, onChange }: YearSelectorProps) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1949 }, (_, i) => currentYear - i);

  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="year" className="text-sm font-medium text-gray-700">
        Season:
      </label>
      <select
        id="year"
        value={selectedYear}
        onChange={(e) => onChange(Number(e.target.value))}
        className="rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default YearSelector;