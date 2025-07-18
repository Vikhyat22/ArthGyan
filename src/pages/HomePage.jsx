import React from 'react';
import FilterChips from '../components/shared/FilterChips';
import AnnouncementCard from '../components/shared/AnnouncementCard';

// Placeholder data for the announcement cards.
// Later, this will come from your backend API.
const announcements = [
  {
    logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=R',
    name: 'Reliance Industries',
    ticker: 'RELIANCE',
    summary: 'Consolidated net profit rose 15% YoY to ₹18,549 crore. Revenue from operations grew by 12% to ₹2.3 lakh crore, driven by strong performance in Jio and Retail segments.',
    sentiment: 'Positive',
    timestamp: '2 hours ago',
  },
  {
    logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=TCS',
    name: 'Tata Consultancy',
    ticker: 'TCS',
    summary: 'Company revised its full-year revenue growth guidance downwards to 1-2.5% amidst macroeconomic uncertainties. Deal wins, however, remained strong at $2.1 billion.',
    sentiment: 'Negative',
    timestamp: '8 hours ago',
  },
  {
    logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=H',
    name: 'HDFC Bank',
    ticker: 'HDFCBANK',
    summary: 'Board meeting scheduled to consider fundraising up to ₹5,000 crore via issuance of non-convertible debentures (NCDs) for general corporate purposes.',
    sentiment: 'Neutral',
    timestamp: '1 day ago',
  },
];

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-2">Home Feed</h1>
      <p className="text-gray-400 mb-6">Latest corporate announcements and market news.</p>

      <FilterChips />

      <div className="space-y-4">
        {/* We loop through the placeholder data and render a card for each item */}
        {announcements.map((announcement, index) => (
          <AnnouncementCard key={index} data={announcement} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
