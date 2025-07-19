import React, { useState, useEffect } from 'react';
import FilterChips from '../components/shared/FilterChips';
import AnnouncementCard from '../components/shared/AnnouncementCard';
import AnnouncementModal from '../components/shared/AnnouncementModal';
// We will use the api service you created in the last task
import { getAnnouncements } from '../services/api';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // STEP 1: Add state to keep track of the currently selected filter.
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const data = await getAnnouncements();
      // Add a 'category' to the placeholder data for filtering
      const dataWithCategory = data.map(item => ({
        ...item,
        category: item.summary.includes('profit') ? 'Financial Results' : item.summary.includes('meeting') ? 'Board Meeting' : 'Acquisition'
      }));
      setAllAnnouncements(dataWithCategory);
      setIsLoading(false);
    };
    fetchAnnouncements();
  }, []);

  const handleOpenModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  // STEP 2: Create a new variable that holds the filtered list.
  // This logic runs every time the component re-renders.
  const filteredAnnouncements = activeFilter === 'All'
    ? allAnnouncements
    : allAnnouncements.filter(announcement => announcement.category === activeFilter);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Home Feed</h1>
      <p className="text-gray-400 mb-6">Latest corporate announcements and market news.</p>

      {/* STEP 3: Pass the state and the function to update it down to the FilterChips component. */}
      <FilterChips
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {isLoading ? (
        <p className="text-gray-400">Loading announcements...</p>
      ) : (
        <div className="space-y-4">
          {/* STEP 4: Map over the NEW filteredAnnouncements variable instead of the full list. */}
          {filteredAnnouncements.map((announcement) => (
            <div key={announcement.id} onClick={() => handleOpenModal(announcement)}>
              <AnnouncementCard data={announcement} />
            </div>
          ))}
        </div>
      )}

      <AnnouncementModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        announcement={selectedAnnouncement}
      />
    </div>
  );
};

export default HomePage;
