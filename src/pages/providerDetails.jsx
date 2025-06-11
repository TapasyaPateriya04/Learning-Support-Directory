import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/providers.json';

function ProviderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const found = data.find((p) => p.id.toString() === id);
    setProvider(found);
  }, [id]);

  if (!provider) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 text-lg">🚫 Provider not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          ⬅ Back to List
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white py-8 px-6">
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
          {provider.name}
        </h1>
        <p className="text-gray-700 dark:text-gray-300">{provider.specialization}</p>
        <p className="text-gray-500 dark:text-gray-400">{provider.location}</p>
        <p className="text-yellow-500 font-medium mt-1">⭐ {provider.rating}</p>

        <hr className="my-4 border-gray-300 dark:border-gray-600" />

        <p className="text-sm leading-relaxed">{provider.longDescription}</p>

        <div className="mt-6 space-y-1">
          <p>📧 <span className="font-medium">{provider.contactEmail}</span></p>
          <p>📞 <span className="font-medium">{provider.phoneNumber}</span></p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          ⬅ Back to List
        </button>
      </div>
    </div>
  );
}

export default ProviderDetail;
