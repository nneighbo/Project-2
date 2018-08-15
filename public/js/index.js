// $( document ).ready(function() {
//     $("#loginLink").show()
//     $("#createAccountLink").show()
//     $("#logoutLink").show()
// });
$("#searchLogo").on("click",function(){
    window.location.replace("/search")
})

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

