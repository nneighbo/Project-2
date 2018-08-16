var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){
    
    app.get("/", function(req, res) {
        // res.sendFile(path.join(__dirname, "../public/html/index.html"));
        res.render("index",{});
      });

      app.get("/createAccount", function(req, res) {
        // res.sendFile(path.join(__dirname, "../public/html/createAccount.html"));
        res.render("createAccount");
      });

      app.get("/login", function(req, res) {
        // res.sendFile(path.join(__dirname, "../public/html/login.html"));
        res.render("login")
      });

      app.get("/news", function(req, res) {
        // res.sendFile(path.join(__dirname, "../public/html/news.html"));
        res.render("news");
      });

      app.get("/search", function(req, res) {
        // res.sendFile(path.join(__dirname, "../public/html/search.html"));
        res.render("search");
      });

    app.get("/dashboard", isAuthenticated, function(req, res) {
        // res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));
        res.render("dashboard");
      });
};

