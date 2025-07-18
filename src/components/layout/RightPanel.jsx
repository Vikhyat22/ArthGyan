// File: src/components/layout/RightPanel.jsx
import React from 'react';
import MiniTrendChart from '../charts/MiniTrendChart'; // Step 1: Import the chart component

// Step 2: Create a data structure to hold stock info, including chart data
const placeholderWatchlist = [
  {
    ticker: 'RELIANCE',
    price: '₹2,845.50',
    changePercent: '+1.14%',
    isPositive: true,
    chartData: [10, 20, 15, 25, 30, 28, 35], // 7-day data for the chart
  },
  {
    ticker: 'HDFCBANK',
    price: '₹1,510.20',
    changePercent: '-1.04%',
    isPositive: false,
    chartData: [30, 25, 28, 20, 18, 22, 15], // 7-day data for the chart
  },
];


const RightPanel = () => {
    return (
        <aside className="w-72 flex-shrink-0 bg-[#161b22] border-l border-[#30363d] p-4 hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-4">My Watchlist</h3>
            <div className="space-y-4">
                {/* Step 3: Map over the data to render each stock item dynamically */}
                {placeholderWatchlist.map((stock) => (
                    <div key={stock.ticker} className="flex justify-between items-center">
                        {/* Left section for stock name and price */}
                        <div>
                            <p className="font-semibold text-sm text-white">{stock.ticker}</p>
                            <p className="text-xs text-gray-400">{stock.price}</p>
                        </div>

                        {/* Middle section for the mini chart */}
                        <div className="w-24 h-10">
                           <MiniTrendChart chartData={stock.chartData} isPositive={stock.isPositive} />
                        </div>

                        {/* Right section for the percentage change */}
                        <p className={`text-sm font-mono ${stock.isPositive ? 'text-green-500' : 'text-red-500'}`}>
                            {stock.changePercent}
                        </p>
                    </div>
                ))}
            </div>
        </aside>
    );
}

export default RightPanel;
