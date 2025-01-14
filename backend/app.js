const express = require('express');
const cors = require('cors');
const router = require('./src/routes/task.router');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:3000"], // Restrict to frontend domain
    credentials: true
}));

// Routes
app.use("/api/v1", router);

// Handle 404 errors
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
});

module.exports = app;
