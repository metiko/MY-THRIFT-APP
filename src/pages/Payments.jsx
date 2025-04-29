"use client"

import { useState } from "react"
import { FaMoneyBillWave, FaHistory, FaCalendarAlt, FaCheck } from "react-icons/fa"
import DashboardLayout from "../components/DashboardLayout"

const Payments = () => {
  const [activeTab, setActiveTab] = useState("make-payment")
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [selectedGroup, setSelectedGroup] = useState("savings-a")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sample payment history
  const paymentHistory = [
    { id: 1, date: "2023-07-15", amount: 15000, status: "Completed", method: "Card" },
    { id: 2, date: "2023-06-15", amount: 15000, status: "Completed", method: "Bank Transfer" },
    { id: 3, date: "2023-05-15", amount: 15000, status: "Completed", method: "Card" },
    { id: 4, date: "2023-04-15", amount: 15000, status: "Completed", method: "Card" },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!amount) return

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      alert(`Payment of ₦${Number.parseInt(amount).toLocaleString()} submitted successfully!`)
      setAmount("")
    }, 1500)
  }

  return (
    <DashboardLayout>
      <div>
        <div className="flex items-center mb-8">
          <FaMoneyBillWave className="text-3xl text-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Payments</h1>
        </div>

        <div className="mb-6">
          <div className="sm:hidden">
            <select
              id="tabs"
              name="tabs"
              className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="make-payment">Make Payment</option>
              <option value="payment-history">Payment History</option>
            </select>
          </div>
          <div className="hidden sm:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab("make-payment")}
                  className={`${
                    activeTab === "make-payment"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Make Payment
                </button>
                <button
                  onClick={() => setActiveTab("payment-history")}
                  className={`${
                    activeTab === "payment-history"
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Payment History
                </button>
              </nav>
            </div>
          </div>
        </div>

        {activeTab === "make-payment" ? (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Make a Contribution</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Make your thrift contribution for this period. All payments are secure and encrypted.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                      Amount (₦)
                    </label>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="amount"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter amount"
                        required
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="group" className="block text-sm font-medium text-gray-700">
                      Select Group
                    </label>
                    <div className="mt-1">
                      <select
                        id="group"
                        name="group"
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value)}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      >
                        <option value="savings-a">Savings Club A</option>
                        <option value="investment-b">Investment Group B</option>
                        <option value="emergency-c">Emergency Fund C</option>
                      </select>
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                    <div className="mt-2 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="card"
                          name="paymentMethod"
                          type="radio"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                          Card Payment
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="bank"
                          name="paymentMethod"
                          type="radio"
                          checked={paymentMethod === "bank"}
                          onChange={() => setPaymentMethod("bank")}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="bank" className="ml-3 block text-sm font-medium text-gray-700">
                          Bank Transfer
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="ussd"
                          name="paymentMethod"
                          type="radio"
                          checked={paymentMethod === "ussd"}
                          onChange={() => setPaymentMethod("ussd")}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                        <label htmlFor="ussd" className="ml-3 block text-sm font-medium text-gray-700">
                          USSD
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      "Make Payment"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Payment History</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                View your recent payment history and transaction status.
              </p>
            </div>
            <div className="bg-white overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {paymentHistory.map((payment) => (
                  <li key={payment.id}>
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="bg-green-100 p-2 rounded-full">
                            <FaCalendarAlt className="text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">₦{payment.amount.toLocaleString()}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(payment.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                            <FaCheck className="mr-1" /> {payment.status}
                          </span>
                          <span className="text-sm text-gray-500">{payment.method}</span>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-4 py-4 sm:px-6 border-t border-gray-200">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <FaHistory className="mr-2" /> View All Transactions
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}

export default Payments
