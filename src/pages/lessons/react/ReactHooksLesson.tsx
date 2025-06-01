import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CodeEditor from '../../../components/lessons/CodeEditor';

const ReactHooksLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/react" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to React Track
        </Link>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h1>React Hooks</h1>
        <p className="lead">Learn how to use React Hooks to add state and other React features to function components.</p>

        <h2>What are React Hooks?</h2>
        <p>
          Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8 as a way to use state and other React features without writing a class.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4 border-l-4 border-blue-500">
          <p className="font-medium m-0">Why Hooks?</p>
          <p className="mb-0">Hooks provide a more direct API to React concepts like props, state, context, refs, and lifecycle. They make it easier to reuse stateful logic between components and help organize related code in a single place.</p>
        </div>

        <h2>useState</h2>
        <p>
          <code>useState</code> is a Hook that lets you add React state to function components:
        </p>

        <CodeEditor 
          readOnly
          language="jsx" 
          value={`import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named 'count' with initial value 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// Multiple state variables
function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [isActive, setIsActive] = useState(false);

  return (
    <form>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
      />
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
        Active
      </label>
    </form>
  );
}`} 
        />

        <h2>useEffect</h2>
        <p>
          <code>useEffect</code> lets you perform side effects in function components. It serves the same purpose as <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> in React classes.
        </p>

        <CodeEditor 
          readOnly
          language="jsx" 
          value={`import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
    
    // Optional cleanup function (similar to componentWillUnmount)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Only re-run if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// useEffect with empty dependency array (runs once after initial render)
function FetchData() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array means "run once"
  
  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}`} 
        />

        <h2>useContext</h2>
        <p>
          <code>useContext</code> accepts a context object and returns the current context value. It's useful for sharing data that can be considered "global" for a tree of React components.
        </p>

        <CodeEditor 
          readOnly
          language="jsx" 
          value={`import React, { createContext, useContext, useState } from 'react';

// Create a context for the theme
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <h1>Theme: {theme}</h1>
        <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          Toggle Theme
        </Button>
        <ThemedButton />
      </div>
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  // Use the context value
  const theme = useContext(ThemeContext);
  
  return (
    <button 
      style={{ 
        background: theme === 'dark' ? '#333' : '#FFF',
        color: theme === 'dark' ? '#FFF' : '#333',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        marginTop: '10px'
      }}
    >
      I'm styled based on the theme context!
    </button>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>{children}</button>
  );
}`} 
        />

        <h2>useRef</h2>
        <p>
          <code>useRef</code> returns a mutable ref object whose <code>.current</code> property is initialized to the passed argument. It's commonly used to access DOM elements directly.
        </p>

        <CodeEditor 
          readOnly
          language="jsx" 
          value={`import React, { useRef, useEffect } from 'react';

function TextInputWithFocusButton() {
  // Create a ref
  const inputRef = useRef(null);

  // Function to focus the input
  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}

// useRef for storing mutable values that don't cause re-renders
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    return () => clearInterval(intervalRef.current);
  }, []);
  
  // Clear the interval when user clicks the button
  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };
  
  return (
    <div>
      <p>Timer: {count} seconds</p>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}`} 
        />

        <h2>Custom Hooks</h2>
        <p>
          Custom Hooks let you extract component logic into reusable functions. They always start with "use" and can call other Hooks.
        </p>

        <CodeEditor 
          readOnly
          language="jsx" 
          value={`import { useState, useEffect } from 'react';

// Custom Hook for fetching data
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage of the custom Hook
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`https://api.example.com/users/\${userId}\`);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>Email: {data.email}</p>
      <p>Username: {data.username}</p>
    </div>
  );
}`} 
        />

        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg my-4 border-l-4 border-green-500">
          <p className="font-medium m-0">Custom Hooks Best Practices</p>
          <ol className="mb-0">
            <li>Always start their names with "use"</li>
            <li>Can use other hooks inside them</li>
            <li>Should be reusable across components</li>
            <li>Should handle a single concern (separation of concerns)</li>
          </ol>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
          <p className="font-medium m-0">Practice Time!</p>
          <p className="mb-0">Head over to the Practice tab to test your knowledge of React Hooks.</p>
        </div>

        <h2>Next Steps</h2>
        <p>Now that you've learned about React Hooks, you're ready to explore routing in React in the next lesson.</p>
      </div>

      <div className="flex justify-between mt-8">
        <Link 
          to="/react/intro" 
          className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous: Introduction to React
        </Link>
        
        <Link 
          to="/react/routing" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Routing in React
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ReactHooksLesson;