import React, { useState } from 'react'; // Import useState
import FilterChips from '../components/shared/FilterChips';
import AnnouncementCard from '../components/shared/AnnouncementCard';
import AnnouncementModal from '../components/shared/AnnouncementModal'; // Import the new modal

const announcements = [
  { id: 1, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=R', name: 'Reliance Industries', ticker: 'RELIANCE', summary: 'Consolidated net profit rose 15% YoY to ₹18,549 crore. Revenue from operations grew by 12% to ₹2.3 lakh crore, driven by strong performance in Jio and Retail segments.', sentiment: 'Positive', timestamp: '2 hours ago' },
  { id: 2, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=TCS', name: 'Tata Consultancy', ticker: 'TCS', summary: 'Company revised its full-year revenue growth guidance downwards to 1-2.5% amidst macroeconomic uncertainties. Deal wins, however, remained strong at $2.1 billion.', sentiment: 'Negative', timestamp: '8 hours ago' },
  { id: 3, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=H', name: 'HDFC Bank', ticker: 'HDFCBANK', summary: 'Board meeting scheduled to consider fundraising up to ₹5,000 crore via issuance of non-convertible debentures (NCDs) for general corporate purposes.', sentiment: 'Neutral', timestamp: '1 day ago' },
];

const HomePage = () => {
  // STEP 1: Create state to manage the modal's visibility.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // STEP 2: Create state to hold the data of the announcement that was clicked.
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  // STEP 3: Create a function to handle opening the modal.
  const handleOpenModal = (announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  // STEP 4: Create a function to handle closing the modal.
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(null);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Home Feed</h1>
      <p className="text-gray-400 mb-6">Latest corporate announcements and market news.</p>

      <FilterChips />

      <div className="space-y-4">
        {announcements.map((announcement) => (
          // STEP 5: Pass the handleOpenModal function to each card.
          <div key={announcement.id} onClick={() => handleOpenModal(announcement)}>
            <AnnouncementCard data={announcement} />
          </div>
        ))}
      </div>

      {/* STEP 6: Render the modal and pass the necessary state and functions to it. */}
      <AnnouncementModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        announcement={selectedAnnouncement}
      />
    </div>
  );
};

export default HomePage;