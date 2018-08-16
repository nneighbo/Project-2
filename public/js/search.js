var apiURL = "https://api.iextrading.com/1.0/stock/";
var apiURL2 = "/batch?types=quote,logo,news,chart&range=5d";

$("#navSearchButton").on("click", function(e){
   console.log("working")
   var search = $("#searchForm").val().trim()
   localStorage.setItem("search", search);
});

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
})