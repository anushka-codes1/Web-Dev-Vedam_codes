//function declaration: defines a named function
function add(a, b) {
  return a + b;
}

//function expression: the function is assigned to a variable
const subtract = function(a, b) {
  return a - b;
};

//arrow function: a shorter syntax for writing function expressions
const multiply = (a, b) => {
  return a * b;
};

//function declaration using arguments
function greet() {
  return "Hello, " + arguments[0] + "!"; //arguments[0] means the first argument passed to the function
}
greet("Alice", "Bob"); // "Hello, Alice!"

function noOfArg(){
    console.log(arguments.length);
}
noOfArg();

//function declaration using a rest operator
function greetRest(...names) { //rest parameter: allows a function to accept an indefinite number of arguments as an array
  return "Hello, " + names.join(", ") + "!";
}
greetRest("Alice", "Bob", "Charlie"); // "Hello, Alice, Bob, Charlie!"


// Immediately Invoked Function Expression (IIFE): a function that runs as soon as it is defined
(function() {
    console.log("This is an IIFE");
})();

// Problem Statement:
// Price per item: 500
// Discount: Apply 10% discount if quantity>=10
// Tax: Apply 18% GST after discount
// Output: Return the final payable amount

//using function declaration
function calculateTotal(quantity) { 
    const pricePerItem = 500;
    let total = pricePerItem * quantity;

    // Applying discount
    if (quantity >= 10) {
        total *= 0.9; // Applying 10% discount
    }

    // Applying tax
    total *= 1.18; // Applying 18% GST

    return total;
}

// Example usage:
const total = calculateTotal(12);
console.log("Total payable amount: " + total);


//declare a variable x in the global scope with value 10
//create a function outer() that: declares a variable x with value 20 and defines a funtion inner()
//the inner() function must print the value of x from outer()
//call the outer() function
const x = 10;
function outer() {
    const x = 20;
    function inner() {
        console.log(x);
    }
    inner(); // prints 20
}
outer();