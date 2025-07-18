import React from 'react';

// This component will receive 'data' as a prop to display.
const AnnouncementCard = ({ data }) => {
  const isPositive = data.sentiment === 'Positive';
  const isNegative = data.sentiment === 'Negative';

  const sentimentClasses = isPositive
    ? 'bg-green-900/50 text-green-400'
    : isNegative
    ? 'bg-red-900/50 text-red-400'
    : 'bg-gray-700 text-gray-400';

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 cursor-pointer hover:border-blue-500 transition-colors duration-200">
      <div className="flex items-center mb-3">
        <img src={data.logo} alt={`${data.name} logo`} className="w-10 h-10 rounded-full mr-4" />
        <div>
          <p className="font-bold text-white">{data.name}</p>
          <p className="text-xs text-gray-400">{data.ticker}</p>
        </div>
      </div>
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        {data.summary}
      </p>
      <div className="flex justify-between items-center text-xs">
        <span className={`px-2 py-1 rounded-md font-semibold ${sentimentClasses}`}>
          {data.sentiment}
        </span>
        <span className="text-gray-500">{data.timestamp}</span>
      </div>
    </div>
  );
};

export default AnnouncementCard;