// src/pages/Welcome.js
import React from 'react';
import { FaHome, FaChartLine, FaMoneyBillWave, FaUsers, FaBell, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Welcome = () => {
  // Sample user data - replace with actual user data from your auth system
  const user = {
    name: "Alex Johnson",
    lastLogin: new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    })
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation Header */}
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
                  to="/welcome" 
                  className="text-indigo-600 inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium"
                >
                  <FaHome className="mr-2" />
                  Home
                </Link>
                <Link 
                  to="/dashboard" 
                  className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                >
                  <FaChartLine className="mr-2" />
                  Status
                </Link>
                <Link 
                  to="/payments" 
                  className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                >
                  <FaMoneyBillWave className="mr-2" />
                  Payments
                </Link>
                <Link 
                  to="/groups" 
                  className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                >
                  <FaUsers className="mr-2" />
                  Groups
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <span className="sr-only">Notifications</span>
                <FaBell className="h-6 w-6" />
                <span className="absolute top-3 right-24 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <FaUserCircle className="h-8 w-8 text-gray-400" />
                    <span className="ml-2 text-sm font-medium text-gray-700">{user.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Welcome back, {user.name.split(' ')[0]}!
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Last login: {user.lastLogin}
            </p>
            
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Quick Actions */}
              <Link
                to="/dashboard"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                      <FaChartLine className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">View Your Status</h3>
                      <p className="mt-1 text-sm text-gray-500">Check your thrift contributions and progress</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/payments"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                      <FaMoneyBillWave className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">Make a Payment</h3>
                      <p className="mt-1 text-sm text-gray-500">Submit your thrift contribution</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link
                to="/groups"
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                      <FaUsers className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">Join a Group</h3>
                      <p className="mt-1 text-sm text-gray-500">Connect with other thrift participants</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Recent Activity Section */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900">Recent Activity</h2>
              <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
                <ul className="divide-y divide-gray-200">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {item === 1 && 'Contribution received'}
                          {item === 2 && 'Group invitation'}
                          {item === 3 && 'Payment reminder'}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {item === 1 ? 'Completed' : 'Pending'}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 sm:flex sm:justify-between">
                        <div className="sm:flex">
                          <p className="flex items-center text-sm text-gray-500">
                            {item === 1 && '₦15,000'}
                            {item === 2 && 'Savings Club A'}
                            {item === 3 && 'Due in 3 days'}
                          </p>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <p>
                            {new Date(Date.now() - (item * 24 * 60 * 60 * 1000)).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            })}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
                  <Link 
                    to="/activity" 
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View all activity
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2 space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} ThriftPlus. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;