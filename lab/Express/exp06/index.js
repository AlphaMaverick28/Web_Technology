// Introduction to Middleware
// Middleware is a key part of Node.js web applications, particularly in Express.js.

// It provides a way to add and reuse common functionality across your application's routes and endpoints.
// Middleware is a function in Express.js that runs between the request and the response.

// 🧠 Simple Definition

// 👉 Middleware = a function that processes a request before sending a response
const express = require('express');
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Request received at:", new Date());
    next();
});

// Routing
app.get('/', (req, res) => {
    res.send("Welcome to Home Page");
});

app.get('/about', (req, res) => {
    res.send("This is About Page");
});

app.get('/contact', (req, res) => {
    res.send("This is Contact Page");
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});