import React, { useState, useEffect } from 'react';
import FilterChips from '../components/shared/FilterChips';
import AnnouncementCard from '../components/shared/AnnouncementCard';
import AnnouncementModal from '../components/shared/AnnouncementModal';
import AnnouncementCardSkeleton from '../components/shared/AnnouncementCardSkeleton';
import { getAnnouncements } from '../services/api';
import { RevenueIcon, ProfitIcon } from '../components/shared/Icons';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [allAnnouncements, setAllAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setIsLoading(true);
      const data = await getAnnouncements();
      const announcements = [
        {
          id: 1, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=R', name: 'Reliance Industries', ticker: 'RELIANCE',
          summary: 'Consolidated net profit rose 15% YoY to ₹18,549 crore. Revenue from operations grew by 12% to ₹2.3 lakh crore, driven by strong performance in Jio and Retail segments.',
          impact: 'High', // New field
          timestamp: '2 hours ago',
          keyTakeaways: [ // New field
            { icon: <RevenueIcon />, label: 'Revenue', value: '₹2.3L Cr (+12%)' },
            { icon: <ProfitIcon />, label: 'Net Profit', value: '₹18.5k Cr (+15%)' },
          ]
        },
        {
          id: 2, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=TCS', name: 'Tata Consultancy', ticker: 'TCS',
          summary: 'Company revised its full-year revenue growth guidance downwards to 1-2.5% amidst macroeconomic uncertainties. Deal wins, however, remained strong at $2.1 billion.',
          impact: 'Medium', // New field
          timestamp: '8 hours ago',
          keyTakeaways: [
            { icon: <RevenueIcon />, label: 'Guidance', value: '1-2.5%' },
          ]
        },
        {
          id: 3, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=H', name: 'HDFC Bank', ticker: 'HDFCBANK',
          summary: 'Board meeting scheduled to consider fundraising up to ₹5,000 crore via issuance of non-convertible debentures (NCDs) for general corporate purposes.',
          impact: 'Low', // New field
          timestamp: '1 day ago',
        },
      ];
      const dataWithEnhancements = data.map(item => {
        let impact = 'Low';
        let keyTakeaways = [];
        if (item.summary.includes('profit')) {
          impact = 'High';
          keyTakeaways.push({ icon: <RevenueIcon />, label: 'Revenue', value: '₹2.3L Cr (+12%)' });
          keyTakeaways.push({ icon: <ProfitIcon />, label: 'Net Profit', value: '₹18.5k Cr (+15%)' });
        } else if (item.summary.includes('guidance')) {
          impact = 'Medium';
          keyTakeaways.push({ icon: <RevenueIcon />, label: 'Guidance', value: '1-2.5%' });
        }
        return {
          ...item,
          category: item.summary.includes('profit') ? 'Financial Results' : item.summary.includes('meeting') ? 'Board Meeting' : 'Acquisition',
          impact,
          keyTakeaways
        };
      });
      setAllAnnouncements(dataWithEnhancements);
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

  const filteredAnnouncements = activeFilter === 'All'
    ? allAnnouncements
    : allAnnouncements.filter(announcement => announcement.category === activeFilter);

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Home Feed</h1>
      <p className="text-gray-400 mb-6">Latest corporate announcements and market news.</p>
      <FilterChips activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {isLoading ? (
        <div className="space-y-4">
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

      <AnnouncementModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        announcement={selectedAnnouncement}
      />
    </div>
  );
};

export default HomePage;
