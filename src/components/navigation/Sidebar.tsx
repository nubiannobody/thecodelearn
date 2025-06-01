import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  Code, Database, Globe, Layers, Layout, 
  BookOpen, FileCode, Award, Settings, 
  ChevronRight, ChevronDown
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    php: location.pathname.includes('/php'),
    typescript: location.pathname.includes('/typescript'),
    react: location.pathname.includes('/react'),
  });

  const toggleExpand = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const NavItem = ({ 
    to, 
    icon: Icon, 
    children, 
    hasSubmenu = false,
    submenuKey,
    submenuItems = [] 
  }: {
    to: string;
    icon: React.ElementType;
    children: React.ReactNode;
    hasSubmenu?: boolean;
    submenuKey?: string;
    submenuItems?: Array<{to: string; label: string}>;
  }) => {
    const isExpanded = submenuKey ? expandedItems[submenuKey] : false;
    
    return (
      <div className="mb-1">
        <div 
          className={`flex items-center px-3 py-2 rounded-lg cursor-pointer transition-colors duration-150
            ${hasSubmenu ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800' : ''}
          `}
          onClick={hasSubmenu && submenuKey ? () => toggleExpand(submenuKey) : undefined}
        >
          {!hasSubmenu ? (
            <NavLink 
              to={to}
              className={({isActive}) => 
                `flex items-center w-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-150
                ${isActive ? 'text-blue-600 dark:text-blue-400 font-medium' : ''}`
              }
            >
              <Icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{children}</span>
            </NavLink>
          ) : (
            <>
              <Icon className="h-5 w-5 mr-3" />
              <span className="font-medium flex-1">{children}</span>
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </>
          )}
        </div>
        
        {hasSubmenu && isExpanded && (
          <div className="ml-8 mt-1 space-y-1">
            {submenuItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                className={({isActive}) => 
                  `block py-1.5 px-3 text-sm rounded-md transition-colors
                  ${isActive 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800 font-medium' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="hidden md:block w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="h-16 flex items-center border-b border-gray-200 dark:border-gray-700 px-6">
        <Link to="/" className="flex items-center">
          <Code className="h-7 w-7 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 font-bold text-xl text-gray-800 dark:text-white">CodeLearn</span>
        </Link>
      </div>
      <div className="py-4 px-3">
        <NavItem to="/" icon={Layout}>Dashboard</NavItem>
        
        <div className="mt-6 mb-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Learning Tracks
        </div>
        
        <NavItem 
          to="/php" 
          icon={Globe}
          hasSubmenu={true}
          submenuKey="php"
          submenuItems={[
            { to: "/php/basics", label: "PHP Basics" },
            { to: "/php/functions", label: "Functions & Arrays" },
            { to: "/php/oop", label: "Object-Oriented PHP" },
            { to: "/php/database", label: "Database Interaction" },
          ]}
        >
          PHP
        </NavItem>
        
        <NavItem 
          to="/typescript" 
          icon={FileCode}
          hasSubmenu={true}
          submenuKey="typescript"
          submenuItems={[
            { to: "/typescript/basics", label: "TypeScript Basics" },
            { to: "/typescript/interfaces", label: "Interfaces & Types" },
            { to: "/typescript/advanced", label: "Advanced TypeScript" },
            { to: "/typescript/patterns", label: "Design Patterns" },
          ]}
        >
          TypeScript
        </NavItem>
        
        <NavItem 
          to="/react" 
          icon={Layers}
          hasSubmenu={true}
          submenuKey="react"
          submenuItems={[
            { to: "/react/fundamentals", label: "React Fundamentals" },
            { to: "/react/hooks", label: "Hooks & State" },
            { to: "/react/routing", label: "Routing" },
            { to: "/react/state-management", label: "State Management" },
          ]}
        >
          React
        </NavItem>
        
        <div className="mt-6 mb-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Resources
        </div>
        
        <NavItem to="/resources/tutorials" icon={BookOpen}>Tutorials</NavItem>
        <NavItem to="/resources/projects" icon={Database}>Practice Projects</NavItem>
        <NavItem to="/resources/certifications" icon={Award}>Certifications</NavItem>
        
        <div className="mt-6 mb-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          Settings
        </div>
        
        <NavItem to="/settings" icon={Settings}>Account Settings</NavItem>
      </div>
    </aside>
  );
};

// Add Link component since we're using it in the sidebar
const Link = ({ to, className, children }: { to: string, className?: string, children: React.ReactNode }) => {
  return (
    <NavLink to={to} className={className}>
      {children}
    </NavLink>
  );
};

export default Sidebar;