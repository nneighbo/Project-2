$.get("/api/user_data",function(data){
    if(data.email===undefined){
        $("#loginLink").show()
        $("#createAccountLink").show()
        $("#logoutLink").hide()
    }else{
        $("#loginLink").hide()
        $("#createAccountLink").hide()
        $("#logoutLink").show()
    }
    console.log(data.email)
})

var id;
var arryStocks=[]
$.get("/api/user_data",function(data){
    if(data.email===undefined){
        $("#loginLink").show()
        $("#createAccountLink").show()
        $("#logoutLink").hide()
    }else{
        id=data.id
        // console.log(id)
        $("#loginLink").hide()
        $("#createAccountLink").hide()
        $("#logoutLink").show()
    }

}).then(function(e){
    var stocks = [];

// The code below handles the case where we want to get blog posts for a specific author
// Looks for a query param in the url for author_id
var url = window.location.search;
var userId;
if (url.indexOf("?user_id=") !== -1) {
  userId = url.split("=")[1];
  getUsers(userId);
}
// If there's no authorId we just get all posts as usual
else {
  getUsers();
}


function getUsers(user) {
    userId = user || "";
    if (userId) {
      userId = "/?user_id=" + userId;
    }
    $.get("/api/stocks" + userId, function(data) {
        for (var i = 0; i<data.length;i++){
            if(data[i].UserId===id){
                var temp =data[i].symbol
                stocks.push(temp)
            }
        }
        for(var i = 0;i<stocks.length;i++){
            var search = stocks[i]
            var queryURL="https://api.iextrading.com/1.0/stock/" + search + "/batch?types=quote"

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(res){
                $(".stockHead").append("<br>" + res.quote.companyName + "<br>" + "<strong>Symbol</strong> " + res.quote.symbol + " " + "<strong>Price</strong> " + " " + res.quote.iexRealtimePrice + " " + "<strong>Change</strong> " + res.quote.change + " " + "<strong>Last 52 High</strong> " + res.quote.week52High + " " + "<strong>Last 52 Low</strong> " + res.quote.week52Low + "<br><hr>")
                console.log(res)
            })
         }
    
    });
  }

})