import React from 'react';
import { Link } from 'react-router-dom';
import { Play, FileCode, Code, Star, ArrowRight } from 'lucide-react';
import TrackCard from '../components/cards/TrackCard';
import ProgressCard from '../components/cards/ProgressCard';
import FeaturedLesson from '../components/home/FeaturedLesson';
import { Layers } from 'lucide-react';


const HomePage = () => {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <section className="relative rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute transform rotate-12 translate-x-1/4 -translate-y-1/4">
            <Code className="w-96 h-96" />
          </div>
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Master PHP, TypeScript, and React
          </h1>
          <p className="text-lg md:text-xl mb-6 text-blue-100">
            Start your coding journey with our interactive lessons and hands-on exercises. Build real projects and learn by doing.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/getting-started" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Learning
            </Link>
            <Link 
              to="/courses" 
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Explore Tracks
            </Link>
          </div>
        </div>
      </section>
      
      {/* Learning tracks */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Learning Tracks</h2>
          <Link 
            to="/tracks" 
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center"
          >
            View all
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrackCard
            title="PHP"
            description="Learn server-side programming with PHP, from basics to database interactions."
            icon={<FileCode className="h-6 w-6" />}
            lessons={12}
            level="Beginner to Intermediate"
            to="/php"
            color="from-green-500 to-teal-600"
          />
          
          <TrackCard
            title="TypeScript"
            description="Master TypeScript to build type-safe JavaScript applications."
            icon={<Code className="h-6 w-6" />}
            lessons={14}
            level="Intermediate"
            to="/typescript"
            color="from-blue-500 to-indigo-600"
          />
          
          <TrackCard
            title="React"
            description="Build modern user interfaces with the popular React library."
            icon={<Layers className="h-6 w-6" />}
            lessons={16}
            level="Intermediate to Advanced"
            to="/react"
            color="from-purple-500 to-pink-600"
          />
        </div>
      </section>
      
      {/* Progress & Featured content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Featured Content</h2>
          <div className="space-y-5">
            <FeaturedLesson
              title="Building Your First PHP API"
              description="Learn how to create a RESTful API using PHP and MySQL with this hands-on tutorial."
              category="PHP"
              level="Intermediate"
              duration="45 min"
              imageSrc="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              to="/php/lesson/api-basics"
            />
            
            <FeaturedLesson
              title="TypeScript Generics Explained"
              description="Master TypeScript generics with practical examples and exercises."
              category="TypeScript"
              level="Intermediate"
              duration="30 min"
              imageSrc="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              to="/typescript/lesson/generics"
            />
            
            <FeaturedLesson
              title="React Hooks Deep Dive"
              description="Understand React's useState, useEffect, useContext and custom hooks."
              category="React"
              level="Intermediate"
              duration="50 min"
              imageSrc="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              to="/react/lesson/hooks-deep-dive"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Your Progress</h2>
          <div className="space-y-4">
            <ProgressCard
              track="PHP"
              progress={35}
              completedLessons={4}
              totalLessons={12}
              lastLesson="PHP Arrays & Functions"
              to="/php/lesson/arrays"
            />
            
            <ProgressCard
              track="TypeScript"
              progress={15}
              completedLessons={2}
              totalLessons={14}
              lastLesson="Basic Types"
              to="/typescript/lesson/basic-types"
            />
            
            <ProgressCard
              track="React"
              progress={5}
              completedLessons={1}
              totalLessons={16}
              lastLesson="Introduction to React"
              to="/react/lesson/intro"
            />
          </div>
          
          <div className="mt-6 bg-white dark:bg-gray-900 rounded-lg shadow p-5 border border-gray-100 dark:border-gray-700">
            <h3 className="font-semibold text-lg mb-4 flex items-center text-gray-800 dark:text-white">
              <Star className="h-5 w-5 text-yellow-500 mr-2" />
              Daily Streak
            </h3>
            <div className="flex justify-between items-center">
              <div className="text-3xl font-bold text-gray-800 dark:text-white">3 days</div>
              <button className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-medium">
                Keep it up!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;