import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import MiniTrendChart from '../charts/MiniTrendChart';
import { useWatchlist } from '../../contexts/WatchlistContext';
import toast from 'react-hot-toast';

const WatchlistTable = ({ stocks }) => {
  const { removeStock } = useWatchlist();
  const [sortConfig, setSortConfig] = useState({ key: 'marketCap', direction: 'descending' });

  const sortedItems = useMemo(() => {
    let sortableItems = [...stocks];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a.stats[sortConfig.key] < b.stats[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a.stats[sortConfig.key] > b.stats[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [stocks, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getSortDirectionIcon = (name) => {
    if (sortConfig.key !== name) return null;
    return sortConfig.direction === 'ascending' ? ' ▲' : ' ▼';
  };

  const handleUnfollow = (stock) => {
    removeStock(stock.ticker);
    toast.error(`Unfollowed ${stock.name}`);
  }

  if (stocks.length === 0) {
    return <p className="p-4 text-gray-400">Your watchlist is empty. Follow stocks to see them here.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[#30363d] text-sm text-gray-400">
            <th className="p-4 font-medium"><button onClick={() => requestSort('name')}>Company{getSortDirectionIcon('name')}</button></th>
            <th className="p-4 font-medium">Price</th>
            <th className="p-4 font-medium">Change (24h)</th>
            <th className="p-4 font-medium">7D Trend</th>
            <th className="p-4 font-medium"><button onClick={() => requestSort('marketCap')}>Market Cap{getSortDirectionIcon('marketCap')}</button></th>
            <th className="p-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
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
              <td className="p-4 font-mono text-white">₹{stock.price}</td>
              <td className={`p-4 font-mono ${stock.price > 2000 ? 'text-green-500' : 'text-red-500'}`}>
                {stock.price > 2000 ? '+1.14%' : '-1.04%'}
              </td>
              <td className="p-4 w-32 h-16"><MiniTrendChart chartData={[1,2,3,4,5]} isPositive={stock.price > 2000} /></td>
              <td className="p-4 font-mono text-white">{stock.stats.marketCap}</td>
              <td className="p-4">
                <button onClick={() => handleUnfollow(stock)} className="text-xs text-red-500 hover:underline">
                  Unfollow
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchlistTable;