var ctx = document.getElementById("bigChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
            data: [1, 13, 9, 5, 2, 3],
            backgroundColor: 'rgb(196, 205, 250)',
            borderColor: 'rgb(80, 104, 224)',
            lineTension: 0
        }]
    },
    options: {

        title: {
            display: false
        },

        scales: {
            yAxes: [{
                display: false,
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display: false,
            }],

            gridLines: {
                display: false
            }
        },

        legend: {
            display: false,
        },

        gridLines: {
            display: false,
        }
    }
});

$(document).ready(function(){
     // Get the height of contact 
    //  var contactHeight = $("#contact").height();
    //  $("#contact").css("height", "0px");
    //  $("#contact").show();
 
    //  $("#contactLink").on("click", function () {
    //      if ($("#contact").height() === contactHeight) {
    //          $("#contact").animate({
    //              height: 0
    //          }, 200)
    //      } else if ($("#contact").height() === 0) {
    //          $("#contact").animate({
    //              height: contactHeight
    //          }, 200);
    //      }
    //  });

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