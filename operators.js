//Arithmetic Operators
let a = 10;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Comparison Operators
let x= 10;
let y= "10";

console.log (x == y);
console.log (x === y);
console.log (3>5);
console.log (5 == "5");
console.log (5 === "5");
console.log (10 <= 10);
console.log (4 != 4);

//Logical Operators
let isLoggedIn=true;
let isAdmin=false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);

//UA+16

let age= 14;
let withAdult= true;

console.log(withAdult==true || age>16);

//Precedence of Operators
console.log("5"+5+2); //"552" -> "5"+5 -> "55" + 2 -> "552"
console.log(5+2+"5"); //"75"
console.log(true + true + true); //3 as 1+1+1=3, this is Coercion of true ->1 and false ->0
console.log("9" + true + true); //9truetrue as here "9" is a string
console.log(909 + true + true); //909+1+1= 911 as here 909 is a number

//Conditional Statements (if-else)
    let weather = "rainy";
    if (weather=="rainy"){
        console.log("Take an umbrella");
    }
    else{
        console.log("Enjoy the sunshine");
    }

    let marks = prompt("Please enter marks");
    marks = Number(marks);
    if(marks>=90){console.log("A");}
    else if(marks>=80){console.log("B");}
    else if(marks>=70){console.log("C");}
    else if(marks>=60){console.log("D");}
    else {console.log("F");}

    const greet2 = function(){ //function expression
        console.log("Hello there!");
    }

    //CALCULATOR: Functional Programming (using function for modularity)
    function Calculator (op1, op2, operator) {
        let op1= prompt("Enter first operand"); 
        op1= Number(op1);
        let op2= prompt("Enter second operand"); 
        op2= Number(op2);
        let operator= prompt("Enter operator (+, -, *, /)"); 
        operator= String(operator);
        function plus(){
            return op1 + op2;
        }
        function minus(){
            return op1 - op2;
        }
        function multiply(){
            return op1 * op2;
        }
        function divide(){
            if (op2 === 0) {
                return "Error: Division by zero";
            }
            return op1 / op2;
        }
        if (operator === "+") {
            return plus();
        } else if (operator === "-") {
            return minus();
        } else if (operator === "*") {
            return multiply();
        } else if (operator === "/") {
            return divide();
        } else {
            return "Invalid operator";
        }
    }

