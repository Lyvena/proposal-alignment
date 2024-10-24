import React from 'react';
import { Activity, Calendar, Settings, User, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Logo />
        </div>
        <ul className="space-y-2 p-4">
          <li className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
            <Activity size={20} />
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
            <Calendar size={20} />
            <Link to="/">Proposals</Link>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
            <Settings size={20} />
            <Link to="/">Settings</Link>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded">
            <User size={20} />
            <Link to="/">Profile</Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm p-4">
          <div className="flex justify-end">
            <Link to="/auth" className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
              <LogIn size={20} />
              <span>Sign In</span>
            </Link>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;