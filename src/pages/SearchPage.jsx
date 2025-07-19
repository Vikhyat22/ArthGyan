import React, { useState, useEffect } from 'react'; // Import useState and useEffect from React
import SearchInput from '../components/shared/SearchInput';
import SearchResultCard from '../components/shared/SearchResultCard';

// Let's imagine this is the full list of all stocks coming from our backend API.
const allStocks = [
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=R', name: 'Reliance Industries', ticker: 'RELIANCE' },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=TCS', name: 'Tata Consultancy', ticker: 'TCS' },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=H', name: 'HDFC Bank', ticker: 'HDFCBANK' },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=I', name: 'Infosys', ticker: 'INFY' },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=W', name: 'Wipro', ticker: 'WIPRO' },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=ITC', name: 'ITC Limited', ticker: 'ITC' },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=SBIN', name: 'State Bank of India', ticker: 'SBIN' },
];

const SearchPage = () => {
  // STEP 1: Create state to hold the user's search query.
  // It starts as an empty string.
  const [searchQuery, setSearchQuery] = useState('');

  // STEP 2: Create state to hold the list of stocks that match the search.
  // It starts as an empty array.
  const [filteredResults, setFilteredResults] = useState([]);

  // STEP 3: Use the 'useEffect' Hook.
  // This code will run automatically every time the `searchQuery` state changes.
  useEffect(() => {
    if (searchQuery.trim() === '') {
      // If the search bar is empty, show no results.
      setFilteredResults([]);
      return;
    }

    // Filter the `allStocks` list based on the searchQuery.
    const results = allStocks.filter(stock =>
      stock.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stock.ticker.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Update the state with the new list of filtered results.
    setFilteredResults(results);

  }, [searchQuery]); // The [searchQuery] part tells useEffect to only run when searchQuery changes.


  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Search Stocks</h1>
      <div className="mb-8">
        {/* We pass the current state and the function to update it to our SearchInput component */}
        <SearchInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h2 className="text-xl font-bold text-white mb-4">Results</h2>
      <div className="space-y-3">
        {/* Now, we map over the DYNAMIC filteredResults state instead of the static list */}
        {searchQuery && filteredResults.length > 0 && (
          filteredResults.map((stock) => (
            <SearchResultCard key={stock.ticker} stock={stock} />
          ))
        )}

        {/* Show a message if the search bar has text but no results are found */}
        {searchQuery && filteredResults.length === 0 && (
          <p className="text-gray-400">No results found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
