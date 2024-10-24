import React from 'react';
import { Activity, Calendar, Settings, User, LogIn, Home, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-100">
      <nav className="w-64 bg-white shadow-md">
        <div className="p-4">
          <Logo />
        </div>
        <ul className="space-y-2 p-4">
          <li className={`flex items-center space-x-2 p-2 rounded ${isActive('/') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
            <Home size={20} />
            <Link to="/">Home</Link>
          </li>
          <li className={`flex items-center space-x-2 p-2 rounded ${isActive('/dashboard') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
            <Activity size={20} />
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={`flex items-center space-x-2 p-2 rounded ${isActive('/proposals') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
            <Calendar size={20} />
            <Link to="/proposals">Proposals</Link>
          </li>
          <li className={`flex items-center space-x-2 p-2 rounded ${isActive('/settings') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
            <Settings size={20} />
            <Link to="/settings">Settings</Link>
          </li>
          <li className={`flex items-center space-x-2 p-2 rounded ${isActive('/profile') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
            <User size={20} />
            <Link to="/profile">Profile</Link>
          </li>
          <li className={`flex items-center space-x-2 p-2 rounded ${isActive('/contact') ? 'bg-gray-200' : 'hover:bg-gray-200'}`}>
            <Mail size={20} />
            <Link to="/contact">Contact</Link>
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
        <Footer />
      </div>
    </div>
  );
};

export default Layout;