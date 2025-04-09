// src/pages/GroupManagement.js
import React, { useState } from 'react';

const GroupManagement = () => {
  const [groups, setGroups] = useState([
    { name: 'Group A', status: 'Pending Approval' },
    { name: 'Group B', status: 'Active' },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Group Management</h1>
      <div className="space-y-4">
        {groups.map((group, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{group.name}</h3>
            <p>Status: {group.status}</p>
            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Join Group</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupManagement;
