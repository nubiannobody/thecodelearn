import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CodeEditor from '../../../components/lessons/CodeEditor';

const TsBasicsLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/typescript" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to TypeScript Track
        </Link>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h1>TypeScript Basics</h1>
        <p className="lead">Learn the fundamentals of TypeScript, a typed superset of JavaScript.</p>

        <h2>What is TypeScript?</h2>
        <p>
          TypeScript is a strongly typed programming language that builds on JavaScript. It adds static types to JavaScript, allowing you to catch errors earlier in the development process.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4 border-l-4 border-blue-500">
          <p className="font-medium m-0">Why TypeScript?</p>
          <p className="mb-0">TypeScript helps prevent bugs, makes your code more readable, and provides better tools for large codebases. It's widely used in modern web development, especially for frameworks like React, Angular, and Vue.</p>
        </div>

        <h2>Basic Types</h2>
        <p>TypeScript provides several basic types that you can use to specify the type of a variable:</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`// Basic types in TypeScript
let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";
let fullName: string = \`John Doe\`;
let age: number = 30;
let sentence: string = \`Hello, my name is \${fullName}.
I'll be \${age + 1} years old next month.\`;

// Arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; // Generic array type

// Tuples
let x: [string, number] = ["hello", 10]; // OK
// x = [10, "hello"]; // Error

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c); // 1

// Any - dynamic type (try to avoid)
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void - absence of any type
function warnUser(): void {
    console.log("This is a warning message");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never - represents values that never occur
function error(message: string): never {
    throw new Error(message);
}

// Object
let obj: object = { key: "value" };`} 
        />

        <h2>Type Annotations and Inference</h2>
        <p>TypeScript uses type annotations to explicitly specify types, but it can also infer types:</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`// Type annotations (explicit)
let name: string = "Alice";
let age: number = 25;
let active: boolean = true;

// Type inference (implicit)
let inferedName = "Bob"; // TypeScript infers this as string
let inferedAge = 30; // TypeScript infers this as number

// Function parameter and return type annotations
function greet(person: string): string {
    return \`Hello, \${person}!\`;
}

// Arrow function with types
const add = (a: number, b: number): number => a + b;

// Function with optional parameters
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return \`\${firstName} \${lastName}\`;
    } else {
        return firstName;
    }
}

// Function with default parameters
function greeting(name: string, message: string = "Hello"): string {
    return \`\${message}, \${name}\`;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10`} 
        />

        <h2>Type Assertions</h2>
        <p>
          Type assertions are a way to tell the TypeScript compiler "trust me, I know what I'm doing." It's like type casting in other languages but performs no special checking.
        </p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`let someValue: any = "this is a string";

// "angle-bracket" syntax
let strLength1: number = (<string>someValue).length;

// "as" syntax (preferred in JSX)
let strLength2: number = (someValue as string).length;`} 
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
          <p className="font-medium m-0">Best Practice</p>
          <p className="mb-0">Use the <code>as</code> syntax for type assertions, especially if you're working with JSX (React).</p>
        </div>

        <h2>Union and Intersection Types</h2>
        <p>
          Union types allow you to specify that a value can be one of several types. Intersection types combine multiple types into one.
        </p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`// Union Types
function formatCommandLine(command: string | string[]): string {
    if (typeof command === "string") {
        return command.trim();
    } else {
        return command.join(" ").trim();
    }
}

// Usage
console.log(formatCommandLine("  start  ")); // "start"
console.log(formatCommandLine(["git", "commit", "-m", "Initial commit"])); // "git commit -m Initial commit"

// Intersection Types
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
    department: string;
}

type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
    name: "John Doe",
    age: 30,
    employeeId: "E123",
    department: "Engineering"
};`} 
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
          <p className="font-medium m-0">Practice Time!</p>
          <p className="mb-0">Head over to the Practice tab to test your knowledge of TypeScript basics.</p>
        </div>

        <h2>Next Steps</h2>
        <p>Now that you've learned the basics of TypeScript, you're ready to explore interfaces and types in the next lesson.</p>
      </div>

      <div className="flex justify-between mt-8">
        <Link 
          to="/typescript" 
          className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Track Overview
        </Link>
        
        <Link 
          to="/typescript/interfaces" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Interfaces & Types
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default TsBasicsLesson;