import React from 'react';

const filters = ["All", "Financial Results", "Board Meeting", "Acquisition", "Dividends"];

// The component now receives props to know which filter is active and how to change it.
const FilterChips = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
      {filters.map((filter) => (
        <button
          key={filter}
          // When clicked, it calls the function passed down from the parent page.
          onClick={() => onFilterChange(filter)}
          className={`px-3 py-1 text-sm font-medium rounded-full whitespace-nowrap ${
            activeFilter === filter
              ? 'bg-blue-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterChips;
