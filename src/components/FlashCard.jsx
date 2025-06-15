import React from 'react';

const FlashCard = ({ title, content, image }) => {
  return (
    <div className="w-72 h-64 perspective group">
      <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 bg-white dark:bg-[#29292c] text-gray-800 dark:text-gray-200 rounded-xl overflow-hidden shadow-md p-5 z-10 backface-hidden">
          <div className="text-blue-700 dark:text-[#32a6ff] font-semibold text-lg mb-2">
            {title}
          </div>
          <p className="text-sm text-gray-700 dark:text-[#99999d]">{content}</p>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gray-100 dark:bg-[#18181b] rounded-xl overflow-hidden shadow-md transform rotate-y-180 backface-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
