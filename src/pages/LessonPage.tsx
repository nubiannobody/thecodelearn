import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Code, Play, CheckCircle, Award } from 'lucide-react';
import CodeEditor from '../components/lessons/CodeEditor';

const LessonPage = () => {
  const { track, lessonId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'learn' | 'practice' | 'challenge'>('learn');
  const [lessonProgress, setLessonProgress] = useState<number>(0);
  const [showCompleteMessage, setShowCompleteMessage] = useState<boolean>(false);

  useEffect(() => {
    // Reset lesson state when lesson changes
    setActiveTab('learn');
    setLessonProgress(0);
    setShowCompleteMessage(false);
  }, [track, lessonId]);

  const markLessonComplete = () => {
    setShowCompleteMessage(true);
    // In a real app, you'd save progress to a database
  };

  const getLessonTitle = () => {
    // In a real app, this would come from a database or API
    return lessonId 
      ? lessonId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      : 'Lesson';
  };

  // Placeholder content for each tab
  const tabContent = {
    learn: (
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h1>{getLessonTitle()}</h1>
          <p className="lead">In this lesson, you'll learn the core concepts of {track} programming with practical examples.</p>
          
          <h2>1. Getting Started</h2>
          <p>Let's start with the basics. Here's what you need to know about {track}:</p>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg my-4 border-l-4 border-blue-500">
            <p className="font-medium">Key Concept</p>
            <p>This is an important concept in {track} that you should remember.</p>
          </div>
          
          <p>Now let's look at some sample code:</p>
          
          <CodeEditor
            readOnly
            language={track === 'php' ? 'php' : track === 'typescript' ? 'typescript' : 'jsx'}
            value={track === 'php' 
              ? "<?php\n// PHP example code\n$greeting = 'Hello, World!';\necho $greeting;"
              : track === 'typescript'
              ? "// TypeScript example code\nlet greeting: string = 'Hello, World!';\nconsole.log(greeting);"
              : "// React example code\nconst Greeting = () => {\n  return <h1>Hello, World!</h1>;\n};\n\nexport default Greeting;"}
          />
          
          <h2>2. Understanding the Fundamentals</h2>
          <p>Let's dive deeper into how {track} works and why it's powerful.</p>
          
          <h3>Key Benefits</h3>
          <ul>
            <li>Benefit 1 of using {track}</li>
            <li>Benefit 2 of using {track}</li>
            <li>Benefit 3 of using {track}</li>
          </ul>
          
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
            <p className="font-medium">Pro Tip</p>
            <p>Here's a professional tip that will help you write better {track} code.</p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={() => navigate(-1)} 
            className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </button>
          
          <button 
            onClick={() => setActiveTab('practice')} 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Practice Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    ),
    
    practice: (
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Practice: {getLessonTitle()}</h1>
          <p className="lead">Now it's time to practice what you've learned. Follow the instructions below.</p>
          
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4 border border-blue-200 dark:border-blue-800">
            <h3 className="mt-0 text-blue-800 dark:text-blue-300">Your Task</h3>
            <p className="mb-0">
              {track === 'php' 
                ? "Create a PHP function that takes an array of numbers and returns the sum of all numbers in the array."
                : track === 'typescript' 
                ? "Create a TypeScript interface for a User object and a function that validates if an object is a valid User."
                : "Create a React component that displays a list of items passed as props."}
            </p>
          </div>
          
          <h3>Exercise</h3>
          <p>Complete the code below:</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Your Code</h3>
            <CodeEditor
              language={track === 'php' ? 'php' : track === 'typescript' ? 'typescript' : 'jsx'}
              value={track === 'php' 
                ? "<?php\n// Write your function here\nfunction sumArray($numbers) {\n  // Your code here\n}\n\n// Test with these arrays\n$test1 = [1, 2, 3, 4, 5]; // Should return 15\n$test2 = [10, 20, 30]; // Should return 60"
                : track === 'typescript'
                ? "// Define the User interface\ninterface User {\n  // Your code here\n}\n\n// Write a function that validates a User\nfunction isValidUser(user: any): user is User {\n  // Your code here\n}\n\n// Test with this object\nconst testUser = {\n  id: 1,\n  name: 'John Doe',\n  email: 'john@example.com'\n};"
                : "// Create a ListDisplay component\nimport React from 'react';\n\ntype ListDisplayProps = {\n  items: string[];\n};\n\nconst ListDisplay: React.FC<ListDisplayProps> = ({ items }) => {\n  // Your code here\n};\n\nexport default ListDisplay;"}
              onChange={() => setLessonProgress(Math.min(lessonProgress + 25, 75))}
            />
          </div>
          
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Output</h3>
            <div className="h-64 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 overflow-auto font-mono text-sm">
              <p className="text-gray-500 dark:text-gray-400">// Output will appear here when you run your code</p>
            </div>
            <div className="mt-4 flex justify-end">
              <button 
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                onClick={() => setLessonProgress(Math.min(lessonProgress + 25, 75))}
              >
                <Play className="w-4 h-4 mr-2 inline-block" />
                Run Code
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button 
            onClick={() => setActiveTab('learn')} 
            className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Back to Lesson
          </button>
          
          <button 
            onClick={() => setActiveTab('challenge')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            disabled={lessonProgress < 75}
          >
            Take the Challenge
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    ),
    
    challenge: (
      <div className="space-y-6">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Challenge: {getLessonTitle()}</h1>
          <p className="lead">Now for the final challenge! Complete this exercise to finish the lesson.</p>
          
          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg my-4 border border-purple-200 dark:border-purple-800">
            <h3 className="mt-0 text-purple-800 dark:text-purple-300">Challenge</h3>
            <p className="mb-0">
              {track === 'php' 
                ? "Create a complete PHP program that reads a CSV file, processes the data, and outputs results to another file."
                : track === 'typescript' 
                ? "Build a generic data fetching utility in TypeScript that handles errors and different data types."
                : "Create a complete React component with state management that implements a simple todo list."}
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
          <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Your Solution</h3>
          <CodeEditor
            language={track === 'php' ? 'php' : track === 'typescript' ? 'typescript' : 'jsx'}
            value={track === 'php' 
              ? "<?php\n// Your complete solution here\n// 1. Read from a CSV file\n// 2. Process the data\n// 3. Write results to another file\n"
              : track === 'typescript'
              ? "// Your complete solution here\n// Create a generic data fetching utility\n\nasync function fetchData<T>(url: string): Promise<T> {\n  // Implement the function\n}"
              : "// Your complete solution here\n// Create a Todo list component with React\n\nimport React, { useState } from 'react';\n\nconst TodoList: React.FC = () => {\n  // Implement the component\n};"}
            onChange={() => setLessonProgress(100)}
          />
          
          <div className="mt-4 flex justify-end space-x-3">
            <button 
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              onClick={() => setLessonProgress(100)}
            >
              <Play className="w-4 h-4 mr-2 inline-block" />
              Run Code
            </button>
            
            <button 
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              onClick={markLessonComplete}
              disabled={lessonProgress < 100}
            >
              <CheckCircle className="w-4 h-4 mr-2 inline-block" />
              Submit Solution
            </button>
          </div>
        </div>
        
        {showCompleteMessage && (
          <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-800 text-center animate-fadeIn">
            <Award className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Lesson Completed!</h3>
            <p className="text-green-700 dark:text-green-400 mb-4">Great job! You've successfully completed this lesson.</p>
            <div className="flex justify-center space-x-3">
              <Link 
                to={`/${track}`}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700 rounded-lg hover:bg-green-50 dark:hover:bg-gray-700"
              >
                Back to Track
              </Link>
              <button 
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Next Lesson
                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
              </button>
            </div>
          </div>
        )}
        
        {!showCompleteMessage && (
          <div className="flex justify-between">
            <button 
              onClick={() => setActiveTab('practice')} 
              className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Practice
            </button>
          </div>
        )}
      </div>
    )
  };

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-6">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${lessonProgress}%` }}
          />
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab('learn')}
          className={`px-4 py-2 font-medium text-sm mr-2 ${
            activeTab === 'learn'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <BookOpen className="w-4 h-4 inline-block mr-1" />
          Learn
        </button>
        
        <button
          onClick={() => setActiveTab('practice')}
          className={`px-4 py-2 font-medium text-sm mr-2 ${
            activeTab === 'practice'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
          }`}
        >
          <Code className="w-4 h-4 inline-block mr-1" />
          Practice
        </button>
        
        <button
          onClick={() => lessonProgress >= 75 && setActiveTab('challenge')}
          className={`px-4 py-2 font-medium text-sm ${
            activeTab === 'challenge'
              ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
              : lessonProgress >= 75 
              ? 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200' 
              : 'text-gray-400 dark:text-gray-600 cursor-not-allowed'
          }`}
          disabled={lessonProgress < 75}
        >
          <Award className="w-4 h-4 inline-block mr-1" />
          Challenge
        </button>
      </div>
      
      {/* Tab content */}
      {tabContent[activeTab]}
    </div>
  );
};

export default LessonPage;