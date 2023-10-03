// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// Creating a doughnut chart using Chart.js and updating it based on dropdown selection.
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------


// -----------------------
// Initializing variables.
// -----------------------

let doughnutChart = document.getElementById('pie_chart').getContext('2d'); // Get a reference to the canvas element


let lowRisk_data = [20, 30, 10, 5, 0]; // defining the low risk ETF % distribution
let medRisk_data = [15, 15, 15, 5, 5]; // defining the medium risk ETF % distribution
let highRisk_data = [10, 10, 10, 20, 50]; // defining the medium risk ETF % distribution

// Setting the configurable variables for the donut chart
let colors = ['#A94064', 'aquamarine', 'teal', 'pink', 'purple'];
let bordercolor = '#ffffff';
let hoverBorderColor = '#000000';
let hoverOffset = 50;
let ETF_names = ['ETF 1', 'ETF 2', 'ETF 3', ' ETF 4', 'ETF 5'];
let borderWidth = 4;



// -----------------------------------------
// Defining the data for the doughnut chart.
// -----------------------------------------

let doughnut_data_LR = {
  labels: ETF_names, // need to modify this to grab the ETF info from etf_info df
  datasets: [{
      data: lowRisk_data, // Values for each slice (need to modify to grab the weights from latest date)
      backgroundColor: colors, // Colors for each slice
      borderColor: bordercolor,
      borderWidth: borderWidth,
      hoverBorderColor: hoverBorderColor,
      hoverOffset: hoverOffset
  }]
};


// ------------------------------------
// Defining the doughnut chart options.
// ------------------------------------

let options = {
  layout: {
    padding: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }
  },
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      color: 'white',
      font: {
        weight: 'bold',
        side: '14',
      },
      formatter: (value, context) => {
        value = ETF_names;
        return value + '%';
      }
    }
  }
}



// --------------------------------------------------------------------------------------------------------------
// Initializing the doughnut chart: The doughnut chart is initially populated with the low-risk portfolio option.
// --------------------------------------------------------------------------------------------------------------

let ETF_doughnutChart = new Chart(doughnutChart, {
  type: 'doughnut',
  data: doughnut_data_LR,  // low risk ETF data
  options: options
});



// -----------------------------------------------------------------------
// Function to update the doughnut chart as the drop down menu is toggled.
// -----------------------------------------------------------------------

function update_doughnutChart(selectedData) {
  
  let new_data;

  // Check which portfolio option was selected
  if (selectedData === 'highRisk') {new_data = highRisk_data;}
  else if (selectedData === 'medRisk') {new_data = medRisk_data;}
  else {new_data = lowRisk_data;}

  // // Check if the chart has already been created
  // if (ETF_doughnutChart) {
  ETF_doughnutChart.data.datasets.data = new_data;
  ETF_doughnutChart.update();
  // }
  // else {
  //   ETF_doughnutChart = new Chart(doughnutChart, {
  //     type: 'doughnut',
  //     data: data,
  //     options: options
  //   });
  // }
}