import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ProgressCardProps = {
  track: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  lastLesson: string;
  to: string;
};

const ProgressCard: React.FC<ProgressCardProps> = ({
  track,
  progress,
  completedLessons,
  totalLessons,
  lastLesson,
  to
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-5 border border-gray-100 dark:border-gray-700">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-800 dark:text-white">{track}</h3>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {completedLessons}/{totalLessons}
        </span>
      </div>
      
      <div className="mb-3">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-1 text-xs text-right text-gray-500 dark:text-gray-400">
          {progress}% complete
        </div>
      </div>
      
      {completedLessons > 0 && (
        <div className="mb-3">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Last completed:</div>
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{lastLesson}</div>
        </div>
      )}
      
      <Link 
        to={to}
        className="inline-flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300"
      >
        Continue
        <ArrowRight className="ml-1 h-3.5 w-3.5" />
      </Link>
    </div>
  );
};

export default ProgressCard;