import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { WatchlistProvider } from './contexts/WatchlistContext';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import SearchPage from './pages/SearchPage';
import StockDetailPage from './pages/StockDetailPage';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#161b22',
            color: '#c9d1d9',
            border: '1px solid #3036d',
          },
        }}
      />
      <WatchlistProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/watchlist" element={<WatchlistPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/stock/:ticker" element={<StockDetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WatchlistProvider>
    </>
  );
}

export default App;

