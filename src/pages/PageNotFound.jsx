import { Link } from "react-router-dom";

export function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-12 rounded-lg shadow-xl max-w-md mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="text-xl font-semibold text-gray-600 mt-4">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-md text-gray-500 mt-2 mb-6">
          It might have been moved, or maybe it never existed.
        </p>

        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 hover:bg-indigo-700 transition-all duration-300"
        >
          Go back to Home Page
        </Link>
      </div>
    </div>
  );
}
