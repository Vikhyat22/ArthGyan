import React from 'react';
import MainStockChart from '../components/charts/MainStockChart';
import AnnouncementCard from '../components/shared/AnnouncementCard'; // Reuse Dev 1's component

// Placeholder data
const stock = { name: 'Reliance Industries', ticker: 'RELIANCE' };
const announcement = {
    logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=R',
    name: 'Reliance Industries', ticker: 'RELIANCE',
    summary: 'Consolidated net profit rose 15% YoY to ₹18,549 crore. Revenue from operations grew by 12%...',
    sentiment: 'Positive', timestamp: '2 hours ago',
};

const StockDetailPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">{stock.name}</h1>
          <p className="text-gray-400">NSE: {stock.ticker}</p>
        </div>
        <button className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700">
          Follow
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
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

        {/* Right Column */}
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4">About</h3>
            <p className="text-sm text-gray-300">
              Reliance Industries Limited is an Indian multinational conglomerate company, headquartered in Mumbai. It has diverse businesses including energy, petrochemicals, natural gas, retail, and telecommunications.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
            <h3 className="text-lg font-bold text-white mb-4">Key Statistics</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-300"><span>Market Cap</span> <span className="font-mono text-white">₹19.5T</span></div>
              <div className="flex justify-between text-gray-300"><span>P/E Ratio</span> <span className="font-mono text-white">28.5</span></div>
              <div className="flex justify-between text-gray-300"><span>Dividend Yield</span> <span className="font-mono text-white">0.5%</span></div>
              <div className="flex justify-between text-gray-300"><span>52 Week High</span> <span className="font-mono text-white">₹3024.90</span></div>
              <div className="flex justify-between text-gray-300"><span>52 Week Low</span> <span className="font-mono text-white">₹2220.30</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetailPage;
