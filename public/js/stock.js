var stock = "aapl";

var apiURL = "https://api.iextrading.com/1.0/stock/";  
var apiURL2 = "/batch?types=quote,logo,news,chart&range=1y"

axios.get(apiURL + stock + apiURL2).then(function(res){
   console.log(res.data.quote.companyName);
   console.log(res.data.quote.open);
   console.log(res.data.quote.high);
   console.log(res.data.quote.low);
   console.log(res.data.quote.iexRealtimePrice);
   console.log(res.data.quote.change);
   console.log(res.data.quote.changePercent);
   console.log(res.data.quote.marketCap);
   console.log(res.data.logo.url);

   var comp = $("<h4>").append(res.data.quote.companyName);
   var open = $("<h4>").append(res.data.quote.open);
   var high = $("<h4>").append(res.data.quote.high);
   var low = $("<h4>").append(res.data.quote.low);
   var iex = $("<h4>").append(res.data.quote.iexRealtimePrice);
   var change = $("<h4>").append(res.data.quote.change);
   var perc = $("<h4>").append(res.data.quote.changePercent);
   var cap = $("<h4>").append(res.data.quote.marketCap);
   var logo = $("<h4>").append(res.data.logo.url);
    
   $("#test-content").prepend(comp);
   $("#test-content").prepend(open);
   $("#test-content").prepend(high);
   $("#test-content").prepend(low);
   $("#test-content").prepend(iex);
   $("#test-content").prepend(change);
   $("#test-content").prepend(perc);
   $("#test-content").prepend(cap);
   $("#test-content").prepend(logo);
   var sum = 0;
    for(var i = 0; i < res.data.chart.length; i++){
        sum += parseInt(res.data.chart[i].close, 10);
        console.log(res.data.chart[i].close)
    }
    var average = sum/res.data.chart.length;
    console.log(res.data.chart[1])
    console.log(res.data.chart[2])
}).catch(function(err){
    console.log(err)
});