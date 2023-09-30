// ---------------------------------------------------------------------------------
// Creating a line chart using Chart.js and updating it based on dropdown selection.
// ---------------------------------------------------------------------------------

let lineChart = document.getElementById('portfolioHistory_lineChart').getContext('2d'); // get a reference to the canvas element


// Dataset options
let YTD_data = [10, 20, 15, 30, 25]; 
let oneYear_data = [5, 10, 15, 20, 25] // default is YTD
let twoYear_data = [30, 25, 15, 20, 25] // default is YTD

let portfolioHistory_lineChart;



// Default datasets for YTD when a portfolio option is selected
// ------------------------------------------------------------
let YTD_dataset = {
    labels: ['January', 'February', 'March', 'April', 'May'], // need to be changed to dates from df
    datasets: [{
        label: 'Low Risk',
        data: YTD_data, // default is YTD
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
    }]
};



// Function that updates the data after a button press
function timeline_button_event(new_data) {
    
    portfolioHistory_lineChart.data.datasets[0].data = new_data;   // Update the chart's data with the new data
    //portfolioHistory_lineChart.labels = new_timeline;   // Update the chart's data with the new timeline
    portfolioHistory_lineChart.update();   // Redraw the chart

}



// Function that listens for a button press event
function update_timeline() {
    
    // Default chart
    portfolioHistory_lineChart = new Chart(lineChart, {
        type: 'line',
        data: YTD_dataset,
        //options: options
    });

    // Add a click event listener to the button
    let YTD_button = document.getElementById('YTD');
    let oneYear_button = document.getElementById('1Y');
    let twoYear_button = document.getElementById('2Y');
    
    YTD_button.addEventListener('click', () => { timeline_button_event(YTD_data) });
    oneYear_button.addEventListener('click', () => { timeline_button_event(oneYear_data) });    
    twoYear_button.addEventListener('click', () => { timeline_button_event(twoYear_data) });
    
}

update_timeline();
