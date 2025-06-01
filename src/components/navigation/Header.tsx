import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, Search, Bell, Sun, Moon } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Dark mode state with localStorage + prefers-color-scheme support
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('darkMode') === 'true' || 
        window.matchMedia('(prefers-color-scheme: dark)').matches
      );
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/') return 'Home';
    if (path.includes('/php')) return 'PHP Track';
    if (path.includes('/typescript')) return 'TypeScript Track';
    if (path.includes('/react')) return 'React Track';
    return 'Learn to Code';
  };

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center bg-white dark:bg-gray-900 shadow-sm px-4 transition-colors duration-200">
      <button 
        className="mr-4 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
      </button>
      
      <div className="flex-1">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          {getPageTitle()}
        </h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
        
        {isSearchOpen && (
          <div className="absolute top-16 right-0 w-full md:w-96 p-4 bg-white dark:bg-gray-900 shadow-lg rounded-b-lg">
            <input 
              type="text" 
              placeholder="Search tutorials..."
              className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              autoFocus
            />
          </div>
        )}
        
        <button 
          className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
        </button>

        {/* Dark mode toggle button */}
        <button
          onClick={toggleDarkMode}
          className="rounded-full bg-white dark:bg-gray-800 p-2 shadow transition-colors duration-200"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-blue-600" />
          )}
        </button>
        
        <Link to="/profile" className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
            U
          </div>
        </Link>
        <div className="flex items-center space-x-4">
  <Link to="/signin" className="text-sm font-medium text-gray-700 bg-emerald-600 px-3 py-1.5 rounded hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors">
    Sign In
  </Link>
  <Link to="/signup" className="text-sm font-medium text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
    Sign Up
  </Link>
</div>

      </div>
    </header>
  );
};

export default Header;
