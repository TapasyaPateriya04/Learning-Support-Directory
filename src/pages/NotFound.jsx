import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0f0f13] text-center px-6 py-20 text-gray-800 dark:text-gray-200">
      <h1 className="text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">404</h1>
      <p className="text-xl font-medium mb-2">Page Not Found</p>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-400">
        The page you are looking for might have been moved or doesn't exist.
      </p>
      <Link
        to="/"
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
