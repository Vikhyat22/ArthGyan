import React, { useState, useEffect } from 'react';
import FilterChips from '../components/shared/FilterChips';
import AnnouncementCard from '../components/shared/AnnouncementCard';
import AnnouncementModal from '../components/shared/AnnouncementModal';
import { getAnnouncements } from '../services/api'; // Import your new API function

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [announcements, setAnnouncements] = useState([]); // Start with an empty array
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  // useEffect runs after the component mounts
  useEffect(() => {
    // Create an async function inside to fetch data
    const fetchAnnouncements = async () => {
      const data = await getAnnouncements();
      setAnnouncements(data);
      setIsLoading(false); // Set loading to false after data is fetched
    };

    fetchAnnouncements();
  }, []); // The empty array [] means this effect runs only once

  const handleOpenModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Home Feed</h1>
      <p className="text-gray-400 mb-6">Latest corporate announcements and market news.</p>
      <FilterChips />

      {isLoading ? (
        <p className="text-gray-400">Loading announcements...</p>
      ) : (
        <div className="space-y-4">
          {announcements.map((announcement) => (
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