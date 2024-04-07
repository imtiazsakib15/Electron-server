const express = require("express");
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
const userRoutes = require("./routes/v1/userRoutes");
const authRoutes = require("./routes/v1/authRoutes");
const categoryRoutes = require("./routes/v1/categoryRoutes");
const productRoutes = require("./routes/v1/productRoutes");

require("dotenv").config();
const app = express();

applyMiddleware(app);

// Import routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// Health checking routes
app.get("/health", (req, res) => {
  res.send("Electron server is running");
});

// Handling unhandling routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use(globalErrorHandler);

module.exports = app;
