$(document).ready(function(){

    $("#navDropDown").on("click", function(){
        console.log("Clicked");
        var logIn = $("#logIn");
        // logIn.css("height","0px");
        if (logIn.css("display") === "none") {
            console.log(logIn.css("display"));
            logIn.css("display", "flex");
            logIn.animate({
                height: 200
            });
        } else if (logIn.css("display") === "flex") {
            console.log(logIn.css("display"));
            logIn.animate({
                height: 0
            });
            logIn.css("display", "none");
        }
    })
})