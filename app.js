const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a MongoDB schema for the data
const DataSchema = new mongoose.Schema({
  data: Object,
});

// Create a MongoDB model from the schema
const Data = mongoose.model("Data", DataSchema);

// Route for storing data in MongoDB
app.post("/data", async (req, res) => {
  const newData = new Data({ data: req.body });
  let response = await newData.save();
  console.log(response);
  res.send("Data saved successfully!");
});

// Start the Express.js server
const port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
module.exports = app;
