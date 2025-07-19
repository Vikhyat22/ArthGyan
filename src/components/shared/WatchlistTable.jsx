import React, { useState, useMemo } from 'react'; // Import useState and useMemo
import { Link } from 'react-router-dom';
import MiniTrendChart from '../charts/MiniTrendChart';

// (The placeholderWatchlist data remains the same as before)
const placeholderWatchlist = [
    { logo: 'https://placehold.co/32x32/161b22/FFFFFF?text=R', name: 'Reliance Industries', ticker: 'RELIANCE', price: 2845.50, changePercent: '+1.14%', isPositive: true, marketCap: 19.5, chartData: [10, 20, 15, 25, 30, 28, 35] },
    { logo: 'https://placehold.co/32x32/161b22/FFFFFF?text=H', name: 'HDFC Bank', ticker: 'HDFCBANK', price: 1510.20, changePercent: '-1.04%', isPositive: false, marketCap: 12.5, chartData: [30, 25, 28, 20, 18, 22, 15] },
    { logo: 'https://placehold.co/32x32/161b22/FFFFFF?text=TCS', name: 'Tata Consultancy', ticker: 'TCS', price: 3850.75, changePercent: '+0.80%', isPositive: true, marketCap: 14.0, chartData: [20, 22, 25, 23, 28, 30, 32] },
];


const WatchlistTable = () => {
  // STEP 1: Add state to manage sorting configuration.
  const [sortConfig, setSortConfig] = useState({ key: 'marketCap', direction: 'descending' });

  // STEP 2: Create a function to handle clicks on table headers.
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // STEP 3: Use 'useMemo' to create a sorted list.
  // This ensures the sorting logic only runs when the data or sort config changes.
  const sortedItems = useMemo(() => {
    let sortableItems = [...placeholderWatchlist]; // Create a sortable copy
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  // Helper to show sort direction icon
  const getSortDirectionIcon = (name) => {
    if (sortConfig.key !== name) return null;
    return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[#30363d] text-sm text-gray-400">
            {/* STEP 4: Make headers clickable buttons */}
            <th className="p-4 font-medium"><button onClick={() => requestSort('name')}>Company{getSortDirectionIcon('name')}</button></th>
            <th className="p-4 font-medium"><button onClick={() => requestSort('price')}>Price{getSortDirectionIcon('price')}</button></th>
            <th className="p-4 font-medium">Change (24h)</th>
            <th className="p-4 font-medium">7D Trend</th>
            <th className="p-4 font-medium"><button onClick={() => requestSort('marketCap')}>Market Cap{getSortDirectionIcon('marketCap')}</button></th>
            <th className="p-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* STEP 5: Map over the NEW sortedItems variable */}
          {sortedItems.map((stock) => (
            <tr key={stock.ticker} className="border-b border-[#30363d] hover:bg-gray-800">
              <td className="p-4">
                <Link to={`/stock/${stock.ticker}`} className="flex items-center group">
                  <img src={stock.logo} alt={stock.name} className="w-8 h-8 rounded-full mr-4" />
                  <div>
                    <p className="font-bold text-white group-hover:underline">{stock.name}</p>
                    <p className="text-xs text-gray-400">{stock.ticker}</p>
                  </div>
                </Link>
              </td>
              <td className="p-4 font-mono text-white">₹{stock.price.toFixed(2)}</td>
              <td className={`p-4 font-mono ${stock.isPositive ? 'text-green-500' : 'text-red-500'}`}>{stock.changePercent}</td>
              <td className="p-4 w-32 h-16"><MiniTrendChart chartData={stock.chartData} isPositive={stock.isPositive} /></td>
              <td className="p-4 font-mono text-white">₹{stock.marketCap}T</td>
              <td className="p-4"><button className="text-xs text-red-500 hover:underline">Unfollow</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchlistTable;