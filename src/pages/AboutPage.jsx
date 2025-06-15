// src/pages/AboutPage.jsx


import React from 'react';
import { useNavigate } from 'react-router-dom';
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#0f0f13] text-gray-800 dark:text-gray-200 py-12 px-6 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6 text-center">
            About HABOT Learning Support
          </h1>

        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
          At HABOT, we believe that every child deserves the opportunity to thrive — regardless of their learning challenges. Our platform is designed to make it easier for parents to find trusted, specialized learning support providers tailored to the needs of their children.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
          From dyslexia support to ADHD coaching and autism spectrum interventions, HABOT connects families with the help they need — thoughtfully, efficiently, and compassionately.
        </p>

        <div className="border-l-4 border-blue-400 pl-4 text-md italic text-gray-600 dark:text-gray-400 mb-6">
          “Inclusive education is not a privilege. It's a right.”
        </div>

        <p className="text-md leading-relaxed text-gray-600 dark:text-gray-400">
          This project was built as a simplified module to demonstrate user-friendly interfaces, responsive design, and accessible features that can scale into a real-world platform.
        </p>
        <br />
        <button
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded transition"
            >
              ⬅ Back to Home Page
            </button>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
