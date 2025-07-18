import React from 'react';

const RightPanel = () => {
    return (
        <aside className="w-72 flex-shrink-0 bg-[#161b22] border-l border-[#30363d] p-4 hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-4">My Watchlist</h3>
            <div className="space-y-4">
                {/* Placeholder Watchlist Item 1 */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-sm text-white">RELIANCE</p>
                        <p className="text-xs text-gray-400">₹2,845.50</p>
                    </div>
                    <p className="text-sm font-mono text-green-500">+1.14%</p>
                </div>
                 {/* Placeholder Watchlist Item 2 */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold text-sm text-white">HDFCBANK</p>
                        <p className="text-xs text-gray-400">₹1,510.20</p>
                    </div>
                    <p className="text-sm font-mono text-red-500">-1.04%</p>
                </div>
            </div>
        </aside>
    );
}

export default RightPanel;