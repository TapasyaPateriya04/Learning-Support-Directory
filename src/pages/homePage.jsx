import { useState, useEffect } from 'react';
import providersData from '../data/providers.json';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [providers, setProviders] = useState([]);
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

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <Navbar onSearch={setSearchTerm} />

      <div className="p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mt-4 mb-6 text-center text-blue-700 dark:text-blue-400">
          Browse Learning Support Providers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              onClick={() => navigate(`/providers/${provider.id}`)}
              className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition"
            >
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">{provider.name}</h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">{provider.specialization}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{provider.location}</p>
              <p className="mt-2 text-yellow-500 font-medium">⭐ {provider.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
