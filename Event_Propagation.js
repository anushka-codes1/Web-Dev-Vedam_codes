//Bubbling phase: This is the phase where the event starts from the target element and bubbles up to the root element.
//Capturing phase: This is the phase where the event starts from the root element and is captured by the target element.
//Target element: It is the child element in this case.
//Root element: It is the topmost element in the DOM hierarchy. So it is the grandparent element in this case.

document.querySelector("#grandparent").addEventListener("click", ()=>{
    console.log("Grandparent Clicked");
},false);//bubbling phase because the event is not stopped

document.querySelector("#parent").addEventListener("click", ()=>{
    console.log("Parent Clicked");
},true);//capturing phase because the event is captured before reaching the target

document.querySelector("#child").addEventListener("click", ()=>{
    console.log("Child Clicked");
},false);//bubbling phase because the event is not stopped