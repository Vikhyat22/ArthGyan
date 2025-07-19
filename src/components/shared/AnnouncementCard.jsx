import React from 'react';
import { RevenueIcon, ProfitIcon, EarningIcon } from './Icons';

const AnnouncementCard = ({ data }) => {
  const impactStyles = {
    High: 'bg-red-900/50 text-red-400 border border-red-500/50',
    Medium: 'bg-yellow-900/50 text-yellow-400 border border-yellow-500/50',
    Low: 'bg-gray-700 text-gray-400 border border-gray-600',
  };

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors duration-200">
      {/* Header Section */}
      <div className="flex items-center mb-4">
        <img src={data.logo} alt={`${data.name} logo`} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="font-bold text-white">{data.name}</p>
          <p className="text-xs text-gray-400">{data.ticker}</p>
        </div>
      </div>

      {/* Summary Section */}
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        {data.summary}
      </p>

      {/* Key Takeaways Section (NEW) */}
      {data.keyTakeaways && (
        <div className="border-t border-dashed border-gray-700 my-4 pt-4 space-y-2">
          <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Key Takeaways</h4>
          {data.keyTakeaways.map((item, index) => (
            <div key={index} className="flex items-center text-sm">
              <span className="mr-2">{item.icon}</span>
              <span className="text-gray-300">{item.label}:</span>
              <span className="font-mono text-white ml-auto">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer Section */}
      <div className="flex justify-between items-center text-xs pt-4 border-t border-gray-700">
        <span className={`px-2 py-1 rounded-md font-semibold ${impactStyles[data.impact]}`}>
          Impact: {data.impact}
        </span>
        <span className="text-gray-500">{data.timestamp}</span>
      </div>
    </div>
  );
};

export default AnnouncementCard;
