let a1 = 10; // global scope: a1 is accessible anywhere in this file

function test() {
  let b1 = 20; // functional scope: b1 is only accessible within this function
  if (true) {
    let c1 = 30; // block scope: c1 is only accessible within this if block
  }
console.log(b1); // 20
console.log(c1); // ReferenceError: c1 is not defined
console.log(a1); // 10
}

test(); // calling the test function



if (true) {
    var a2 = 10; // functional scope: a2 is accessible anywhere within this function
    let b2 = 20; // block scope: b2 is only accessible within this if block
    const c2 = 30; // block scope: c2 is only accessible within this if block
}

console.log(a2); // 10, so var is dangerous in real life projects because it can be accessed outside its block
console.log(b2); // ReferenceError: b2 is not defined
console.log(c2); // ReferenceError: c2 is not defined



//q1
let a3 = 10;
// let a3 = 20;
console.log (a3); // SyntaxError: Identifier 'a3' has already been declared

//q2
var a4 = 10;
var a4 = 20;
console.log (a4); // 20

//q3
function test (){
    let x = 100;
    console.log(x); // 100
}
test();
console.log(x+10); // ReferenceError: x is not defined

//q4
function test (){
    var x = 100;
    console.log(x); // 100
}
test();
console.log(x+10); // ReferenceError: x is not defined

//q5
if(true){
    let ss = "active";
    console.log(ss); // active
}
console.log(ss); // ReferenceError: ss is not defined

//q6
if(true){
    var aa = "active"; // functional scope so accessible outside
    console.log(aa); // active
}
console.log(aa); // active

//q7
for (let i=0; i<3; i++){
    console.log("Inside loop: " + i); // 0 1 2
}
console.log("Outside loop: " + i); // ReferenceError: i is not defined, let is block scoped

//q8
for (var j=0; j<3; j++){
    console.log("Inside loop: " + j); // 0 1 2
}
console.log("Outside loop: " + j); // 3 as var is functional scoped

//q9
let value=10; //Global Context - global scope
function display(){ 
    let value=20; //Block Context - block scope
    console.log(value); // 20
}
display();
console.log(value); // 10 as value is not affected by the inner function

//q10
var value1=10; //Global Context - global scope
function display(){
    var value1=20; //Block Context - block scope
    console.log(value1); // 20
}
display();
console.log(value1); // 10 as value1 is not affected by the inner function

//q11: Example of Scope Chain
let x1=10; //Global Context - global scope
function outer(){
    let y=20; //Block Context - block scope
    function inner(){
        let z=30; //Block Context - block scope
        console.log(x1,y,z); // 10 20 30
    }
    inner();
}
outer();

//q12
function a (){
    console.log("inside", x); // 10 as it accesses the global scoped x
}

function b(){
    let x= 20; //Block Context - block scope
    console.log("value of x in fun b", x); // 20 as it accesses the block scoped x
    a(); //a function call
    console.log("value of x in fun b after a call", x); // 20
}
let x = 10; //Global Context - global scope
b();