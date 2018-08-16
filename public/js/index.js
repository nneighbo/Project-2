var apiURL = "https://api.iextrading.com/1.0/stock/";
var apiURL2 = "/batch?types=quote,logo,news,chart&range=5d";
var topThree = [
]
var botThree = [

]
axios.get(apiURL + "/market/list/gainers").then(function (res) {
    topThree.push(res.data[0].symbol);
    topThree.push(res.data[1].symbol);
    topThree.push(res.data[2].symbol);
    runTopGraph()
}).catch(function (error) {
    if (error) throw error
});

axios.get(apiURL + "/market/list/losers").then(function (res) {
    botThree.push(res.data[0].symbol);
    botThree.push(res.data[1].symbol);
    botThree.push(res.data[2].symbol);
    runBotGraph()
}).catch(function (error) {
    if (error) throw error
});

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

var stock = "aapl";
var chart;

var topThreeOne = document.getElementById("topThreeOne").getContext('2d');
var topThreeOne = new Chart(topThreeOne, chartConfig);

var topThreeTwo = document.getElementById("topThreeTwo").getContext('2d');
var topThreeTwo = new Chart(topThreeTwo, chartConfig);

var topThreeThree = document.getElementById("topThreeThree").getContext('2d');
var topThreeThree = new Chart(topThreeThree, chartConfig);

var botThreeOne = document.getElementById("botThreeOne").getContext('2d');
var botThreeOne = new Chart(botThreeOne, chartConfig);

var botThreeTwo = document.getElementById("botThreeTwo").getContext('2d');
var botThreeTwo = new Chart(botThreeTwo, chartConfig);

var botThreeThree = document.getElementById("botThreeThree").getContext('2d');
var botThreeThree = new Chart(botThreeThree, chartConfig);

