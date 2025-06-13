import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import HabotLogo2 from '../assets/HabotLogo2.png'; // ✅ import the logo

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
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white shadow-md px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 transition-colors duration-300">
      <div
        onClick={handleLogoClick}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          src={HabotLogo2}
          alt="Habot Logo"
          className="w-20 h-20 object-contain"
/>
        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
          HABOT Learning Support
        </span>
      </div>

      <div className="flex items-center w-full sm:w-auto gap-2">
        <input
          type="text"
          placeholder="Search by name or specialization..."
          className="w-full sm:w-80 border rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-700"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
