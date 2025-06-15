import { useState } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
import ProviderDetails from './pages/providerDetails';
import ResourcePage from './pages/ResourcePage';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';


function App() {
  const [searchTerm] = useState('');
  const location = useLocation();

  // Determine if current path is the 404 page
  const isNotFoundPage = location.pathname === '/404' || location.pathname === '/not-found';

  return (
    <div className="bg-white dark:bg-[#0f0f13] text-black dark:text-white min-h-screen transition-colors duration-300">
      

      <Routes>
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcePage />} />
        <Route path="/providers/:id" element={<ProviderDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Render Footer on all pages except the 404 page */}
      {!isNotFoundPage && <Footer />}
    </div>
  );
}

export default App;
