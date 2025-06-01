import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BarChart, ArrowRight, CheckCircle } from 'lucide-react';

type Lesson = {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed?: boolean;
};

type TrackDetails = {
  title: string;
  description: string;
  image: string;
  totalLessons: number;
  estimatedTime: string;
  level: string;
  lessons: Lesson[];
};

type TrackOverviewProps = {
  trackDetails: TrackDetails;
};

const TrackOverview: React.FC<TrackOverviewProps> = ({ trackDetails }) => {
  const {
    title,
    description,
    image,
    totalLessons,
    estimatedTime,
    level,
    lessons
  } = trackDetails;

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60 flex items-end">
          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title} Track</h1>
            <p className="text-lg text-blue-50 max-w-2xl">{description}</p>
          </div>
        </div>
      </div>

      {/* Track Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm flex items-center border border-gray-100 dark:border-gray-700">
          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
            <BarChart className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Difficulty</p>
            <p className="font-medium text-gray-900 dark:text-white">{level}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm flex items-center border border-gray-100 dark:border-gray-700">
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mr-3">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Lessons</p>
            <p className="font-medium text-gray-900 dark:text-white">{totalLessons} Lessons</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm flex items-center border border-gray-100 dark:border-gray-700">
          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Estimated Time</p>
            <p className="font-medium text-gray-900 dark:text-white">{estimatedTime}</p>
          </div>
        </div>
      </div>

      {/* Course Curriculum */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Course Curriculum</h2>
        <div className="space-y-4">
          {lessons.map((lesson, index) => (
            <div key={lesson.id} className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden">
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
                    {index + 1}. {lesson.title}
                    {lesson.completed && (
                      <CheckCircle className="ml-2 h-4 w-4 text-green-500" />
                    )}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {lesson.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{lesson.description}</p>
                <Link
                  to={`${lesson.id}`}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Start Lesson
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrackOverview;