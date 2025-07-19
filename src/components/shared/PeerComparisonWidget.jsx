
import React from 'react';
import { Link } from 'react-router-dom';

const PeerComparisonWidget = ({ peers }) => {
  if (!peers || peers.length === 0) {
    // Don't render the widget if there's no peer data
    return null;
  }

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
      <h3 className="text-lg font-bold text-white mb-4">Peer Comparison</h3>
      <div className="space-y-3">
        {peers.map((peer) => (
          <Link
            to={`/stock/${peer.ticker}`}
            key={peer.ticker}
            className="block p-2 rounded-md hover:bg-gray-800"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-sm text-white">{peer.name}</p>
              <p className="font-mono text-sm text-white">{peer.stats.marketCap}</p>
            </div>
            <div className="flex justify-between items-center text-xs text-gray-400 mt-1">
              <span>{peer.ticker}</span>
              <span>Mkt Cap</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PeerComparisonWidget;