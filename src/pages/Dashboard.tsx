import React from 'react';
import { Share2, Copy, TrendingUp, Users, Target, Award } from 'lucide-react';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const userName = "Prashant Shukla";
  const referralCode = "prs7432";
  const goalAchieved = 10;
  const totalGoal = 30000;

  const handleCopyLink = () => {
    const donationLink = `${window.location.origin}/donate/${referralCode}`;
    navigator.clipboard.writeText(donationLink);
    toast.success('Donation link copied to clipboard!');
  };

  const handleShareWhatsApp = () => {
    const donationLink = `${window.location.origin}/donate/${referralCode}`;
    const message = `Hi, I am raising funds for NayePankh Foundation. Please support me by donating through this link ${donationLink} and make a difference!`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const stats = [
    { icon: TrendingUp, label: 'Total Donations', value: '₹25,000' },
    { icon: Users, label: 'Total Donors', value: '15' },
    { icon: Target, label: 'Goal Progress', value: '35%' },
    { icon: Award, label: 'Achievement Level', value: 'Silver' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="relative h-80 rounded-xl overflow-hidden mb-8">
        <img
          src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
          alt="Children Learning"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome back, {userName}!</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              Your efforts are making a real difference. Every donation helps provide education and support to underprivileged children.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <stat.icon className="h-6 w-6 text-red-500" />
              <span className="text-sm font-medium text-gray-500">{stat.label}</span>
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-8 shadow-sm">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Goal Achieved</h2>
            <div className="text-4xl font-bold text-red-500">{goalAchieved}</div>
            <div className="mt-2 bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: '35%' }}></div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Total Goal</h2>
            <div className="text-4xl font-bold">₹{totalGoal.toLocaleString()}</div>
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={handleCopyLink}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            <Copy className="w-5 h-5 mr-2" />
            Copy Donation Link
          </button>
          <button
            onClick={handleShareWhatsApp}
            className="flex-1 flex items-center justify-center px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Share On WhatsApp
          </button>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="text-sm font-medium text-gray-600 mb-2">Your Unique Reference Code</div>
          <div className="text-lg font-semibold">{referralCode}</div>
          <p className="mt-2 text-sm text-gray-500">Share this code with donors to track your impact</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;