//After clicking the button in parent, the phases that is capturing or bubbling will be logged in the event log.
document.querySelector("#btn").addEventListener("click", (event)=>{
    //Phase 1: Capture
    console.log("Button Clicked");
    log.innerHTML += '<b><div>Button Clicked!</div></b>';
    //Phase 2: Target
    //Phase 3: Bubble
});

//if it is true, then it is in capturing phase, if it is false then it is in bubbling phase

document.querySelector("#grandparent").addEventListener("click", (event)=>{
    console.log("Grandparent Clicked in Bubbling Phase");
    log.innerHTML += '<b><div>Grandparent -> Bubbling Phase</div></b>';
},false);

document.querySelector("#parent").addEventListener("click", (event)=>{
    console.log("Parent Clicked in Bubbling Phase");
    log.innerHTML += '<b><div>Parent -> Bubbling Phase</div></b>';
},false);

document.querySelector("#grandparent").addEventListener("click", (event)=>{
    console.log("Grandparent Clicked in Capturing Phase");
    log.innerHTML += '<b><div>Grandparent -> Capturing Phase</div></b>';
},true);


document.querySelector("#parent").addEventListener("click", (event)=>{
    console.log("Parent Clicked in Capturing Phase");
    log.innerHTML += '<b><div>Parent -> Capturing Phase</div></b>';
},true);

document.querySelector("#clearLogBtn").addEventListener("click", (event)=>{
    log.innerHTML = '';
});

    //Update the UI to show event log
    const log = document.querySelector("#logEntries");