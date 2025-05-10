// creating all the necessary files and directories for the project
const express = require("express");
const dotenv = require("dotenv");

// configuring the environment variables
const app = express();
dotenv.config();

// importing the routes (endpoints)
app.get("/", (req, res) => {
  res.send("API is running..");
});

// Port management
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is started ${PORT}`));
