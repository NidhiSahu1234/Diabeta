import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-red-500">404</h1>

      <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-600 mt-2 mb-6">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
