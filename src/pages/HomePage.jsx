import React, { useState, useEffect } from 'react';
import FilterChips from '../components/shared/FilterChips';
import AnnouncementCard from '../components/shared/AnnouncementCard';
import AnnouncementModal from '../components/shared/AnnouncementModal';
import AnnouncementCardSkeleton from '../components/shared/AnnouncementCardSkeleton'; // STEP 1: Import the new skeleton component
import { getAnnouncements } from '../services/api';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setIsLoading(true); // Make sure loading is true at the start
      const data = await getAnnouncements();
      const dataWithCategory = data.map(item => ({...item, category: item.summary.includes('profit') ? 'Financial Results' : item.summary.includes('meeting') ? 'Board Meeting' : 'Acquisition' }));
      setAllAnnouncements(dataWithCategory);
      setIsLoading(false);
    };
    fetchAnnouncements();
  }, []);

  // Full implementation of the modal handler functions
  const handleOpenModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  const filteredAnnouncements = activeFilter === 'All' ? allAnnouncements : allAnnouncements.filter(announcement => announcement.category === activeFilter);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Home Feed</h1>
      <p className="text-gray-400 mb-6">Latest corporate announcements and market news.</p>
      <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* STEP 2: Update the conditional rendering logic */}
      {isLoading ? (
        <div className="space-y-4">
          {/* Render three skeleton cards while loading */}
          <AnnouncementCardSkeleton />
          <AnnouncementCardSkeleton />
          <AnnouncementCardSkeleton />
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <div key={announcement.id} onClick={() => handleOpenModal(announcement)}>
              <AnnouncementCard data={announcement} />
            </div>
          ))}
        </div>
      )}

      <AnnouncementModal isOpen={isModalOpen} onClose={handleCloseModal} announcement={selectedAnnouncement} />
    </div>
  );
};

export default HomePage;
