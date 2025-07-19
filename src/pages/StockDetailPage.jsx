import React from 'react';
import { useParams } from 'react-router-dom'; // STEP 1: Import the useParams hook
import MainStockChart from '../components/charts/MainStockChart';
import AnnouncementCard from '../components/shared/AnnouncementCard';

// This data will eventually come from an API. For now, we define it here.
const allStocks = [
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=R', name: 'Reliance Industries', ticker: 'RELIANCE', about: 'Reliance Industries Limited is an Indian multinational conglomerate company...', stats: { marketCap: '₹19.5T', peRatio: '28.5', divYield: '0.5%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=TCS', name: 'Tata Consultancy', ticker: 'TCS', about: 'Tata Consultancy Services is an Indian multinational IT services and consulting company...', stats: { marketCap: '₹14.0T', peRatio: '32.1', divYield: '1.2%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=H', name: 'HDFC Bank', ticker: 'HDFCBANK', about: 'HDFC Bank Limited is an Indian banking and financial services company...', stats: { marketCap: '₹12.5T', peRatio: '20.3', divYield: '1.0%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=I', name: 'Infosys', ticker: 'INFY', about: 'Infosys Limited is an Indian multinational IT company...', stats: { marketCap: '₹6.3T', peRatio: '25.8', divYield: '1.8%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=W', name: 'Wipro', ticker: 'WIPRO', about: 'Wipro Limited is an Indian multinational corporation that provides IT, consulting and business process services.', stats: { marketCap: '₹2.5T', peRatio: '21.0', divYield: '1.5%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=ITC', name: 'ITC Limited', ticker: 'ITC', about: 'ITC Limited is an Indian conglomerate company with businesses spanning FMCG, Hotels, Paperboards and Packaging...', stats: { marketCap: '₹5.4T', peRatio: '26.0', divYield: '2.8%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=SBIN', name: 'State Bank of India', ticker: 'SBIN', about: 'State Bank of India is an Indian multinational public sector bank and financial services statutory body.', stats: { marketCap: '₹5.1T', peRatio: '10.5', divYield: '1.9%' } },
];

const StockDetailPage = () => {
  // STEP 2: Use the hook to get the URL parameters.
  // The `:ticker` in the App.jsx route corresponds to the `ticker` variable here.
  const { ticker } = useParams();

  // STEP 3: Find the correct stock from our data array using the ticker from the URL.
  const stock = allStocks.find(s => s.ticker.toUpperCase() === ticker.toUpperCase());

  // STEP 4: Handle the case where the stock is not found.
  if (!stock) {
    return (
      <div>
        <h1 className="text-3xl font-bold text-white">Stock Not Found</h1>
        <p className="text-gray-400 mt-4">Could not find data for ticker: {ticker}</p>
      </div>
    );
  }

  // Placeholder for related announcements
  const announcement = { logo: stock.logo, name: stock.name, ticker: stock.ticker, summary: 'This is a placeholder announcement for this stock...', sentiment: 'Neutral', timestamp: '3 days ago' };

  return (
    <div>
      {/* STEP 5: Use the data from the 'stock' object we found. */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">{stock.name}</h1>
          <p className="text-gray-400">NSE: {stock.ticker}</p>
        </div>
        <button className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-700">
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