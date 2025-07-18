import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import WatchlistPage from './pages/WatchlistPage';
import SearchPage from './pages/SearchPage';
import StockDetailPage from './pages/StockDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This special Route wraps all pages that need the sidebar and layout. */}
        {/* The actual page content will be rendered where <Outlet /> is placed. */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/stock/:ticker" element={<StockDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
