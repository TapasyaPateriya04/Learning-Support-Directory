import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data/providers.json';
import Navbar from '../components/navbar'; // import the Navbar

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
      <>
        <Navbar /> {/* show Navbar here too */}
        <div className="min-h-screen bg-white dark:bg-[#0f0f13] text-gray-800 dark:text-white flex flex-col items-center justify-center px-6 py-12 transition-colors duration-300">
          <p className="text-red-500 text-lg font-medium">🚫 Provider not found</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            ⬅ Back to List
          </button>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f13] text-gray-800 dark:text-[#e2e2e2] transition-colors duration-300">
      <Navbar /> {/* include Navbar at the top */}
      <div className="px-4 py-10 max-w-3xl mx-auto">
        <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl bg-white dark:bg-[#18181b] p-8">

          {/* Glow Bar */}
          <div className="absolute left-0 top-5 bottom-5 w-1 bg-gradient-to-b from-[#2eadff] via-[#3d83ff] to-[#7e61ff] rounded-sm" />

          {/* Provider Info */}
          <h1 className="text-3xl font-bold text-blue-700 dark:text-[#32a6ff] mb-3">
            {provider.name}
          </h1>

          <div className="mb-4 space-y-1">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              🧠 <span className="font-medium">{provider.specialization}</span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              📍 <span className="font-medium">{provider.location}</span>
            </p>
            <p className="text-sm text-yellow-500">
              ⭐ <span className="font-medium">{provider.rating}</span> / 5
            </p>
          </div>

          <hr className="my-5 border-gray-300 dark:border-gray-600" />

          <p className="text-sm leading-relaxed mb-6 text-gray-800 dark:text-gray-300">
            {provider.longDescription}
          </p>

          <div className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
            <p>📧 <span className="font-medium">{provider.contactEmail}</span></p>
            <p>📞 <span className="font-medium">{provider.phoneNumber}</span></p>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
            >
              ⬅ Back to List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderDetail;
