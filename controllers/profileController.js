var express = require('express');

var router = express.Router();

var db = require('../models');

var axios = require('axios');

var isAuthenticated = require("../config/middleware/isAuthenticated.js");

var addId;

var userStocks = [];

var queryURL = "https://api.iextrading.com/1.0/stock/";
var queryURL2 = "/batch?types=quote";


var handleStocks = {
    handleProfile: []
}
router.get("/dashboard", isAuthenticated, function (req, res) {
    if(req.user){
        addId = req.user.id;
        db.Stock.findAll({}).then(data =>{
            for(i = 0; i < data.length; i++){
                if(addId === data[i].UserId){
                    userStocks.push(data[i].symbol)
                }
            }
            for(i = 0; i < userStocks.length; i++){
                axios.get(queryURL + userStocks[i] + queryURL2).then(res => {
                        handleStocks.handleProfile.push({
                        companyName: res.data.quote.companyName,
                        symbol: res.data.quote.symbol,
                        rtp: res.data.quote.iexRealtimePrice,
                        change: res.data.quote.change,
                        week52High: res.data.quote.week52High,
                        week52Low: res.data.quote.week52Low
                    })
                }).catch(error =>{
                    if(error) throw error
                });
            }
            res.render("dashboard", handleStocks);
        });
    }
    console.log(handleStocks.handleProfile)
});

module.exports = router;