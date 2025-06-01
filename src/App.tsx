import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import HomePage from './pages/HomePage';
import PhpTrack from './pages/tracks/PhpTrack';
import TypeScriptTrack from './pages/tracks/TypeScriptTrack';
import ReactTrack from './pages/tracks/ReactTrack';
import LessonPage from './pages/LessonPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for user preference
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem('darkMode') === 'true' || 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="php/*" element={<PhpTrack />} />
          <Route path="typescript/*" element={<TypeScriptTrack />} />
          <Route path="react/*" element={<ReactTrack />} />
          <Route path=":track/lesson/:lessonId" element={<LessonPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;