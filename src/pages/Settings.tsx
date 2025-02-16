import React, { useState } from 'react';
import { Bell, Lock, User, Globe } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    whatsappNotifications: false,
    twoFactorAuth: false,
    language: 'en',
  });

  const handleSave = () => {
    console.log('Settings saved:', settings);
    // Handle settings update
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-8">Settings</h1>

        <div className="space-y-8">
          {/* Profile Settings */}
          <div>
            <div className="flex items-center mb-4">
              <User className="h-5 w-5 text-red-500 mr-2" />
              <h2 className="text-lg font-medium">Profile Settings</h2>
            </div>
            <div className="ml-7 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Display Name
                </label>
                <input
                  type="text"
                  defaultValue="Prashant Shukla"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="prashant@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <div className="flex items-center mb-4">
              <Bell className="h-5 w-5 text-red-500 mr-2" />
              <h2 className="text-lg font-medium">Notification Settings</h2>
            </div>
            <div className="ml-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Email Notifications</h3>
                  <p className="text-sm text-gray-500">Receive updates via email</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailNotifications}
                    onChange={(e) =>
                      setSettings({ ...settings, emailNotifications: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">WhatsApp Notifications</h3>
                  <p className="text-sm text-gray-500">Receive updates via WhatsApp</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.whatsappNotifications}
                    onChange={(e) =>
                      setSettings({ ...settings, whatsappNotifications: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div>
            <div className="flex items-center mb-4">
              <Lock className="h-5 w-5 text-red-500 mr-2" />
              <h2 className="text-lg font-medium">Security Settings</h2>
            </div>
            <div className="ml-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-700">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Add an extra layer of security</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.twoFactorAuth}
                    onChange={(e) =>
                      setSettings({ ...settings, twoFactorAuth: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Language Settings */}
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-5 w-5 text-red-500 mr-2" />
              <h2 className="text-lg font-medium">Language Settings</h2>
            </div>
            <div className="ml-7">
              <select
                value={settings.language}
                onChange={(e) => setSettings({ ...settings, language: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="bn">Bengali</option>
                <option value="te">Telugu</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;