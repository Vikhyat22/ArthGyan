import React from 'react';
import MiniTrendChart from '../charts/MiniTrendChart'; // Import the new chart component

const placeholderWatchlist = [
  {
    logo: 'https://placehold.co/32x32/161b22/FFFFFF?text=R',
    name: 'Reliance Industries',
    ticker: 'RELIANCE',
    price: '₹2,845.50',
    changePercent: '+1.14%',
    isPositive: true,
    marketCap: '₹19.5T',
    chartData: [10, 20, 15, 25, 30, 28, 35], // Placeholder chart data
  },
  {
    logo: 'https://placehold.co/32x32/161b22/FFFFFF?text=H',
    name: 'HDFC Bank',
    ticker: 'HDFCBANK',
    price: '₹1,510.20',
    changePercent: '-1.04%',
    isPositive: false,
    marketCap: '₹12.5T',
    chartData: [30, 25, 28, 20, 18, 22, 15], // Placeholder chart data
  },
  {
    logo: 'https://placehold.co/32x32/161b22/FFFFFF?text=TCS',
    name: 'Tata Consultancy',
    ticker: 'TCS',
    price: '₹3,850.75',
    changePercent: '+0.80%',
    isPositive: true,
    marketCap: '₹14.0T',
    chartData: [20, 22, 25, 23, 28, 30, 32], // Placeholder chart data
  },
];

const WatchlistTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-[#30363d] text-sm text-gray-400">
            <th className="p-4 font-medium">Company</th>
            <th className="p-4 font-medium">Price</th>
            <th className="p-4 font-medium">Change (24h)</th>
            <th className="p-4 font-medium">7D Trend</th> {/* New Column Header */}
            <th className="p-4 font-medium">Market Cap</th>
            <th className="p-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {placeholderWatchlist.map((stock) => (
            <tr key={stock.ticker} className="border-b border-[#30363d] hover:bg-gray-800">
              <td className="p-4 flex items-center">
                <img src={stock.logo} alt={stock.name} className="w-8 h-8 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-white">{stock.name}</p>
                  <p className="text-xs text-gray-400">{stock.ticker}</p>
                </div>
              </td>
              <td className="p-4 font-mono text-white">{stock.price}</td>
              <td className={`p-4 font-mono ${stock.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {stock.changePercent}
              </td>
              <td className="p-4 w-32 h-16"> {/* New Column Cell */}
                <MiniTrendChart chartData={stock.chartData} isPositive={stock.isPositive} />
              </td>
              <td className="p-4 font-mono text-white">{stock.marketCap}</td>
              <td className="p-4">
                <button className="text-xs text-red-500 hover:underline">Unfollow</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchlistTable;