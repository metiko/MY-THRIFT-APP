import { useNavigate } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";

const ErrorPage = ({ error }) => {
  const navigate = useNavigate();

  return (
    <div role="alert" className="flex flex-col gap-8 items-center justify-center h-screen w-full bg-indigo-50">
      <h1 className="font-bold text-5xl text-gray-800">Something went wrong</h1>
      <FaChartLine className="w-24 h-24 text-indigo-600 animate-pulse" />
      <pre className="text-2xl text-gray-700">{error?.message || "An unexpected error occurred"}</pre>
      <div className="flex gap-4">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Go Home
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;