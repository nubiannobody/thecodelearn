import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TrackOverview from '../../components/tracks/TrackOverview';
import LessonPage from '../LessonPage';

// React Lessons
import ReactIntroLesson from '../lessons/react/ReactIntroLesson';
import ReactHooksLesson from '../lessons/react/ReactHooksLesson';

const ReactTrack = () => {
  const trackDetails = {
    title: "React",
    description: "Learn to build modern user interfaces with React, from basic components to advanced state management.",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalLessons: 16,
    estimatedTime: "16-20 hours",
    level: "Intermediate to Advanced",
    lessons: [
      {
        id: "intro",
        title: "Introduction to React",
        description: "Learn React fundamentals, component architecture, and JSX.",
        duration: "45 min",
      },
      {
        id: "hooks",
        title: "React Hooks",
        description: "Master useState, useEffect, and other built-in hooks.",
        duration: "60 min",
      },
      {
        id: "routing",
        title: "Routing in React",
        description: "Implement client-side routing with React Router.",
        duration: "45 min",
      },
      {
        id: "state-management",
        title: "State Management",
        description: "Learn context API, Redux, and other state management solutions.",
        duration: "90 min",
      },
      {
        id: "forms",
        title: "Forms & Validation",
        description: "Build forms with React and implement validation.",
        duration: "60 min",
      },
      {
        id: "optimization",
        title: "Performance Optimization",
        description: "Optimize React applications for better performance.",
        duration: "75 min",
      },
    ]
  };

  return (
    <Routes>
      <Route index element={<TrackOverview trackDetails={trackDetails} />} />
      <Route path="intro" element={<ReactIntroLesson />} />
      <Route path="hooks" element={<ReactHooksLesson />} />
      <Route path="lesson/:lessonId" element={<LessonPage />} />
    </Routes>
  );
};

export default ReactTrack;