$(document).ready(function(){

    
    var logIn = $("#logIn");
    var height = $("#logIn").css("height");
    logIn.css("height","0px");
    // $("#logIn").css("display","flex");

    $("#navDropDown").on("click", function(){
        console.log("Clicked");
       

        if (logIn.css("display") === "none") {
            console.log(logIn.css("display"));
            logIn.css("display", "flex");
            logIn.animate({
                height: height
            });
        } else if (logIn.css("display") === "flex") {
            console.log(logIn.css("display"));
            logIn.animate({
                height: 0
            }, null, () => {
                logIn.css("display", "none");
            });
            
        }
    })
})