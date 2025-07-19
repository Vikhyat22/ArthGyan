import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import MainStockChart from '../components/charts/MainStockChart';
import AnnouncementCard from '../components/shared/AnnouncementCard';
import { getAllStocks } from '../services/api'; // Fetch data from the service

const StockDetailPage = () => {
  const { ticker } = useParams();
  const [stock, setStock] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = async () => {
      setIsLoading(true);
      const allStocks = await getAllStocks();
      const currentStock = allStocks.find(s => s.ticker.toUpperCase() === ticker.toUpperCase());
      setStock(currentStock);
      setIsLoading(false);
    };

    fetchStockData();
  }, [ticker]); // Re-run this effect if the ticker in the URL changes

  const handleFollow = () => {
    if (!stock) return;
    toast.success(`Following ${stock.name}!`);
  };

  if (isLoading) {
    return <p className="text-gray-400">Loading stock details...</p>; // Or a skeleton loader
  }

  if (!stock) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-white">Stock Not Found</h1>
        <p className="text-gray-400 mt-4">Could not find data for ticker: {ticker}</p>
      </div>
    );
  }

  const announcement = { logo: stock.logo, name: stock.name, ticker: stock.ticker, summary: 'This is a placeholder announcement for this stock...', sentiment: 'Neutral', timestamp: '3 days ago' };

  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">{stock.name}</h1>
          <p className="text-gray-400">NSE: {stock.ticker}</p>
        </div>
        <button
          onClick={handleFollow}
          className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700"
        >
          Follow
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 h-96">
            <MainStockChart />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">News & Announcements</h3>
            <div className="space-y-4">
              <AnnouncementCard data={announcement} />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4">About</h3>
            <p className="text-sm text-gray-300">{stock.about}</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4">Key Statistics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300"><span>Market Cap</span> <span className="font-mono text-white">{stock.stats.marketCap}</span></div>
              <div className="flex justify-between text-gray-300"><span>P/E Ratio</span> <span className="font-mono text-white">{stock.stats.peRatio}</span></div>
              <div className="flex justify-between text-gray-300"><span>Dividend Yield</span> <span className="font-mono text-white">{stock.stats.divYield}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetailPage;