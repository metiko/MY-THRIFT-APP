import { Link } from "react-router-dom"
import { FaChartLine, FaMoneyBillWave, FaUserFriends } from "react-icons/fa"
import DashboardLayout from "../components/DashboardLayout"

const Status = () => {
  // Sample data - replace with actual data from your backend
  const userData = {
    name: "Alex Johnson",
    thriftProgress: 75,
    thriftGoal: 100000,
    currentBalance: 75000,
    pendingReferrals: 3,
    recentActivity: [
      { id: 1, type: "Contribution", amount: 15000, date: "2023-06-15", status: "Completed" },
      { id: 2, type: "Referral Bonus", amount: 5000, date: "2023-06-10", status: "Pending" },
      { id: 3, type: "Withdrawal", amount: 20000, date: "2023-06-05", status: "Completed" },
    ],
  }

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Status Dashboard</h1>
          <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
            Member since June 2022
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          {/* Thrift Progress Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <FaChartLine className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">Thrift Progress</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{userData.thriftProgress}%</div>
                    <div className="ml-2 text-sm font-medium text-gray-500">
                      of ₦{userData.thriftGoal.toLocaleString()} goal
                    </div>
                  </dd>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${userData.thriftProgress}%` }}
                  ></div>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to="/thrift-details"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>

          {/* Current Balance Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <FaMoneyBillWave className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">Current Balance</dt>
                  <dd className="text-2xl font-semibold text-gray-900">₦{userData.currentBalance.toLocaleString()}</dd>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to="/withdraw"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                >
                  Withdraw Funds
                </Link>
              </div>
            </div>
          </div>

          {/* Pending Referrals Card */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-500 rounded-md p-3">
                  <FaUserFriends className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">Pending Referrals</dt>
                  <dd className="text-2xl font-semibold text-gray-900">{userData.pendingReferrals}</dd>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to="/referrals"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none"
                >
                  Manage Referrals
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="bg-white overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {userData.recentActivity.map((activity) => (
                <li key={activity.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">{activity.type}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            activity.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {activity.status}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">₦{activity.amount.toLocaleString()}</p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>
                          {new Date(activity.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
            <Link to="/activity" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
              View all activity
            </Link>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Status
