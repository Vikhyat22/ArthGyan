import React from 'react';

const AnnouncementCardSkeleton = () => {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
      <div className="animate-pulse flex space-x-4">
        {/* Logo Placeholder */}
        <div className="rounded-full bg-gray-700 h-10 w-10"></div>
        <div className="flex-1 space-y-3 py-1">
          {/* Title Placeholder */}
          <div className="h-2 bg-gray-700 rounded"></div>
          {/* Subtitle Placeholder */}
          <div className="h-2 bg-gray-700 rounded w-5/6"></div>
        </div>
      </div>
      <div className="animate-pulse space-y-3 mt-4">
        {/* Summary Text Placeholders */}
        <div className="h-2 bg-gray-700 rounded"></div>
        <div className="h-2 bg-gray-700 rounded"></div>
        <div className="h-2 bg-gray-700 rounded w-4/5"></div>
      </div>
      <div className="animate-pulse flex justify-between items-center mt-4">
        {/* Tag and Timestamp Placeholders */}
        <div className="h-4 bg-gray-700 rounded w-20"></div>
        <div className="h-2 bg-gray-700 rounded w-16"></div>
      </div>
    </div>
  );
};

export default AnnouncementCardSkeleton;
