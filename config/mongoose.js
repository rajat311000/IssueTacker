//require the library
const mongoose = require("mongoose");
require("dotenv").config();

const mongodbUrl ='mongodb+srv://rajatjain3276:zGvqfEd9uC7KneW7@cluster0.6k3zno5.mongodb.net/?retryWrites=true&w=majority';

//connect to the database
mongoose.connect(mongodbUrl);

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on("error", function (err) {
  console.log(err.message);
});

//up and running then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports = db;
