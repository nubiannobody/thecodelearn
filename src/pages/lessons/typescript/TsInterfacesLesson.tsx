import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CodeEditor from '../../../components/lessons/CodeEditor';

const TsInterfacesLesson = () => {
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
        <h1>TypeScript Interfaces & Types</h1>
        <p className="lead">Learn how to define complex types using interfaces and type aliases in TypeScript.</p>

        <h2>Interfaces</h2>
        <p>
          Interfaces are a powerful way to define contracts within your code as well as contracts with code outside of your project.
        </p>

        <h3>Basic Interface</h3>
        <CodeEditor 
          readOnly
          language="typescript" 
          value={`interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return \`Hello, \${person.firstName} \${person.lastName}!\`;
}

const user = { firstName: "John", lastName: "Doe" };

console.log(greet(user)); // Hello, John Doe!`} 
        />

        <h3>Optional Properties</h3>
        <p>Not all properties of an interface may be required.</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
}

const john: Person = { 
    firstName: "John", 
    lastName: "Doe" 
}; // Valid

const jane: Person = { 
    firstName: "Jane", 
    lastName: "Doe", 
    age: 30 
}; // Also valid`} 
        />

        <h3>Readonly Properties</h3>
        <p>Some properties should only be modifiable when an object is first created:</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`interface Point {
    readonly x: number;
    readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
// p1.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.`} 
        />

        <h3>Function Types</h3>
        <p>Interfaces can also describe function types:</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function(src, sub) {
    return src.search(sub) > -1;
};

console.log(mySearch("Hello World", "World")); // true`} 
        />

        <h3>Indexable Types</h3>
        <p>Interfaces can also describe objects with an arbitrary number of properties:</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`interface StringArray {
    [index: number]: string;
}

const myArray: StringArray = ["Bob", "Alice"];
console.log(myArray[0]); // Bob

interface Dictionary {
    [key: string]: string;
}

const colors: Dictionary = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff"
};

console.log(colors["red"]); // #ff0000`} 
        />

        <h2>Type Aliases</h2>
        <p>
          Type aliases create a new name for a type. They are similar to interfaces but can name primitive types, unions, tuples, and any other types.
        </p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`// Type alias for a primitive
type ID = string;

// Type alias for a union type
type Status = "pending" | "approved" | "rejected";

// Type alias for a complex object
type Person = {
    name: string;
    age: number;
};

// Using type aliases
const userId: ID = "user123";
let requestStatus: Status = "pending";
// requestStatus = "waiting"; // Error: Type '"waiting"' is not assignable to type 'Status'.

const user: Person = {
    name: "John",
    age: 30
};`} 
        />

        <h2>Interfaces vs. Type Aliases</h2>
        <p>
          Interfaces and type aliases are very similar, but there are some differences:
        </p>

        <div className="overflow-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="border px-4 py-2 bg-gray-100 dark:bg-gray-800">Feature</th>
                <th className="border px-4 py-2 bg-gray-100 dark:bg-gray-800">Interface</th>
                <th className="border px-4 py-2 bg-gray-100 dark:bg-gray-800">Type Alias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Primitives</td>
                <td className="border px-4 py-2">❌</td>
                <td className="border px-4 py-2">✅</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Union</td>
                <td className="border px-4 py-2">❌</td>
                <td className="border px-4 py-2">✅</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Intersection</td>
                <td className="border px-4 py-2">✅ (extends)</td>
                <td className="border px-4 py-2">✅ (&)</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Declaration Merging</td>
                <td className="border px-4 py-2">✅</td>
                <td className="border px-4 py-2">❌</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Declaration Merging</h3>
        <p>One key difference is that interfaces can be extended after they are defined:</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`// Declaration merging with interfaces
interface Person {
    name: string;
}

interface Person {
    age: number;
}

const john: Person = {
    name: "John",
    age: 30
}; // Valid, both name and age are required

// This doesn't work with type aliases
// type Animal = { name: string; };
// type Animal = { age: number; }; // Error: Duplicate identifier 'Animal'.`} 
        />

        <h2>Extending Interfaces</h2>
        <p>Interfaces can extend one or more interfaces to copy their members:</p>

        <CodeEditor 
          readOnly
          language="typescript" 
          value={`interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog: Dog = {
    name: "Rex",
    breed: "German Shepherd"
};

// Extending multiple interfaces
interface Pet {
    owner: string;
}

interface DogPet extends Dog, Pet {
    playsFetch: boolean;
}

const pet: DogPet = {
    name: "Buddy",
    breed: "Labrador",
    owner: "Alice",
    playsFetch: true
};`} 
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
          <p className="font-medium m-0">Practice Time!</p>
          <p className="mb-0">Head over to the Practice tab to test your knowledge of TypeScript interfaces and types.</p>
        </div>

        <h2>Next Steps</h2>
        <p>Now that you've learned about interfaces and types, you're ready to explore advanced TypeScript concepts in the next lesson.</p>
      </div>

      <div className="flex justify-between mt-8">
        <Link 
          to="/typescript/basics" 
          className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous: TypeScript Basics
        </Link>
        
        <Link 
          to="/typescript/advanced" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Advanced TypeScript
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default TsInterfacesLesson;