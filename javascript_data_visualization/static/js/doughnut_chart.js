// -------------------------------------------------------------------------------------
// Creating a doughnut chart using Chart.js and updating it based on dropdown selection.
// -------------------------------------------------------------------------------------

let ctx = document.getElementById('ETF_doughnutChart').getContext('2d'); // get a reference to the canvas element

let lowRisk_data = [20, 30, 10, 5, 0]; // defining the low risk ETF % distribution
let medRisk_data = [15, 15, 15, 5, 5]; // defining the medium risk ETF % distribution
let highRisk_data = [10, 10, 10, 20, 50]; // defining the medium risk ETF % distribution

let colors = ['#A94064', 'aquamarine', 'teal', 'pink', 'purple'];
let bordercolor = '#ffffff';
let hoverBorderColor = '#000000';
let hoverOffset = 50;
let ETF_names = ['ETF 1', 'ETF 2', 'ETF 3', ' ETF 4', 'ETF 5'];

// Defining the data for the doughnut chart
let doughnut_data_LR = {
  labels: ETF_names, // need to modify this to grab the ETF info from etf_info df
  datasets: [{
      data: lowRisk_data, // Values for each slice (need to modify to grab the weights from latest date)
      backgroundColor: colors, // Colors for each slice
      borderColor: bordercolor,
      borderWidth: 5,
      hoverBorderColor: hoverBorderColor,
      hoverOffset: hoverOffset
  }]
};

let doughnut_data_MR = {
  labels: ETF_names, // need to modify this to grab the ETF info from etf_info df
  datasets: [{
      data: medRisk_data, // Values for each slice (need to modify to grab the weights from latest date)
      backgroundColor: colors, // Colors for each slice
      borderColor: bordercolor,
      borderWidth: 5,
      hoverBorderColor: hoverBorderColor,
      hoverOffset: hoverOffset
  }]
};

let doughnut_data_HR = {
  labels: ETF_names, // need to modify this to grab the ETF info from etf_info df
  datasets: [{
      data: highRisk_data, // Values for each slice (need to modify to grab the weights from latest date)
      backgroundColor: colors, // Colors for each slice
      borderColor: bordercolor,
      borderWidth: 5,
      hoverBorderColor: hoverBorderColor,
      hoverOffset: hoverOffset
  }]
};

// Defining the doughnut chart options
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
        return value;
      }
    }
  }
}

let ETF_doughnutChart;

function update_doughnutChart() {
  
  let selectedData = document.getElementById('dataSelector').value;
  let data;

  // Check which portfolio option was selected
  if (selectedData === 'lowRisk') {data = doughnut_data_LR;}
  else if (selectedData === 'medRisk') {data = doughnut_data_MR;}
  else {data = doughnut_data_HR;}

  // Check if the chart has already been created
  if (ETF_doughnutChart) {
    ETF_doughnutChart.data = data;
    ETF_doughnutChart.update();
  }
  else {
    ETF_doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });
  }
}

update_doughnutChart();