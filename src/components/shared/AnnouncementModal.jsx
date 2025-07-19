import React from 'react';

// This component receives three "props":
// 1. `isOpen`: A boolean to determine if the modal should be visible.
// 2. `onClose`: A function to call when the user wants to close the modal.
// 3. `announcement`: The data object for the selected announcement.
const AnnouncementModal = ({ isOpen, onClose, announcement }) => {
  // If the modal isn't open, or if there's no announcement data, render nothing.
  if (!isOpen || !announcement) {
    return null;
  }

  return (
    // This is the semi-transparent background overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose} // Allow closing by clicking the background
    >
      {/* This is the modal content itself */}
      <div
        className="bg-[#161b22] border border-[#30363d] rounded-lg shadow-xl w-full max-w-2xl flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#30363d]">
          <h3 className="text-xl font-bold text-white">{announcement.name} - Q2 Results</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-bold text-white mb-2">AI Summary</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{announcement.summary}</p>
          </div>

          <div className="border-t border-[#30363d] pt-6">
            <h4 className="font-bold text-white mb-2">Ask AI</h4>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Ask about this report..."
                className="flex-grow bg-[#0d1117] border border-[#30363d] rounded-md p-2 text-white focus:outline-none"
              />
              <button className="bg-blue-600 text-white font-semibold rounded-md px-4 py-2">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;