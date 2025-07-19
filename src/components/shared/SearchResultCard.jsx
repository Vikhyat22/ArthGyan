import React from 'react';
import { Link } from 'react-router-dom';

const SearchResultCard = ({ stock }) => {
  return (
    <Link
      to={`/stock/${stock.ticker}`}
      className="block bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-blue-500 transition-colors duration-200"
    >
      <div className="flex items-center">
        <img src={stock.logo} alt={`${stock.name} logo`} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="font-bold text-white">{stock.name}</p>
          <p className="text-sm text-gray-400">{stock.ticker}</p>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;