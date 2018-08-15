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
});

var apiURL = "https://api.iextrading.com/1.0/stock/market/news/last/5";

axios.get(apiURL).then(function(res){
    console.log(res.data[0].headline);
    console.log(res.data[0].datetime);
    console.log(res.data[0].source);
    console.log(res.data[0].url);
    console.log(res.data[0].summary);

    $("#art-head-one").prepend(res.data[0].headline)
    $("#art-source-one").prepend(res.data[0].source + " " + res.data[0].datetime)
    $("#art-sum-one").prepend(res.data[0].summary)

    $("#art-one").on("click", function(e){
        window.open(res.data[0].url, "_blank");
    });

    $("#art-head-two").prepend(res.data[1].headline)
    $("#art-source-two").prepend(res.data[1].source + " " + res.data[1].datetime)
    $("#art-sum-two").prepend(res.data[1].summary)

    $("#art-two").on("click", function(e){
        window.open(res.data[1].url, "_blank");
    });

    $("#art-head-three").prepend(res.data[2].headline)
    $("#art-source-three").prepend(res.data[2].source + " " + res.data[2].datetime)
    $("#art-sum-three").prepend(res.data[2].summary)

    $("#art-three").on("click", function(e){
        window.open(res.data[2].url, "_blank");
    });
});