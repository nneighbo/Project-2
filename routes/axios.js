var db = require("../models");

module.exports = function(axios){

var stock = "aapl";

var apiURL = "https://api.iextrading.com/1.0/stock/" + stock + "/batch?types=quote,logo,news,chart&range=1y"

axios.get(apiURL).then(function(res){
   return res.data
}).catch(function(err){
    // console.log(err)
});

}