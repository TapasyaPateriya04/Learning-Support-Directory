// src/components/Footer.jsx

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#0f0f13] text-gray-600 dark:text-gray-400 text-sm py-6 px-6 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div>
          <p>&copy; {new Date().getFullYear()} HABOT Learning Support Project By TP. All rights reserved.</p>
          <p>Made with 💙 for inclusive education</p>
        </div>

        <button
          onClick={scrollToTop}
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          ⬆ Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
