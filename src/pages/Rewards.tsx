import React from 'react';
import { Trophy, Star, Gift, Award } from 'lucide-react';

const Rewards = () => {
  const rewards = [
    {
      title: 'Silver Fundraiser',
      description: 'Raise ₹25,000 in donations',
      progress: 80,
      icon: Trophy,
      achieved: true,
    },
    {
      title: 'Gold Fundraiser',
      description: 'Raise ₹50,000 in donations',
      progress: 45,
      icon: Star,
      achieved: false,
    },
    {
      title: 'Platinum Fundraiser',
      description: 'Raise ₹1,00,000 in donations',
      progress: 20,
      icon: Award,
      achieved: false,
    },
    {
      title: 'Community Champion',
      description: 'Get donations from 50 unique donors',
      progress: 30,
      icon: Gift,
      achieved: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-6">Your Rewards</h1>
        
        <div className="grid grid-cols-2 gap-6">
          {rewards.map((reward) => (
            <div
              key={reward.title}
              className="border rounded-lg p-6 relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <reward.icon
                    className={`h-8 w-8 ${
                      reward.achieved ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{reward.title}</h3>
                    <p className="text-sm text-gray-600">{reward.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{reward.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      reward.achieved ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${reward.progress}%` }}
                  ></div>
                </div>
              </div>

              {reward.achieved && (
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Achieved
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;