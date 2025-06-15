// src/pages/ResourcePage.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import resourcesData from '../data/resources.json';
const ResourcePage = () => {
  const navigate = useNavigate();
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setResources(resourcesData);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f13] text-gray-800 dark:text-gray-200 py-12 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-10">
          Educational Resources
        </h1>

        {/* All Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {resources.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-100 dark:bg-[#1c1c21] rounded-lg p-5 shadow hover:shadow-lg transition hover:scale-[1.02]"
            >
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Type: {item.type} | Category: {item.category}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                ⏱️ {item.readTime}
              </p>
              <br/>
            </a>
          ))}
          
        </div>
        <br/>
        <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
            >
              ⬅ Back to Home Page
            </button>
        
      </div>
      
    </div>
  );
};

export default ResourcePage;
