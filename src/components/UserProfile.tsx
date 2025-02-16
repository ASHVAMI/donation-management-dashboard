import React, { useState } from 'react';
import { User, Settings, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface UserProfileProps {
  onLogout: () => void;
}

const UserProfile = ({ onLogout }: UserProfileProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = {
    name: "Prashant Shukla",
    email: "prashant@example.com",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
  };

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-3 focus:outline-none"
      >
        <span className="text-sm font-medium text-gray-700">{user.name}</span>
        <img
          src={user.avatar}
          alt={user.name}
          className="h-8 w-8 rounded-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => navigate('/settings')}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-4 w-4 mr-3" />
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;