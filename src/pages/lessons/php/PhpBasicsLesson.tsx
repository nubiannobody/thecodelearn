import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CodeEditor from '../../../components/lessons/CodeEditor';

const PhpBasicsLesson = () => {
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
        <h1>PHP Basics</h1>
        <p className="lead">Learn the fundamentals of PHP, a popular server-side scripting language.</p>

        <h2>What is PHP?</h2>
        <p>
          PHP (recursive acronym for PHP: Hypertext Preprocessor) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4 border-l-4 border-blue-500">
          <p className="font-medium m-0">Why PHP?</p>
          <p className="mb-0">PHP is easy to learn, works on all major operating systems and web servers, and powers millions of websites including WordPress, Facebook (partially), and Wikipedia.</p>
        </div>

        <h2>Your First PHP Script</h2>
        <p>Let's write a simple "Hello World" program in PHP:</p>

        <CodeEditor 
          readOnly
          language="php" 
          value={`<!DOCTYPE html>
<html>
<head>
    <title>My First PHP Page</title>
</head>
<body>
    <h1><?php echo "Hello, World!"; ?></h1>
    
    <?php
        // This is a PHP comment
        $greeting = "Welcome to PHP!";
        echo "<p>" . $greeting . "</p>";
        
        /* This is a multi-line comment
           It can span multiple lines */
        
        // Variables in PHP start with $
        $name = "Student";
        $age = 25;
        
        echo "<p>My name is $name and I am $age years old.</p>";
    ?>
</body>
</html>`} 
        />

        <h2>Variables and Data Types</h2>
        <p>PHP supports several data types:</p>
        
        <ul>
          <li><strong>String</strong>: A sequence of characters</li>
          <li><strong>Integer</strong>: Whole numbers</li>
          <li><strong>Float</strong>: Decimal numbers</li>
          <li><strong>Boolean</strong>: True or false</li>
          <li><strong>Array</strong>: Ordered map</li>
          <li><strong>Object</strong>: Instance of a class</li>
          <li><strong>NULL</strong>: Special type with only one value</li>
        </ul>
        
        <p>Let's see examples of each:</p>

        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
// String
$name = "John Doe";

// Integer
$age = 30;

// Float
$height = 5.9;

// Boolean
$isStudent = true;

// Array
$colors = array("Red", "Green", "Blue");
// Modern array syntax
$fruits = ["Apple", "Banana", "Orange"];

// Associative array
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];

// Null
$nothing = null;

// Output
echo "Name: " . $name . "<br>";
echo "Age: " . $age . "<br>";
echo "Is student? " . ($isStudent ? "Yes" : "No") . "<br>";
echo "First color: " . $colors[0] . "<br>";
echo "Person's city: " . $person["city"] . "<br>";
?>`} 
        />

        <h2>Control Structures</h2>
        <p>PHP provides several control structures for conditional execution and loops:</p>
        
        <h3>If-Else Statements</h3>
        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
$age = 18;

if ($age < 18) {
    echo "You are a minor.";
} elseif ($age == 18) {
    echo "You just became an adult!";
} else {
    echo "You are an adult.";
}
?>`} 
        />

        <h3>Switch Statement</h3>
        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
$dayOfWeek = "Monday";

switch ($dayOfWeek) {
    case "Monday":
        echo "Start of the workweek";
        break;
    case "Friday":
        echo "End of the workweek";
        break;
    case "Saturday":
    case "Sunday":
        echo "Weekend!";
        break;
    default:
        echo "Midweek";
        break;
}
?>`} 
        />

        <h3>Loops</h3>
        <CodeEditor 
          readOnly
          language="php" 
          value={`<?php
// For loop
echo "For loop: ";
for ($i = 1; $i <= 5; $i++) {
    echo $i . " ";
}
echo "<br>";

// While loop
echo "While loop: ";
$j = 1;
while ($j <= 5) {
    echo $j . " ";
    $j++;
}
echo "<br>";

// Do-while loop
echo "Do-while loop: ";
$k = 1;
do {
    echo $k . " ";
    $k++;
} while ($k <= 5);
echo "<br>";

// Foreach loop (for arrays)
echo "Foreach loop: ";
$colors = ["Red", "Green", "Blue"];
foreach ($colors as $color) {
    echo $color . " ";
}
echo "<br>";

// Foreach with key => value
$person = ["name" => "John", "age" => 30];
foreach ($person as $key => $value) {
    echo "$key: $value, ";
}
?>`} 
        />

        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg my-4 border-l-4 border-yellow-500">
          <p className="font-medium m-0">Practice Time!</p>
          <p className="mb-0">Head over to the Practice tab to test your knowledge of PHP basics.</p>
        </div>

        <h2>Next Steps</h2>
        <p>Now that you've learned the basics of PHP, you're ready to explore functions and arrays in the next lesson.</p>
      </div>

      <div className="flex justify-between mt-8">
        <Link 
          to="/php" 
          className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Track Overview
        </Link>
        
        <Link 
          to="/php/functions" 
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next Lesson
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default PhpBasicsLesson;