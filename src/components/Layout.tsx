import React from 'react';
import { Activity, Calendar, Settings, User } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold">AI-PGF</h1>
        </div>
        <ul className="space-y-2 p-4">
          <li className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
            <Activity size={20} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
            <Calendar size={20} />
            <span>Proposals</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
            <Settings size={20} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
            <User size={20} />
            <span>Profile</span>
          </li>
        </ul>
      </nav>
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;