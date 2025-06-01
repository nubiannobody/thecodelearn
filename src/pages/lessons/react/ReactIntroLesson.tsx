import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CodeEditor from '../../../components/lessons/CodeEditor';

const ReactIntroLesson = () => {
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
        <h1>Introduction to React</h1>
        <p className="lead">Learn the fundamentals of React, a JavaScript library for building user interfaces.</p>

        <h2>What is React?</h2>
        <p>
          React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile applications.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4 border-l-4 border-blue-500">
          <p className="font-medium m-0">Why React?</p>
          <p className="mb-0">React makes it easy to create interactive UIs, efficiently updates and renders components when data changes, and is component-based, allowing you to build encapsulated components that manage their own state.</p>
        </div>

        <h2>JSX: JavaScript + XML</h2>
        <p>
          JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML elements in JavaScript and place them in the DOM.
        </p>

        <CodeEditor 
          readOnly
          language="jsx" 
          value={`// Basic JSX example
const element = <h1>Hello, world!</h1>;

// JSX with expressions
const name = 'John';
const greeting = <h1>Hello, {name}!</h1>;

// JSX with attributes
const link = <a href="https://reactjs.org">React Website</a>;

// Multi-line JSX (must be wrapped in parentheses)
const card = (
  <div className="card">
    <h2 className="card-title">Title</h2>
    <p className="card-content">This is some content.</p>
  </div>
);

// Self-closing tags
const image = <img src="example.jpg" alt="Example" />;`} 
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
          <p className="font-medium m-0">Note</p>
          <p className="mb-0">JSX is not required for React, but it's commonly used because it makes the code more readable and easier to write.</p>
        </div>

        <h2>Components</h2>
        <p>
          Components are the building blocks of React applications. They are reusable pieces of code that return React elements describing what should appear on the screen.
        </p>

        <h3>Function Components</h3>
        <CodeEditor 
          readOnly
          language="jsx" 
          value={`// Simple function component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function component with destructuring
const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

// Usage
const element = <Welcome name="Alice" />;
const anotherElement = <Greeting name="Bob" age={25} />;`} 
        />

        <h3>Class Components</h3>
        <CodeEditor 
          readOnly
          language="jsx" 
          value={`// Class component
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Class component with state
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}`} 
        />

        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4 border-l-4 border-blue-500">
          <p className="font-medium m-0">Modern React</p>
          <p className="mb-0">Function components with Hooks are now the recommended approach instead of class components.</p>
        </div>

        <h2>Props</h2>
        <p>
          Props (short for properties) are inputs to React components. They allow you to pass data from a parent component to a child component.
        </p>

        <CodeEditor 
          readOnly
          language="jsx" 
          value={`// Parent component passing props
function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

// Child component receiving props
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Props with different data types
function UserProfile(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Is Admin: {props.isAdmin ? 'Yes' : 'No'}</p>
      <p>Tags: {props.tags.join(', ')}</p>
    </div>
  );
}

// Usage
const element = (
  <UserProfile 
    name="John Doe" 
    age={30} 
    isAdmin={true}
    tags={['developer', 'react']}
  />
);`} 
        />

        <h2>Creating a React App</h2>
        <p>The easiest way to create a new React application is with Create React App:</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`// Using npm
npm create vite@latest my-app -- --template react-ts

// Using Yarn
yarn create vite my-app --template react-ts

// Navigate to project
cd my-app

// Start development server
npm run dev`} 
        />

        <h2>A Complete React Component Example</h2>
        <p>Let's put it all together with a simple counter component:</p>

        <CodeEditor 
          readOnly
          language="jsx" 
          value={`import React, { useState } from 'react';

function Counter() {
  // State declaration with useState hook
  const [count, setCount] = useState(0);
  
  // Event handlers
  const increment = () => {
    setCount(count + 1);
  };
  
  const decrement = () => {
    setCount(count - 1);
  };
  
  const reset = () => {
    setCount(0);
  };
  
  return (
    <div className="counter">
      <h2>Counter: {count}</h2>
      
      <div className="buttons">
        <button onClick={decrement}>-</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>+</button>
      </div>
      
      <p>{count === 0 ? 'Let\'s start counting!' : \`Current count is \${count}\`}</p>
    </div>
  );
}

export default Counter;`} 
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
          <p className="font-medium m-0">Practice Time!</p>
          <p className="mb-0">Head over to the Practice tab to test your knowledge of React fundamentals.</p>
        </div>

        <h2>Next Steps</h2>
        <p>Now that you've learned the basics of React, you're ready to explore React Hooks in the next lesson.</p>
      </div>

      <div className="flex justify-between mt-8">
        <Link 
          to="/react" 
          className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Track Overview
        </Link>
        
        <Link 
          to="/react/hooks" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: React Hooks
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ReactIntroLesson;