// src/pages/Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Your Contributions</h3>
          <p>Progress: 75% of goal</p>
          <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">View Details</button>
        </div>
        {/* Repeat similar blocks for other cards */}
      </div>
    </div>
  );
};

export default Dashboard;
