const express = require("express");
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectDB = require("./db/connectDB");
const userRoutes = require("./routes/v1/userRoutes");
const categoryRoutes = require("./routes/v1/categoryRoutes");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

applyMiddleware(app);

// Import routes
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);

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

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Electron server in running on port ${port}`);
  });
};

main();
