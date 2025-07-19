import React from 'react';

const PeerComparisonWidget = ({ peers }) => {
  // This is a placeholder component.
  // It will be fully built out by Developer 2.
  if (!peers || peers.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
      <h3 className="text-lg font-bold text-white mb-4">Peer Comparison</h3>
      <p className="text-sm text-gray-400">Peer data will be displayed here.</p>
    </div>
  );
};

export default PeerComparisonWidget;