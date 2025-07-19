import React, { useState, useEffect } from 'react';
import { useWatchlist } from '../../contexts/WatchlistContext';
import { getAllStocks } from '../../services/api';
import { Link } from 'react-router-dom';

const RightPanel = () => {
    const { watchlist } = useWatchlist();
    const [allStocks, setAllStocks] = useState([]);

    useEffect(() => {
        const fetchStocks = async () => {
            const data = await getAllStocks();
            setAllStocks(data);
        };
        fetchStocks();
    }, []);

    const watchlistStocks = allStocks.filter(stock => watchlist.includes(stock.ticker.toUpperCase()));

    return (
        <aside className="w-72 flex-shrink-0 bg-[#161b22] border-l border-[#30363d] p-4 hidden lg:block">
            <h3 className="text-lg font-bold text-white mb-4">My Watchlist</h3>
            {watchlistStocks.length > 0 ? (
                <div className="space-y-4">
                    {watchlistStocks.map(stock => (
                        <Link to={`/stock/${stock.ticker}`} key={stock.ticker} className="flex justify-between items-center group">
                            <div>
                                <p className="font-semibold text-sm text-white group-hover:underline">{stock.ticker}</p>
                                <p className="text-xs text-gray-400">{stock.name}</p>
                            </div>
                            <p className={`text-sm font-mono ${stock.price > 2000 ? 'text-green-500' : 'text-red-500'}`}>
                                {stock.price > 2000 ? '+1.14%' : '-1.04%'}
                            </p>
                        </Link>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-gray-400">Your watchlist is empty.</p>
            )}
        </aside>
    );
}

export default RightPanel;
