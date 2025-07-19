// File: src/pages/StockDetailPage.jsx
// This is the fully resolved version combining the widget layout and peer comparison logic.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useWatchlist } from '../contexts/WatchlistContext';
import MainStockChart from '../components/charts/MainStockChart';
import AnnouncementCard from '../components/shared/AnnouncementCard';
import PeerComparisonWidget from '../components/shared/PeerComparisonWidget';
import { getAllStocks, getPeerData } from '../services/api';

const StockDetailPage = () => {
  const { ticker } = useParams();
  const [stock, setStock] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [peerData, setPeerData] = useState([]);

  const { watchlist, addStock, removeStock } = useWatchlist();
  const isFollowed = stock ? watchlist.includes(stock.ticker.toUpperCase()) : false;

  useEffect(() => {
    const fetchStockData = async () => {
      setIsLoading(true);
      setPeerData([]);

      const allStocksPromise = getAllStocks();
      const peerDataPromise = getPeerData(ticker);

      const allStocks = await allStocksPromise;
      const currentStock = allStocks.find(s => s.ticker.toUpperCase() === ticker.toUpperCase());

      setStock(currentStock);
      setPeerData(await peerDataPromise);

      setIsLoading(false);
    };

    fetchStockData();
  }, [ticker]);

  const handleToggleFollow = () => {
    if (!stock) return;
    const stockTicker = stock.ticker.toUpperCase();
    if (isFollowed) {
      removeStock(stockTicker);
      toast.error(`Unfollowed ${stock.name}`);
    } else {
      addStock(stockTicker);
      toast.success(`Following ${stock.name}!`);
    }
  };

  if (isLoading) {
    return <p className="text-gray-400">Loading stock details...</p>;
  }

  if (!stock) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-white">Stock Not Found</h1>
        <p className="text-gray-400 mt-4">Could not find data for ticker: {ticker}</p>
      </div>
    );
  }

  const announcement = { id: 1, logo: stock.logo, name: stock.name, ticker: stock.ticker, summary: 'This is a placeholder announcement for this stock...', impact: 'Medium', timestamp: '3 days ago' };

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">{stock.name}</h1>
          <p className="text-gray-400">NSE: {stock.ticker}</p>
        </div>
        <button onClick={handleToggleFollow} className={`font-semibold rounded-md px-4 py-2 transition-colors ${isFollowed ? 'bg-gray-700 text-gray-300 hover:bg-red-800/50 hover:text-red-400' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
          {isFollowed ? 'Following' : 'Follow'}
        </button>
      </div>

      {/* Widget-Based Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Main Chart Widget - Spans all 3 columns */}
        <div className="lg:col-span-3 bg-[#161b22] border border-[#3036d] rounded-lg p-4 h-96">
          <MainStockChart />
        </div>

        {/* News & Announcements Widget - Spans 2 columns */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-white">News & Announcements</h3>
          <AnnouncementCard data={announcement} />
          <AnnouncementCard data={{...announcement, id: 2, summary: 'Another placeholder announcement to demonstrate the layout.'}} />
        </div>

        {/* Right-Side Widgets - Each spans 1 column */}
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#3036d] rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4">About</h3>
            <p className="text-sm text-gray-300">{stock.about}</p>
          </div>
          <div className="bg-[#161b22] border border-[#3036d] rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4">Key Statistics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300"><span>Market Cap</span> <span className="font-mono text-white">{stock.stats.marketCap}</span></div>
              <div className="flex justify-between text-gray-300"><span>P/E Ratio</span> <span className="font-mono text-white">{stock.stats.peRatio}</span></div>
              <div className="flex justify-between text-gray-300"><span>Dividend Yield</span> <span className="font-mono text-white">{stock.stats.divYield}</span></div>
            </div>
          </div>
          <PeerComparisonWidget peers={peerData} />
          <div className="bg-[#161b22] border border-[#3036d] rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4">AI Insights</h3>
            <p className="text-sm text-gray-400">Future AI-powered insights about this stock will appear here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetailPage;
