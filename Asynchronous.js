//Synchronous Code

console.log("before");

function fun(){
    console.log("I am Fun");
}
fun();

console.log("after");
//Output printed:
//before
//I am Fun
//after

//Asynchronous Code
console.log("before");

function fun(){
    console.log("I am Fun");
}
setTimeout(fun, 3000); //setTimeout function delegates it to browser through web API, where this function gets stored in the browser's "callback queue".
//The function fun gets executed after 3000ms that is, 3 s

console.log("after");
//There is an "event loop" which keeps checking the callback queue and the JS call stack.
//GEC (Global Execution Context) will be free and JS Call Stack will be empty when "after" is printed.
//Then the event loop will push the callback i.e. "I am Fun" from the callback queue to the JS Call Stack for execution.

//Output printed:
//before
//after
//I am Fun


console.log("Before");
let flag="true";

function fun(){
    console.log("loop break");
    flag=false;
}
setTimeout(fun, 2000);

console.log("After");

while(flag){} // Wait for the flag to be false
//Output: Infinite loop (because the flag is never set to false as the setTimeout callback is not executed before the while loop, so the while loop keeps running)

//NOTES
//Callstack: Runs the code line by line
//Web API: Waits and then adds to callback queue
//Callback Queue: Holds the tasks to be assigned to the JS Call Stack.
//Event Loop: Keeps an eye on when the Call Stack is empty and assigns tasks from the callback queue to the JS Call Stack.

//Callback Queue is a Macro Task Queue as it handles tasks like setTimeout.
//There is another Micro Task Queue which stores high-priority tasks like Promises. These tasks are executed immediately after the Call Stack is empty and before the next Macro Task is executed. 