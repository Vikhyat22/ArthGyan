import React, { createContext, useState, useContext } from 'react';

// 1. Create the context
const WatchlistContext = createContext();

// 2. Create the Provider component
// This component will wrap our entire app and provide the global state.
export const WatchlistProvider = ({ children }) => {
  // We use useState to hold the list of stock tickers in the watchlist.
  // We'll start with 'RELIANCE' in the list for demonstration.
  const [watchlist, setWatchlist] = useState(['RELIANCE']);

  const addStock = (ticker) => {
    // Add a stock to the list, but only if it's not already there
    if (!watchlist.includes(ticker)) {
      setWatchlist(prevWatchlist => [...prevWatchlist, ticker]);
    }
  };

  const removeStock = (ticker) => {
    // Remove a stock from the list
    setWatchlist(prevWatchlist => prevWatchlist.filter(item => item !== ticker));
  };

  // The 'value' object contains the state and functions we want to make available globally.
  const value = {
    watchlist,
    addStock,
    removeStock,
  };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};

// 3. Create a custom hook for easy access
// This makes it easier for components to use the context's values.
export const useWatchlist = () => {
  return useContext(WatchlistContext);
};