function runTopGraph() {
    axios.get(apiURL + topThree[0] + apiURL2).then(function (res) {
        chart = res.data.chart;
        var percent = 0;
        var finalPercent;
        for (p = 0; p < chart.length; p++) {
            percent += chart[p].changePercent;
        }
        finalPercent = (percent / chart.length).toFixed(4);
        var quote = res.data.quote;
        $(".topOneHead").append(quote.companyName);
        $(".topOneSub").append(quote.symbol + " ^%" + finalPercent + " average over 5 days");
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
            addData(topThreeOne, days1[i], chartArr1[i]);
        }
    }).catch(function (error) {
        if (error) throw error
    });


    axios.get(apiURL + topThree[1] + apiURL2).then(function (res) {
        chart = res.data.chart;
        var percent = 0;
        var finalPercent;
        for (p = 0; p < chart.length; p++) {
            percent += chart[p].changePercent;
        }
        finalPercent = (percent / chart.length).toFixed(4);
        var quote = res.data.quote;
        $(".topTwoHead").html(quote.companyName);
        $(".topTwoSub").html(quote.symbol + " ^%" + finalPercent + " average over 5 days");
        let days = [
        ]
        for (y = 0; y < chart.length; y++) {
            days.push(chart[y].date);
        }
        var chartArr = [
        ]
        for (x = 0; x < chart.length; x++) {
            chartArr.push(chart[x].close);
        }
        for (i = 0; i < chart.length; i++) {
            addData(topThreeTwo, days[i], chartArr[i]);
        }
    }).catch(function (error) {
        if (error) throw error;
    });

    axios.get(apiURL + topThree[2] + apiURL2).then(function (res) {
        chart = res.data.chart;
        var percent = 0;
        var finalPercent;
        for (p = 0; p < chart.length; p++) {
            percent += chart[p].changePercent;
        }
        finalPercent = (percent / chart.length).toFixed(4);
        var quote = res.data.quote;
        $(".topThreeHead").append(quote.companyName);
        $(".topThreeSub").append(quote.symbol + " ^%" + finalPercent + " average over 5 days");
        let days = [
        ]
        for (y = 0; y < chart.length; y++) {
            days.push(chart[y].date);
        }
        var chartArr = [
        ]
        for (x = 0; x < chart.length; x++) {
            chartArr.push(chart[x].close);
        }
        for (i = 0; i < chart.length; i++) {
            addData(topThreeThree, days[i], chartArr[i]);
        }
    }).catch(function (error) {
        if (error) throw error
    });

}
function runBotGraph() {
    axios.get(apiURL + botThree[0] + apiURL2).then(function (res) {
        chart = res.data.chart;
        var percent = 0;
        var finalPercent;
        for (p = 0; p < chart.length; p++) {
            console.log(chart[p].changePercent);
            percent += chart[p].changePercent;
        }
        finalPercent = (percent / chart.length).toFixed(4);
        var quote = res.data.quote;
        $(".botOneHead").append(quote.companyName);
        $(".botOneSub").append(quote.symbol + " ^%" + finalPercent + " average over 5 days");
        let days = [
        ]
        for (y = 0; y < chart.length; y++) {
            days.push(chart[y].date);
        }
        var chartArr = [
        ]
        for (x = 0; x < chart.length; x++) {
            chartArr.push(chart[x].close);
        }
        console.log("1", days, chartArr)
        for (i = 0; i < chart.length; i++) {
            addData(botThreeOne, days[i], chartArr[i]);
        }
    }).catch(function (error) {
        if (error) throw error
    });

    axios.get(apiURL + botThree[1] + apiURL2).then(function (res) {
        chart = res.data.chart;
        var percent = 0;
        var finalPercent;
        for (p = 0; p < chart.length; p++) {
            console.log(chart[p].changePercent);
            percent += chart[p].changePercent;
        }
        finalPercent = (percent / chart.length).toFixed(4);
        var quote = res.data.quote;
        $(".botTwoHead").append(quote.companyName);
        $(".botTwoSub").append(quote.symbol + " ^%" + finalPercent + " average over 5 days");
        console.log(chart);
        let days = [
        ]
        for (y = 0; y < chart.length; y++) {
            days.push(chart[y].date);
        }
        var chartArr = [
        ]
        for (x = 0; x < chart.length; x++) {
            chartArr.push(chart[x].close);
        }
        console.log("2", days, chartArr);
        for (i = 0; i < chart.length; i++) {
            addData(botThreeTwo, days[i], chartArr[i]);
        }
    }).catch(function (error) {
        if (error) throw error;
    });

    axios.get(apiURL + botThree[2] + apiURL2).then(function (res) {
        chart = res.data.chart;
        var percent = 0;
        var finalPercent;
        for (p = 0; p < chart.length; p++) {
            console.log(chart[p].changePercent);
            percent += chart[p].changePercent;
        }
        finalPercent = (percent / chart.length).toFixed(4);
        var quote = res.data.quote;
        $(".botThreeHead").append(quote.companyName);
        $(".botThreeSub").append(quote.symbol + " ^%" + finalPercent + " average over 5 days");
        console.log(chart);
        let days = [
        ]
        for (y = 0; y < chart.length; y++) {
            days.push(chart[y].date);
        }
        var chartArr = [
        ]
        for (x = 0; x < chart.length; x++) {
            chartArr.push(chart[x].close);
        }
        console.log("3", days, chartArr);
        console.log(botThreeThree.data.datasets[0].data);
        for (i = 0; i < chart.length; i++) {
            addData(botThreeThree, days[i], chartArr[i]);
        }
    }).catch(function (error) {
        if (error) throw error
    });
}

function addData(graph, label, data) {
    graph.data.labels.push(label);
    console.log("data data", data)
    graph.data.datasets[0].data.push(data);
    console.log(graph + " data: " + graph.data.datasets[0].data)
    console.log(graph + "date:" + graph.data.labels)

    graph.update();

    if (graph.data.datasets[0].data.length === 5) {
        graph.data.datasets[0].data = [];
    }
    if (graph.data.labels.length === 5) {
        graph.data.labels = [];
    }

    // graph.data.datasets.forEach((dataset) => {

    //     dataset.data.push(data);
    // });
}


$.get("/api/user_data", function (data) {
    if (data.email === undefined) {
        $("#loginLink").show()
        $("#createAccountLink").show()
        $("#logoutLink").hide()
    } else {
        $("#loginLink").hide()
        $("#createAccountLink").hide()
        $("#logoutLink").show()
    }
})

