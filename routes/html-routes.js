var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/index.html"));
      });

      app.get("/createAccount", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/createAccount.html"));
      });

      app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/login.html"));
      });

      app.get("/news", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/news.html"));
      });

      app.get("/search", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/search.html"));
      });

    app.get("/dashboard", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/html/dashboard.html"));
      });
};

