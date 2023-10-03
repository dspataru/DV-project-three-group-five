// ---------------------------------------------------------------------------------
// Creating a line chart using Chart.js and updating it based on dropdown selection.
// ---------------------------------------------------------------------------------

let lineChart = document.getElementById('portfolioHistory_lineChart').getContext('2d'); // get a reference to the canvas element

// ----------------
// Dataset options.
// ----------------

let LR_historyData = [915, 925, 900, 950, 1000, 935, 964, 800, 817, 830, 850, 887]; // default is YTD
let MR_historyData = Array.from({length: 12}, () => Math.floor(Math.random() * 40));
let HR_historyData = Array.from({length: 12}, () => Math.floor(Math.random() * 40));

let test_data1 = Array.from({length: 12}, () => Math.floor(Math.random() * 40));
let test_data2 = Array.from({length: 12}, () => Math.floor(Math.random() * 40));
let test_data3 = Array.from({length: 12}, () => Math.floor(Math.random() * 40));


//let portfolioHistory_lineChart;


// ------------------------------------------------------------
// Default dataset for YTD when a portfolio option is selected.
// ------------------------------------------------------------

let lowRisk_lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // need to be changed to dates from df
    datasets: [{
        label: 'Conservative',
        data: LR_historyData,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
    }]
};

let medRisk_lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // need to be changed to dates from df
    datasets: [{
        label: 'Balanced',
        data: MR_historyData,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
    }]
};

let highRisk_lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // need to be changed to dates from df
    datasets: [{
        label: 'Growth',
        data: HR_historyData,
        borderColor: 'rgb(75, 192, 192)',
        borderWidth: 2,
    }]
};

// Generate default graph
let portfolioHistory_lineChart = new Chart(lineChart, {
    type: 'line',
    data: lowRisk_lineData,
    options: {
        resposive: true
    }
});


// ----------------------------------------------------
// Function that updates the data after a button press.
// ----------------------------------------------------

function timeline_button_event(new_data) {
    
    portfolioHistory_lineChart.data.datasets[0].data = new_data;   // Update the chart's data with the new data
    //portfolioHistory_lineChart.labels = new_timeline;   // Update the chart's data with the new timeline
    portfolioHistory_lineChart.update();   // Redraw the chart

}



// -----------------------------------------------
// Function that listens for a button press event.
// -----------------------------------------------

function update_timeline() {
    
    // Add a click event listener to the button
    let YTD_button = document.getElementById('YTD');
    let oneYear_button = document.getElementById('1Y');
    let twoYear_button = document.getElementById('2Y');

    console.log(YTD_button);
    
    YTD_button.addEventListener('click', () => { timeline_button_event(test_data1) });
    oneYear_button.addEventListener('click', () => { timeline_button_event(test_data2) });    
    twoYear_button.addEventListener('click', () => { timeline_button_event(test_data3) });
    
}


function update_lineChart(selectedData) {

    let new_data;

    // Check which portfolio option was selected
    if (selectedData === 'Growth') {new_data = highRisk_lineData;}
    else if (selectedData === 'Balanced') {new_data = medRisk_lineData;}
    else {new_data = lowRisk_lineData;}
  
    portfolioHistory_lineChart.data = new_data;
    portfolioHistory_lineChart.update();

}
