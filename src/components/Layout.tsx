import React, { useState } from 'react';
import { Activity, Calendar, Settings, User, LogIn, Home, Mail, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Footer from './Footer';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: <Home size={20} />, label: 'Home' },
    { path: '/dashboard', icon: <Activity size={20} />, label: 'Dashboard' },
    { path: '/proposals', icon: <Calendar size={20} />, label: 'Proposals' },
    { path: '/settings', icon: <Settings size={20} />, label: 'Settings' },
    { path: '/profile', icon: <User size={20} />, label: 'Profile' },
    { path: '/contact', icon: <Mail size={20} />, label: 'Contact' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Sidebar */}
      <nav className={cn(
        "fixed inset-y-0 left-0 transform bg-white shadow-lg w-64 transition-transform duration-200 ease-in-out md:translate-x-0 z-40",
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6">
          <Logo />
        </div>
        <ul className="space-y-2 p-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={cn(
                  "flex items-center space-x-2 p-3 rounded-lg transition-colors",
                  isActive(item.path)
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-gray-100 text-gray-700"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        <header className="bg-white shadow-sm p-4 sticky top-0 z-30">
          <div className="flex justify-end">
            <Link 
              to="/auth" 
              className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
            >
              <LogIn size={20} />
              <span>Sign In</span>
            </Link>
          </div>
        </header>
        <main className="flex-1 p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;