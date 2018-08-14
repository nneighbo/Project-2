$(document).ready(function(){

    $("#navDropDown").on("click", function(){
        var logIn = $("#logIn");
        logIn.css("height","0px");
        if (logIn.css("display") === "none") {
            logIn.css("display", "flex");
            logIn.animate({
                height: 200
            });
        } else if (logIn.css("display") === "flex") {
            logIn.animate({
                height: 0
            });
            logIn.css("display", "none");
        }
    })
})