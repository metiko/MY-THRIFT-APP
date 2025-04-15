// src/pages/GroupManagement.js
import React, { useState } from 'react';
import { FaUsers, FaSearch, FaPlus, FaEllipsisV, FaCheck, FaClock, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GroupManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [groups, setGroups] = useState([
    { 
      id: 1,
      name: 'Savings Club A', 
      status: 'pending',
      members: 12,
      contributionAmount: 5000,
      schedule: 'Weekly',
      created: '2023-05-15',
      description: 'Long-term savings group for financial goals'
    },
    { 
      id: 2,
      name: 'Investment Group B', 
      status: 'active',
      members: 8,
      contributionAmount: 10000,
      schedule: 'Monthly',
      created: '2023-06-20',
      description: 'High-yield investment thrift group'
    },
    { 
      id: 3,
      name: 'Emergency Fund C', 
      status: 'pending',
      members: 5,
      contributionAmount: 3000,
      schedule: 'Bi-weekly',
      created: '2023-07-10',
      description: 'Group for building emergency funds'
    },
  ]);

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleJoinGroup = (groupId) => {
    setGroups(groups.map(group => 
      group.id === groupId ? { ...group, status: 'pending' } : group
    ));
    alert('Join request submitted for approval');
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <FaCheck className="mr-1" /> Active
          </span>
        );
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <FaClock className="mr-1" /> Pending
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <FaTimes className="mr-1" /> Inactive
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <FaUsers className="text-3xl text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">Group Management</h1>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search groups..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Link
              to="/groups/create"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FaPlus className="mr-2" /> Create New Group
            </Link>
          </div>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          {filteredGroups.length === 0 ? (
            <div className="text-center p-8">
              <FaUsers className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No groups found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm ? 'Try a different search term' : 'Create a new group to get started'}
              </p>
              <div className="mt-6">
                <Link
                  to="/groups/create"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FaPlus className="mr-2" /> New Group
                </Link>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {filteredGroups.map((group) => (
                <li key={group.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <FaUsers className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div className="ml-4">
                          <div className="flex items-center">
                            <h3 className="text-lg font-medium text-gray-900">{group.name}</h3>
                            <div className="ml-2">
                              {getStatusBadge(group.status)}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500">{group.description}</p>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex">
                        <div className="dropdown relative">
                          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                            <FaEllipsisV className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="sm:col-span-1">
                        <div className="text-sm font-medium text-gray-500">Members</div>
                        <div className="mt-1 text-sm text-gray-900">{group.members}</div>
                      </div>
                      <div className="sm:col-span-1">
                        <div className="text-sm font-medium text-gray-500">Contribution</div>
                        <div className="mt-1 text-sm text-gray-900">₦{group.contributionAmount.toLocaleString()}</div>
                      </div>
                      <div className="sm:col-span-1">
                        <div className="text-sm font-medium text-gray-500">Schedule</div>
                        <div className="mt-1 text-sm text-gray-900">{group.schedule}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end space-x-3">
                      {group.status === 'active' ? (
                        <Link
                          to={`/groups/${group.id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                          View Details
                        </Link>
                      ) : (
                        <button
                          onClick={() => handleJoinGroup(group.id)}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                          disabled={group.status === 'pending'}
                        >
                          {group.status === 'pending' ? 'Request Pending' : 'Join Group'}
                        </button>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default GroupManagement;