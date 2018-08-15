// $( document ).ready(function() {
//     $("#loginLink").show()
//     $("#createAccountLink").show()
//     $("#logoutLink").show()
// });
$("#searchLogo").on("click",function(){
    window.location.replace("/search")
})

$("#v-pills-profile-tab").on("click",function(){
    window.location.replace("/news")
})

$("#v-pills-home-tab").on("click",function(){
    window.location.replace("/")
})

$("#v-pills-messages-tab").on("click",function(){
    window.location.replace("/dashboard")
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
})

