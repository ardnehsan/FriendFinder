//npm packages to giver server functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Tells node to create express server
var app = express();

//Sets an initial port
var PORT = process.env.PORT || 8000;

//Sets up Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Routes give server map of how to respond when users visit
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//Listener to start server
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});