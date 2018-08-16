$(document).ready(() => {
    var newid;
    $.get("/api/user_data", function (data) {
        if (data.email === undefined) {
            console.log("user not signed in.")
        } else {
            newid=data.id
        }
    })

    $(".star").on("click", function () {
        var obj = $(this);
        var header = $(obj.parent().parent().children(".stockHeadLeft").children(".stockHead"));
       var sub = $(obj.parent().parent().children(".stockHeadLeft").children(".stockSub"));
       console.log(header.text(), sub.text());
       var addStock =sub.text()
       var otherStock = addStock.split("^")
       var newStock = otherStock[0].trim()
       console.log(newStock)
        // console.log(this)
        var toggle = obj.data("toggle");

        createStock(newStock, newid);
        console.log(obj.parent().parent().find("p").text);

        if (toggle === "unselected") {
            obj.data("toggle", "selected");
            obj.text("star");
        } else if (toggle === "selected") {
            obj.data("toggle", "unselected");
            obj.text("star_border");
        }
    })

    
});


function createStock(symbol, UserId) {
    $.post("/api/dashboard", {
      symbol: symbol,
      UserId: UserId
    }).then(function(data) {
        console.log("Data: " + data)
    //   window.location.replace("/dashboard");
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(function(err){
        if (err) throw err
    });
  }