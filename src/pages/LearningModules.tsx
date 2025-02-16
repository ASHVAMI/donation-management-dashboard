import React from 'react';
import { Book, Video, FileText, Award } from 'lucide-react';

const LearningModules = () => {
  const modules = [
    {
      title: 'Getting Started with Fundraising',
      description: 'Learn the basics of effective fundraising and donor engagement',
      duration: '45 mins',
      icon: Book,
      progress: 100,
      completed: true,
    },
    {
      title: 'Digital Marketing for NGOs',
      description: 'Master social media and online presence for maximum impact',
      duration: '1.5 hours',
      icon: Video,
      progress: 60,
      completed: false,
    },
    {
      title: 'Donor Communication',
      description: 'Best practices for maintaining donor relationships',
      duration: '1 hour',
      icon: FileText,
      progress: 0,
      completed: false,
    },
    {
      title: 'Impact Reporting',
      description: 'Learn how to create compelling impact reports',
      duration: '2 hours',
      icon: Award,
      progress: 0,
      completed: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold mb-6">Learning Modules</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <div
              key={module.title}
              className="border rounded-lg p-6 hover:border-red-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <module.icon
                    className={`h-8 w-8 ${
                      module.completed ? 'text-green-500' : 'text-red-500'
                    }`}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{module.title}</h3>
                    <p className="text-sm text-gray-600">{module.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>{module.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      module.completed ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Duration: {module.duration}
                  </span>
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      module.completed
                        ? 'bg-gray-100 text-gray-600'
                        : 'bg-red-500 text-white hover:bg-red-600'
                    }`}
                  >
                    {module.completed ? 'Completed' : 'Start Learning'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningModules;