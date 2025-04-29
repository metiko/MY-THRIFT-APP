import { Link } from "react-router-dom"
import { FaChartLine, FaMoneyBillWave, FaUsers } from "react-icons/fa"
import DashboardLayout from "../components/DashboardLayout"

const Dashboard = () => {
  // Sample user data - replace with actual user data from your auth system
  const user = {
    name: "Alex Johnson",
    lastLogin: new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome back, {user.name.split(" ")[0]}!
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Last login: {user.lastLogin}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Quick Actions */}
            <Link to="/status" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition">
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

            <Link to="/payments" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition">
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

            <Link to="/groups" className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition">
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
                        {item === 1 && "Contribution received"}
                        {item === 2 && "Group invitation"}
                        {item === 3 && "Payment reminder"}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {item === 1 ? "Completed" : "Pending"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {item === 1 && "₦15,000"}
                          {item === 2 && "Savings Club A"}
                          {item === 3 && "Due in 3 days"}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>
                          {new Date(Date.now() - item * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
                <Link to="/activity" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  View all activity
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Dashboard
