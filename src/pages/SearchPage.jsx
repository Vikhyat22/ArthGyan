import React from 'react';
import SearchInput from '../components/shared/SearchInput';
import SearchResultCard from '../components/shared/SearchResultCard';

// Placeholder data for the search results.
// Later, this will be dynamic based on what the user types.
const searchResults = [
  {
    logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=I',
    name: 'Infosys',
    ticker: 'INFY',
  },
  {
    logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=W',
    name: 'Wipro',
    ticker: 'WIPRO',
  },
  {
    logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=ITC',
    name: 'ITC Limited',
    ticker: 'ITC',
  },
];

const SearchPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Search Stocks</h1>
      <div className="mb-8">
        <SearchInput />
      </div>

      <h2 className="text-xl font-bold text-white mb-4">Results</h2>
      <div className="space-y-3">
        {/* We loop through the placeholder data and render a card for each result */}
        {searchResults.map((stock) => (
          <SearchResultCard key={stock.ticker} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;