import { useNavigate, Link } from 'react-router-dom'; 
import { useState } from 'react';
import HabotLogo2 from '../assets/HabotLogo2.png';

function Navbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#0f0f13] border-b border-gray-200 dark:border-gray-800 shadow-md backdrop-blur transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        
        {/* Logo + Title */}
        <div onClick={handleLogoClick} className="flex items-center gap-3 cursor-pointer">
          <img
            src={HabotLogo2}
            alt="Habot Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400 tracking-tight">
            HABOT Learning Support
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/about"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            to="/resources"
            className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            Resources
          </Link>
        </div>

        {/* Search Input */}
        <div className="flex items-center w-full sm:w-auto gap-2">
          <input
            type="text"
            placeholder="🔍 Search by name or specialization..."
            className="w-full sm:w-80 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
