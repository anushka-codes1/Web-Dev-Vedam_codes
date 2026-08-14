// ======================================================
// NODE.JS SERVERS ASSIGNMENT
// Questions 1 - 5
// ======================================================

import os from "os";
import http from "http";
import express from "express";


// ======================================================
// QUESTION 1 — System Info
// ======================================================

console.log("=================================");
console.log("QUESTION 1 — SYSTEM INFO");
console.log("=================================");

console.log("Platform:", os.platform());

console.log("CPU Architecture:", os.arch());

console.log(
  "Total RAM:",
  (os.totalmem() / (1024 ** 3)).toFixed(2),
  "GB"
);

console.log(
  "Free RAM:",
  (os.freemem() / (1024 ** 3)).toFixed(2),
  "GB"
);

console.log(
  "System Uptime:",
  (os.uptime() / 3600).toFixed(2),
  "hours"
);


// ======================================================
// QUESTION 2 — Basic HTTP Server
// ======================================================

function question2() {

  const server = http.createServer((req, res) => {

    console.log("URL:", req.url);
    console.log("Method:", req.method);

    res.end("Welcome to my server");

  });


  server.listen(3000, () => {
    console.log("Question 2 server running on http://localhost:3000");
  });

}


// ======================================================
// QUESTION 3 — Routing with http
// ======================================================

function question3() {

  const server = http.createServer((req, res) => {

    if (req.url === "/") {

      res.end("Home Page");

    } else if (req.url === "/products") {

      res.end("Our Products");

    } else if (req.url === "/login") {

      res.end("Login Page");

    } else {

      res.statusCode = 404;
      res.end("Page Not Found");

    }

  });


  server.listen(3000, () => {
    console.log("Question 3 server running on http://localhost:3000");
  });

}


// ======================================================
// QUESTION 4 — Express Server
// ======================================================

function question4() {

  const app = express();


  app.get("/", (req, res) => {
    res.send("Home Page");
  });


  app.get("/products", (req, res) => {
    res.send("Our Products");
  });


  app.get("/login", (req, res) => {
    res.send("Login Page");
  });


  app.get("/contact", (req, res) => {
    res.send("Contact Page");
  });


  app.listen(3000, () => {
    console.log("Question 4 Express server running on http://localhost:3000");
  });

}


// ======================================================
// QUESTION 5 — Express with Middleware
// ======================================================

function question5() {

  const app = express();


  // Middleware
  app.use((req, res, next) => {

    console.log(req.method, req.url);

    next();

  });


  // Routes

  app.get("/", (req, res) => {
    res.send("Home Page");
  });


  app.get("/products", (req, res) => {
    res.send("Our Products");
  });


  app.get("/login", (req, res) => {
    res.send("Login Page");
  });


  app.get("/contact", (req, res) => {
    res.send("Contact Page");
  });


  app.listen(3000, () => {
    console.log("Question 5 Express server running on http://localhost:3000");
  });

}


// ======================================================
// CHOOSE WHICH SERVER QUESTION TO RUN
// ======================================================
//
// Change the number below:
//
// 2 = Basic HTTP Server
// 3 = HTTP Routing
// 4 = Express Server
// 5 = Express + Middleware
//
// Question 1 runs automatically above.
// ======================================================

const questionToRun = 5;


if (questionToRun === 2) {

  question2();

} else if (questionToRun === 3) {

  question3();

} else if (questionToRun === 4) {

  question4();

} else if (questionToRun === 5) {

  question5();

}