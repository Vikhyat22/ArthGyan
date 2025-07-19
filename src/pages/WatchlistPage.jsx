import React, { useState, useEffect } from 'react';
import { useWatchlist } from '../contexts/WatchlistContext';
import { getAllStocks } from '../services/api';
import WatchlistTable from '../components/shared/WatchlistTable';

const WatchlistPage = () => {
  const { watchlist } = useWatchlist();
  const [allStocks, setAllStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      setIsLoading(true);
      const data = await getAllStocks();
      setAllStocks(data);
      setIsLoading(false);
    };
    fetchStocks();
  }, []);

  const watchlistStocks = allStocks.filter(stock => watchlist.includes(stock.ticker.toUpperCase()));

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">My Watchlist</h1>
      <div className="bg-[#161b22] border border-[#30363d] rounded-lg">
        {isLoading ? <p className="p-4 text-gray-400">Loading watchlist...</p> : <WatchlistTable stocks={watchlistStocks} />}
      </div>
    </div>
  );
};

export default WatchlistPage;