// -------------------------------------------------------------------------------------
// Creating a gauge chart using Chart.js and updating it based on dropdown selection.
// -------------------------------------------------------------------------------------

let gauge_Chart = document.getElementById('gaugeChart').getContext('2d');

// Gauge chart data
let gauge_data = {
    datasets: [{
        data: [33, 33, 33],
        backgroundColor: ['#74B72E', '#FDFD96', '#D0312D'],
        borderWidth: 2,
    }]
};

let gauge_options = {
    circumference: 180,
    rotation: 270,
    legend: {
        display: false
    },
    cutout: '80%'
};

let gaugeChart = new Chart(gauge_Chart, {
    type: 'doughnut',
    data: gauge_data,
    options: gauge_options
});

