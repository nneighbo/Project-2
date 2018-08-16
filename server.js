var express = require("express");
var bodyParser = require("body-parser");
var axios = require("axios")
var session = require("express-session");
var passport = require("./config/middleware/stock");

var app = express();
var PORT = process.env.PORT || 8080;

var exphbs = require("express-handlebars");

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/profile.js")(app);
require("./routes/axios.js")(axios);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  