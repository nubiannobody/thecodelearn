import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TrackOverview from '../../components/tracks/TrackOverview';
import LessonPage from '../LessonPage';

// PHP Lessons
import PhpBasicsLesson from '../lessons/php/PhpBasicsLesson';
import PhpFunctionsLesson from '../lessons/php/PhpFunctionsLesson';

const PhpTrack = () => {
  const trackDetails = {
    title: "PHP",
    description: "Learn server-side programming with PHP, from the basics to building complete web applications and APIs.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalLessons: 12,
    estimatedTime: "12-15 hours",
    level: "Beginner to Intermediate",
    lessons: [
      {
        id: "basics",
        title: "PHP Basics",
        description: "Learn PHP syntax, variables, data types, and control structures.",
        duration: "30 min",
      },
      {
        id: "functions",
        title: "Functions & Arrays",
        description: "Master PHP functions, arrays, and array manipulation.",
        duration: "45 min",
      },
      {
        id: "oop",
        title: "Object-Oriented PHP",
        description: "Understand classes, objects, inheritance, and more.",
        duration: "60 min",
      },
      {
        id: "database",
        title: "Database Interactions",
        description: "Connect to MySQL databases and perform CRUD operations.",
        duration: "90 min",
      },
      {
        id: "forms",
        title: "Form Handling & Validation",
        description: "Process form submissions and validate user input.",
        duration: "45 min",
      },
      {
        id: "sessions",
        title: "Sessions & Authentication",
        description: "Implement user authentication and session management.",
        duration: "60 min",
      },
    ]
  };

  return (
    <Routes>
      <Route index element={<TrackOverview trackDetails={trackDetails} />} />
      <Route path="basics" element={<PhpBasicsLesson />} />
      <Route path="functions" element={<PhpFunctionsLesson />} />
      <Route path="lesson/:lessonId" element={<LessonPage />} />
    </Routes>
  );
};

export default PhpTrack;