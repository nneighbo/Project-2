var apiURL = "https://api.iextrading.com/1.0/stock/";
var apiURL2 = "/batch?types=quote,logo,news,chart&range=";

var chartConfig = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: 'rgb(196, 205, 250)',
            borderColor: 'rgb(80, 104, 224)',
            lineTension: 0
        }]
    },
    options: {
        maintainAspectRatio: false,
        title: {
            display: true
        },
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    beginAtZero: false
                }
            }],
            xAxes: [{
                display: true,
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
        },
    }
};

var topResultChart = document.getElementById("topResultChart").getContext('2d');
var topResultChart = new Chart(topResultChart, chartConfig);

var secondResultChart = document.getElementById("secondResultChart").getContext('2d');
var secondResultChart = new Chart(secondResultChart, chartConfig);

var thirdResultChart = document.getElementById("thirdResultChart").getContext('2d');
var thirdResultChart = new Chart(thirdResultChart, chartConfig);


    $(document).ready(function () {
        var stock = localStorage.getItem("search");
        console.log(stock)     
        firstGraph()
        secondGraph()
        thirdGraph()

    function firstGraph(){
        axios.get(apiURL + stock + apiURL2 + "5d").then(function(res){
         chart = res.data.chart;
         var percent = 0;
         var finalPercent;
         for (p = 0; p < chart.length; p++) {
             percent += chart[p].changePercent;
         }
         finalPercent = (percent / chart.length).toFixed(4);
         var quote = res.data.quote;
         $("#topResultHead").append(quote.companyName);
         $("#topResultSub").append(quote.symbol + " ^%" + finalPercent + " average over 5 days");
         let days1 = [
         ]
         for (y = 0; y < chart.length; y++) {
             days1.push(chart[y].date);
         }
         var chartArr1 = [
         ]
         for (x = 0; x < chart.length; x++) {
             chartArr1.push(chart[x].close);
         }
         for (i = 0; i < chart.length; i++) {
             addData(topResultChart, days1[i], chartArr1[i]);
         }
        }).catch(function(error){
            if (error) throw error
        });
    }

    function secondGraph(){
        axios.get(apiURL + stock + apiURL2 + "1m").then(function(res){
            chart = res.data.chart;
            var percent = 0;
            var finalPercent;
            for (p = 0; p < chart.length; p++) {
                percent += chart[p].changePercent;
            }
            finalPercent = (percent / chart.length).toFixed(4);
            var quote = res.data.quote;
            $("#secondResultHead").append(quote.companyName);
            $("#secondResultSub").append(quote.symbol + " ^%" + finalPercent + " average over 1 month");
            let days1 = [
            ]
            for (y = 0; y < chart.length; y++) {
                days1.push(chart[y].date);
            }
            var chartArr1 = [
            ]
            for (x = 0; x < chart.length; x++) {
                chartArr1.push(chart[x].close);
            }
            for (i = 0; i < chart.length; i+=8) {
                addData(secondResultChart, days1[i], chartArr1[i]);
            }
           }).catch(function(error){
               if (error) throw error
           });
    }

    function thirdGraph(){
        axios.get(apiURL + stock + apiURL2 + "ytd").then(function(res){
            chart = res.data.chart;
            console.log(res.data.chart)
            var percent = 0;
            var finalPercent;
            for (p = 0; p < chart.length; p++) {
                percent += chart[p].changePercent;
            }
            finalPercent = (percent / chart.length).toFixed(4);
            var quote = res.data.quote;
            $("#thirdResultHead").append(quote.companyName);
            $("#thirdResultSub").append(quote.symbol + " ^%" + finalPercent + " Year to Date");
            let days1 = [
            ]
            for (y = 0; y < chart.length; y++) {
                days1.push(chart[y].date);
            }
            var chartArr1 = [
            ]
            for (x = 0; x < chart.length; x++) {
                chartArr1.push(chart[x].close);
            }
            for (i = 0; i < chart.length; i+= 10) {
                addData(thirdResultChart, days1[i], chartArr1[i]);
            }
           }).catch(function(error){
               if (error) throw error
           });
    }
    
    function addData(graph, label, data) {
     graph.data.labels.push(label);
     graph.data.datasets[0].data.push(data);
     graph.update();
 
     if (graph.data.datasets[0].data.length === 5) {
         graph.data.datasets[0].data = [];
     }
     if (graph.data.labels.length === 5) {
         graph.data.labels = [];
     }
}

});    