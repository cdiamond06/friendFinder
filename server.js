var express = require("express");
var bodyParser = require("body-parser");
// allows us to easily grab the data associated with our posts
var path = require("path");

var app = express();

var port =  process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function(){
	console.log("App is listening on port: " + port);
})