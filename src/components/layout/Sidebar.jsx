import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink instead of <a>

// Icons remain the same
const HomeIcon = () => <span>🏠</span>;
const WatchlistIcon = () => <span>⭐</span>;
const SearchIcon = () => <span>🔍</span>;
const LogoutIcon = () => <span>👤</span>;

const Sidebar = () => {
  // This helper function tells NavLink how to style itself based on whether it's active
  const getNavLinkClass = ({ isActive }) => {
    const baseClasses = 'flex items-center p-2 text-base font-normal rounded-lg';
    if (isActive) {
      return `${baseClasses} bg-gray-700 text-white`; // Style for the active link
    }
    return `${baseClasses} text-gray-400 hover:bg-gray-700 hover:text-white`; // Style for inactive links
  };

  return (
    <aside className="w-64 flex-shrink-0 bg-[#161b22] border-r border-[#30363d] flex flex-col p-4">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white">AlphaTribe</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          <li>
            <NavLink to="/" className={getNavLinkClass}>
              <HomeIcon />
              <span className="ml-3">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/watchlist" className={getNavLinkClass}>
              <WatchlistIcon />
              <span className="ml-3">Watchlist</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className={getNavLinkClass}>
              <SearchIcon />
              <span className="ml-3">Search</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <a href="#" className="flex items-center p-2 text-base font-normal rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
            <LogoutIcon />
            <span className="ml-3">Logout</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;