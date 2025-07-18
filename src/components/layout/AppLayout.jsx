import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import Sidebar from './Sidebar';
import RightPanel from './RightPanel';

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-[#0d1117] text-gray-200">
      <Sidebar />
      <main className="flex-grow p-6 overflow-y-auto">
        <Outlet /> {/* The current page's content will be injected here */}
      </main>
      <RightPanel />
    </div>
  );
};

export default AppLayout;
