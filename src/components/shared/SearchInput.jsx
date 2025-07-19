import React from 'react';

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);


const SearchInput = ({ value, onChange }) => {
  return (
    <div className="relative w-full max-w-lg">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search by company or ticker..."
        className="w-full bg-[#161b22] border border-[#30363d] rounded-md py-3 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value} // The input's value is controlled by the state from the parent page.
        onChange={onChange} // When the user types, it calls the function passed from the parent.
      />
    </div>
  );
};

export default SearchInput;