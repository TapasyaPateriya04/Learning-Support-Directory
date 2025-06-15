import { useState, useEffect } from 'react';
import providersData from '../data/providers.json';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import EducationalTips from '../components/EducationalTips';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [providers, setProviders] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setProviders(providersData);
    };
    fetchData();
  }, []);

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProviders.length / itemsPerPage);
  const paginatedProviders = filteredProviders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="bg-white min-h-screen text-gray-900 dark:bg-[#0f0f13] dark:text-[#e2e2e2] transition-colors duration-300">
      {/*  Search term passed to Navbar */}
      <Navbar onSearch={setSearchTerm} />

      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
             Support Providers
          </h1>

          <div className="flex gap-3">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded text-sm font-medium border transition ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
              }`}
            >
              Grid View
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded text-sm font-medium border transition ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white'
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {/* Provider Cards */}
        <div
          className={`${
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'
              : 'flex flex-col gap-6'
          }`}
        >
          {paginatedProviders.map((provider) => (
            <div
              key={provider.id}
              onClick={() => navigate(`/providers/${provider.id}`)}
              className={`group cursor-pointer rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#1a1a1d] ${
                viewMode === 'list'
                  ? 'flex flex-col sm:flex-row p-4'
                  : 'h-80 flex flex-col justify-between'
              }`}
            >
              <div className={`${viewMode === 'list' ? 'w-full sm:w-3/4 pr-4' : 'p-6'}`}>
                <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 group-hover:underline">
                  {provider.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  📍 {provider.location}
                </p>
                <p className="text-sm text-yellow-500 mt-1">
                  ⭐ {provider.rating} / 5
                </p>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                  {provider.shortDescription || 'Specialized learning support services.'}
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {provider.specialization}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            ⬅ Previous
          </button>

          <span className="text-sm text-gray-700 dark:text-gray-300">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
          >
            Next ➡
          </button>
        </div>

        <EducationalTips />
      </div>
    </div>
  );
}

export default HomePage;
