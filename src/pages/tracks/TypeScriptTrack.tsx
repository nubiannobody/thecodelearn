import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TrackOverview from '../../components/tracks/TrackOverview';
import LessonPage from '../LessonPage';

// TypeScript Lessons
import TsBasicsLesson from '../lessons/typescript/TsBasicsLesson';
import TsInterfacesLesson from '../lessons/typescript/TsInterfacesLesson';

const TypeScriptTrack = () => {
  const trackDetails = {
    title: "TypeScript",
    description: "Learn TypeScript to build type-safe JavaScript applications with improved tooling and developer experience.",
    image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    totalLessons: 14,
    estimatedTime: "14-18 hours",
    level: "Intermediate",
    lessons: [
      {
        id: "basics",
        title: "TypeScript Basics",
        description: "Learn TypeScript syntax, primitive types, and type annotations.",
        duration: "40 min",
      },
      {
        id: "interfaces",
        title: "Interfaces & Types",
        description: "Define complex types using interfaces and type aliases.",
        duration: "45 min",
      },
      {
        id: "functions",
        title: "Functions & Generics",
        description: "Master function types, parameters, and generic types.",
        duration: "60 min",
      },
      {
        id: "advanced-types",
        title: "Advanced Types",
        description: "Explore union types, intersection types, and type narrowing.",
        duration: "75 min",
      },
      {
        id: "classes",
        title: "Classes & Inheritance",
        description: "Implement object-oriented programming with TypeScript classes.",
        duration: "60 min",
      },
      {
        id: "modules",
        title: "Modules & Namespaces",
        description: "Organize code with TypeScript modules and namespaces.",
        duration: "45 min",
      },
    ]
  };

  return (
    <Routes>
      <Route index element={<TrackOverview trackDetails={trackDetails} />} />
      <Route path="basics" element={<TsBasicsLesson />} />
      <Route path="interfaces" element={<TsInterfacesLesson />} />
      <Route path="lesson/:lessonId" element={<LessonPage />} />
    </Routes>
  );
};

export default TypeScriptTrack;