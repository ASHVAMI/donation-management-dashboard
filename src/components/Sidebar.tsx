import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Receipt, GraduationCap, Star, MessageSquare, HelpCircle, Settings, LogOut } from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar = ({ onLogout }: SidebarProps) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Receipt, label: 'Transactions', path: '/transactions' },
    { icon: GraduationCap, label: 'Learning Modules', path: '/learning' },
    { icon: Star, label: 'Rewards', path: '/rewards' },
    { icon: MessageSquare, label: 'Feedback', path: '/feedback' },
    { icon: HelpCircle, label: 'FAQ', path: '/faq' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img src="/nayepankh-logo.svg" alt="NayePankh Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-800">NayePankh</span>
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm font-medium text-gray-400 mb-4">General</div>
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  'flex items-center px-4 py-2 text-sm font-medium rounded-lg',
                  isActive
                    ? 'bg-red-500 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                )
              }
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-8 pt-4 border-t border-gray-200">
          <button 
            onClick={onLogout}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-lg w-full"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;