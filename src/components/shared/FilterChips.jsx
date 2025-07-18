import React, { useState } from 'react';

const filters = ["All", "Financial Results", "Board Meeting", "Acquisition", "Dividends"];

const FilterChips = () => {
  // 'useState' is a React Hook to manage which chip is active.
  // We'll set "All" as the default active chip.
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap ${
            activeFilter === filter
              ? 'bg-blue-600 text-white' // Style for the active chip
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600' // Style for inactive chips
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
