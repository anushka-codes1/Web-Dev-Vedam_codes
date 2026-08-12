import fs from "fs";

// ======================================================
// QUESTION 1
// Create welcome.txt and write text inside it
// ======================================================

fs.writeFileSync(
  "welcome.txt",
  "Welcome to Backend Development!"
);

console.log("File created successfully");


// ======================================================
// QUESTION 2
// Read welcome.txt and print its content
// ======================================================

let welcomeData = fs.readFileSync("welcome.txt", "utf-8"); // "utf-8" is used so that the data is returned as a string

console.log("Welcome file content:");
console.log(welcomeData);


// ======================================================
// QUESTION 3
// File CRUD: Create -> Append -> Read
// ======================================================

fs.writeFileSync(
  "tasks.txt",
  "Task 1: Learn Node"
);

fs.appendFileSync(
  "tasks.txt",
  "\nTask 2: Learn fs module"
);

let tasksData = fs.readFileSync(
  "tasks.txt",
  "utf-8"
);

console.log("\nTasks file:");
console.log(tasksData);


// ======================================================
// QUESTION 4
// Difference between writeFileSync and appendFileSync
// ======================================================

// Step 1: Write AAA
fs.writeFileSync("demo.txt", "AAA");

let demoData1 = fs.readFileSync("demo.txt", "utf-8");
console.log("\nAfter writing AAA:");
console.log(demoData1);

// Step 2: Write BBB
// This REPLACES AAA
fs.writeFileSync("demo.txt", "BBB");

let demoData2 = fs.readFileSync("demo.txt", "utf-8");
console.log("\nAfter writing BBB:");
console.log(demoData2);

// Step 3: Append CCC
// This ADDS CCC to BBB
fs.appendFileSync("demo.txt", "CCC");

let demoData3 = fs.readFileSync("demo.txt", "utf-8");
console.log("\nAfter appending CCC:");
console.log(demoData3);


// ======================================================
// QUESTION 5
// Directory CRUD
// Create folder -> Create file -> Read directory
// ======================================================

fs.mkdirSync("myProject", { recursive: true }); // { recursive: true } signifies that the folder should be created if it doesn't exist

fs.writeFileSync(
  "myProject/info.txt",
  "This is inside a folder"
);

let filesInsideFolder = fs.readdirSync("myProject");

console.log("\nFiles inside myProject:");
console.log(filesInsideFolder);


// ======================================================
// QUESTION 6
// Async fs.readFile with callback
// ======================================================

console.log("\n1. Start");

fs.readFile("welcome.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  console.log("2. File content:");
  console.log(data);
});

console.log("3. End");


// ======================================================
// QUESTION 7
// Mini Notes Manager
// Create folder -> Create file -> Append -> Read -> Delete
// ======================================================

// Create data folder
fs.mkdirSync("data", { recursive: true });

// Create notes.txt
fs.writeFileSync(
  "data/notes.txt",
  "Note 1: Backend is fun"
);

// Append Notes 2 and 3
fs.appendFileSync(
  "data/notes.txt",
  "\nNote 2: fs module learned\nNote 3: CRUD done"
);

// Read all notes
let notes = fs.readFileSync(
  "data/notes.txt",
  "utf-8"
);

console.log("\nAll Notes:");
console.log(notes);

// Count number of notes
let noteCount = notes.split("\n").length;

console.log("Number of notes:", noteCount);

// Delete the entire data folder
fs.rmSync("data", { recursive: true, force: true }); // { recursive: true, force: true } signifies that the folder should be deleted if it exists

console.log("data folder deleted successfully");