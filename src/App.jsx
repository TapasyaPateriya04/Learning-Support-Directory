import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutPage from './pages/AboutPage';
import ProviderDetails from './pages/providerDetails';
import ResourcePage from './pages/ResourcePage';
import Footer from './components/Footer';

function App() {
  const [searchTerm] = useState('');

  return (
    <div className="bg-white dark:bg-[#0f0f13] text-black dark:text-white min-h-screen transition-colors duration-300">
      

      {/* Route-based pages */}
      <Routes>
        <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
        <Route path="/providers/:id" element={<ProviderDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resources" element={<ResourcePage />} />
      </Routes>

      {/* Always Visible Footer */}
      <Footer />
    </div>
  );
}

export default App;
