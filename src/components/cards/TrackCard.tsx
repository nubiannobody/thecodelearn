import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type TrackCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  lessons: number;
  level: string;
  to: string;
  color: string;
};

const TrackCard: React.FC<TrackCardProps> = ({
  title,
  description,
  icon,
  lessons,
  level,
  to,
  color
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r ${color} text-white`}>
            {icon}
          </div>
          <h3 className="ml-3 text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <span className="font-medium">{lessons} lessons</span>
          </div>
          <div className="flex items-center">
            <span>{level}</span>
          </div>
        </div>
        
        <Link 
          to={to}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
        >
          Start Learning
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default TrackCard;