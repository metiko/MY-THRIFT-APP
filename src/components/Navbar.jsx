import { Link, useLocation } from "react-router-dom"
import { FaHome, FaChartLine, FaMoneyBillWave, FaUsers, FaBell, FaUserCircle } from "react-icons/fa"

const Navbar = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FaChartLine className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">ThriftPlus</span>
            </div>
            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <Link
                to="/dashboard"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  path === "/dashboard"
                    ? "text-indigo-600 border-indigo-500"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent"
                }`}
              >
                <FaHome className="mr-2" />
                Home
              </Link>
              <Link
                to="/status"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  path === "/status"
                    ? "text-indigo-600 border-indigo-500"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent"
                }`}
              >
                <FaChartLine className="mr-2" />
                Status
              </Link>
              <Link
                to="/payments"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  path === "/payments"
                    ? "text-indigo-600 border-indigo-500"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent"
                }`}
              >
                <FaMoneyBillWave className="mr-2" />
                Payments
              </Link>
              <Link
                to="/groups"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  path === "/groups"
                    ? "text-indigo-600 border-indigo-500"
                    : "text-gray-500 hover:text-gray-700 hover:border-gray-300 border-transparent"
                }`}
              >
                <FaUsers className="mr-2" />
                Groups
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none relative">
              <span className="sr-only">Notifications</span>
              <FaBell className="h-6 w-6" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="ml-4 flex items-center md:ml-6">
              <div className="ml-3 relative">
                <div className="flex items-center">
                  <FaUserCircle className="h-8 w-8 text-gray-400" />
                  <span className="ml-2 text-sm font-medium text-gray-700">User Name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
