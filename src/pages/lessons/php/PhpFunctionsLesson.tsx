import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CodeEditor from '../../../components/lessons/CodeEditor';

const PhpFunctionsLesson = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link 
          to="/php" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to PHP Track
        </Link>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <h1>PHP Functions & Arrays</h1>
        <p className="lead">Master PHP functions and array manipulation to build more powerful applications.</p>

        <h2>Functions in PHP</h2>
        <p>
          Functions are blocks of code that can be reused throughout your application. They help keep your code organized and maintainable.
        </p>

        <h3>Defining and Calling Functions</h3>
        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
// Basic function definition
function sayHello() {
    echo "Hello, World!";
}

// Call the function
sayHello();

// Function with parameters
function greet($name) {
    echo "Hello, $name!";
}

greet("Alice"); // Outputs: Hello, Alice!

// Function with default parameter values
function greetWithDefault($name = "Guest") {
    echo "Hello, $name!";
}

greetWithDefault(); // Outputs: Hello, Guest!
greetWithDefault("Bob"); // Outputs: Hello, Bob!

// Function with return value
function add($a, $b) {
    return $a + $b;
}

$sum = add(5, 3); // $sum = 8
echo "The sum is: $sum";
?>`} 
        />

        <h3>Function Scope</h3>
        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
// Global variable
$globalVar = "I am global";

function testScope() {
    // Local variable
    $localVar = "I am local";
    
    // Accessing global variable requires 'global' keyword
    global $globalVar;
    echo $globalVar . "<br>"; // Works
    
    // Alternatively, use the $GLOBALS array
    echo $GLOBALS["globalVar"] . "<br>"; // Also works
}

testScope();

// This will cause an error - local variables aren't accessible outside the function
// echo $localVar; // Error!
?>`} 
        />

        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4 border-l-4 border-blue-500">
          <p className="font-medium m-0">Best Practice</p>
          <p className="mb-0">Always try to use return values rather than directly echoing from functions. This makes your functions more versatile and testable.</p>
        </div>

        <h2>Arrays in PHP</h2>
        <p>
          Arrays in PHP are extremely versatile and can be used to store collections of values.
        </p>

        <h3>Types of Arrays</h3>
        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
// Indexed arrays
$fruits = ["Apple", "Banana", "Orange", "Mango"];
echo $fruits[0]; // Apple

// Associative arrays (key-value pairs)
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];
echo $person["name"]; // John

// Multidimensional arrays
$students = [
    ["name" => "Alice", "grade" => 95],
    ["name" => "Bob", "grade" => 85],
    ["name" => "Charlie", "grade" => 90]
];
echo $students[1]["name"]; // Bob
?>`} 
        />

        <h3>Array Functions</h3>
        <p>PHP provides many built-in functions to work with arrays:</p>

        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
$numbers = [4, 2, 8, 6, 3];
$fruits = ["Apple", "Banana", "Orange"];

// Count elements
echo count($numbers); // 5

// Sort arrays
sort($numbers); // [2, 3, 4, 6, 8]
rsort($numbers); // [8, 6, 4, 3, 2]

// Associative array sorting
$ages = ["Alice" => 25, "Bob" => 30, "Charlie" => 20];
asort($ages); // Sort by value: ["Charlie" => 20, "Alice" => 25, "Bob" => 30]
ksort($ages); // Sort by key: ["Alice" => 25, "Bob" => 30, "Charlie" => 20]

// Add/remove elements
array_push($fruits, "Grape"); // Add to end
array_pop($fruits); // Remove from end
array_unshift($fruits, "Strawberry"); // Add to beginning
array_shift($fruits); // Remove from beginning

// Merge arrays
$veggies = ["Carrot", "Broccoli"];
$foods = array_merge($fruits, $veggies);

// Filter arrays
$filteredNumbers = array_filter($numbers, function($value) {
    return $value > 5;
}); // [8, 6]

// Map arrays
$doubledNumbers = array_map(function($value) {
    return $value * 2;
}, $numbers); // [8, 4, 16, 12, 6]

// Check if key exists
$person = ["name" => "John", "age" => 30];
if (array_key_exists("name", $person)) {
    echo "Name exists!";
}

// Check if value exists
if (in_array("Apple", $fruits)) {
    echo "Apple exists in fruits!";
}
?>`} 
        />

        <h2>Combining Functions and Arrays</h2>
        <p>Let's see how we can combine functions and arrays to solve problems:</p>

        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
// Function to filter even numbers
function filterEvenNumbers($numbers) {
    return array_filter($numbers, function($number) {
        return $number % 2 === 0;
    });
}

// Function to calculate average
function calculateAverage($numbers) {
    if (empty($numbers)) {
        return 0;
    }
    return array_sum($numbers) / count($numbers);
}

// Sample data
$scores = [85, 92, 78, 96, 88];

// Get even scores
$evenScores = filterEvenNumbers($scores);
echo "Even scores: " . implode(", ", $evenScores) . "<br>";

// Calculate average
$average = calculateAverage($scores);
echo "Average score: " . number_format($average, 2);
?>`} 
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
          <p className="font-medium m-0">Practice Time!</p>
          <p className="mb-0">Head over to the Practice tab to test your knowledge of PHP functions and arrays.</p>
        </div>

        <h2>Next Steps</h2>
        <p>Now that you've learned about PHP functions and arrays, you're ready to explore Object-Oriented PHP in the next lesson.</p>
      </div>

      <div className="flex justify-between mt-8">
        <Link 
          to="/php/basics" 
          className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Previous: PHP Basics
        </Link>
        
        <Link 
          to="/php/oop" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Object-Oriented PHP
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default PhpFunctionsLesson;