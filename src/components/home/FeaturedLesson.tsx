import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, ArrowRight } from 'lucide-react';

type FeaturedLessonProps = {
  title: string;
  description: string;
  category: string;
  level: string;
  duration: string;
  imageSrc: string;
  to: string;
};

const FeaturedLesson: React.FC<FeaturedLessonProps> = ({
  title,
  description,
  category,
  level,
  duration,
  imageSrc,
  to
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row">
      <div className="md:w-1/3 h-48 md:h-auto relative">
        <img 
          src={imageSrc}
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5 md:p-6 md:w-2/3">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <div className="flex items-center mr-4">
            <BarChart className="h-4 w-4 mr-1" />
            <span>{level}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        
        <Link 
          to={to}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
        >
          Start Lesson
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedLesson;