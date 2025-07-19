// File: src/services/api.js

// All placeholder data is now centralized in this file.
const allStocks = [
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=R', name: 'Reliance Industries', ticker: 'RELIANCE', about: 'Reliance Industries Limited is an Indian multinational conglomerate company...', stats: { marketCap: '₹19.5T', peRatio: '28.5', divYield: '0.5%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=TCS', name: 'Tata Consultancy', ticker: 'TCS', about: 'Tata Consultancy Services is an Indian multinational IT services and consulting company...', stats: { marketCap: '₹14.0T', peRatio: '32.1', divYield: '1.2%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=H', name: 'HDFC Bank', ticker: 'HDFCBANK', about: 'HDFC Bank Limited is an Indian banking and financial services company...', stats: { marketCap: '₹12.5T', peRatio: '20.3', divYield: '1.0%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=I', name: 'Infosys', ticker: 'INFY', about: 'Infosys Limited is an Indian multinational IT company...', stats: { marketCap: '₹6.3T', peRatio: '25.8', divYield: '1.8%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=W', name: 'Wipro', ticker: 'WIPRO', about: 'Wipro Limited is an Indian multinational corporation that provides IT, consulting and business process services.', stats: { marketCap: '₹2.5T', peRatio: '21.0', divYield: '1.5%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=ITC', name: 'ITC Limited', ticker: 'ITC', about: 'ITC Limited is an Indian conglomerate company with businesses spanning FMCG, Hotels, Paperboards and Packaging...', stats: { marketCap: '₹5.4T', peRatio: '26.0', divYield: '2.8%' } },
  { logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=SBIN', name: 'State Bank of India', ticker: 'SBIN', about: 'State Bank of India is an Indian multinational public sector bank and financial services statutory body.', stats: { marketCap: '₹5.1T', peRatio: '10.5', divYield: '1.9%' } },
];

const announcements = [
  { id: 1, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=R', name: 'Reliance Industries', ticker: 'RELIANCE', summary: 'Consolidated net profit rose 15% YoY to ₹18,549 crore. Revenue from operations grew by 12% to ₹2.3 lakh crore, driven by strong performance in Jio and Retail segments.', sentiment: 'Positive', timestamp: '2 hours ago' },
  { id: 2, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=TCS', name: 'Tata Consultancy', ticker: 'TCS', summary: 'Company revised its full-year revenue growth guidance downwards to 1-2.5% amidst macroeconomic uncertainties. Deal wins, however, remained strong at $2.1 billion.', sentiment: 'Negative', timestamp: '8 hours ago' },
  { id: 3, logo: 'https://placehold.co/40x40/161b22/FFFFFF?text=H', name: 'HDFC Bank', ticker: 'HDFCBANK', summary: 'Board meeting scheduled to consider fundraising up to ₹5,000 crore via issuance of non-convertible debentures (NCDs) for general corporate purposes.', sentiment: 'Neutral', timestamp: '1 day ago' },
];

const peerData = {
  RELIANCE: [
    { name: 'IOCL', ticker: 'IOCL', stats: { marketCap: '₹1.5T', peRatio: '5.3' } },
    { name: 'BPCL', ticker: 'BPCL', stats: { marketCap: '₹1.3T', peRatio: '4.8' } },
  ],
  TCS: [
    { name: 'Infosys', ticker: 'INFY', stats: { marketCap: '₹6.3T', peRatio: '25.8' } },
    { name: 'Wipro', ticker: 'WIPRO', stats: { marketCap: '₹2.5T', peRatio: '21.0' } },
  ],
  HDFCBANK: [
    { name: 'ICICI Bank', ticker: 'ICICIBANK', stats: { marketCap: '₹7.8T', peRatio: '18.5' } },
    { name: 'SBI', ticker: 'SBIN', stats: { marketCap: '₹5.1T', peRatio: '10.5' } },
  ],
};

// We export functions that return the data.
// Wrapping in Promise.resolve() simulates a real network request that takes time.
export const getAnnouncements = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(announcements), 500); // Simulate 0.5 second delay
  });
};

export const getAllStocks = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(allStocks), 500); // Simulate 0.5 second delay
  });
};

export const getPeerData = (ticker) => {
  return new Promise(resolve => {
    setTimeout(() => {
      // Find the peer data for the given ticker, or return an empty array if none exists
      resolve(peerData[ticker.toUpperCase()] || []);
    }, 300); // Simulate a short delay
  });
};
