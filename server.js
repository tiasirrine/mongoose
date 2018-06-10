// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Require axios and cheerio. This makes the scraping possible

var cheerio = require("cheerio"); //scraping tool
var axios = require("axios"); //scraping tool

// Require all models
//var db = require("./models");

// Initialize Express
var app = express();
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

// Express-Handlebars
//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// Database Configuration with Mongoose
// ---------------------------------------------------------------------------------------------------------------
// Connect to localhost if not a production environment
if (process.env.NODE_ENV == "production") {
  mongoose.connect("");
} else {
  mongoose.connect("mongodb://localhost/onion-scraper");

  var db = mongoose.connection;

  // Show any Mongoose errors
  db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });

  // Once logged in to the db through mongoose, log a success message
  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });
}

//Routes will be defined here

// Initalize App
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("Running on port: " + PORT);
});
