// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// Creating a doughnut chart using Chart.js and updating it based on dropdown selection.
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------


// -----------------------
// Initializing variables.
// -----------------------

let doughnutChart = document.getElementById('pie_chart').getContext('2d'); // Get a reference to the canvas element


// [BOND, SPY, VGK, SCHE, VONG]
let lowRisk_weights = [63, 31, 2, 0, 4];
let medRisk_weights = [33, 42, 8, 5, 12];
let highRisk_weights = [17, 36, 15, 8, 24];

// defining the low risk ETF % distribution
let lowRisk_data = { 
  weight: lowRisk_weights,
  investmentAmount: lowRisk_weights.map(function(x) {return (x/100)*1000000})
}; 

// defining the medium risk ETF % distribution
let medRisk_data = {
  weight: medRisk_weights,
  investmentAmount: medRisk_weights.map(function(x) {return (x/100)*1000000})
}; 

console.log(medRisk_data.weight)

// defining the medium risk ETF % distribution
let highRisk_data = {
  weight: highRisk_weights,
  investmentAmount: highRisk_weights.map(function(x) {return (x/100)*1000000})
}; 


// Setting the configurable variables for the donut chart
let colors = ['#A94064', 'aquamarine', 'teal', 'pink', 'purple'];
let bordercolor = '#ffffff';
let hoverBorderColor = '#000000';
let hoverOffset = 20;
let ETF_names = ['BOND', 'SPY', 'VGK', 'SCHE', 'VONG'];
let borderWidth = 4;


// Function to make the portfolio labels
function portfolioLabels(portfolioData) {
  let labels = [];
  for (i=0; i<portfolioData.length; i++) {
    labels.push([ETF_names[i], '$' + portfolioData[i]]);
  }
  return labels;
}


// -----------------------------------------
// Defining the data for the doughnut chart.
// -----------------------------------------

let doughnut_data_LR = {
  labels: portfolioLabels(lowRisk_data.investmentAmount), // need to modify this to grab the ETF info from etf_info df
  datasets: [{
      data: lowRisk_data.weight, // Values for each slice (need to modify to grab the weights from latest date)
      backgroundColor: colors, // Colors for each slice
      borderColor: bordercolor,
      borderWidth: borderWidth,
      hoverBorderColor: hoverBorderColor,
      hoverOffset: hoverOffset
  }]
};

console.log(doughnut_data_LR.labels)


let doughnut_data_MR = {
  labels: portfolioLabels(medRisk_data.investmentAmount), // need to modify this to grab the ETF info from etf_info df
  datasets: [{
      data: medRisk_data.weight, // Values for each slice (need to modify to grab the weights from latest date)
      backgroundColor: colors, // Colors for each slice
      borderColor: bordercolor,
      borderWidth: borderWidth,
      hoverBorderColor: hoverBorderColor,
      hoverOffset: hoverOffset
  }]
};

let doughnut_data_HR = {
  labels: portfolioLabels(highRisk_data.investmentAmount), // need to modify this to grab the ETF info from etf_info df
  datasets: [{
      data: highRisk_data.weight, // Values for each slice (need to modify to grab the weights from latest date)
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
      display: false,
      labels: {
        color: 'rgb(255, 255, 255)'
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
  if (selectedData === 'Growth') {new_data = doughnut_data_HR;}
  else if (selectedData === 'Balanced') {new_data = doughnut_data_MR;}
  else {new_data = doughnut_data_LR;}

  // // Check if the chart has already been created
  // if (ETF_doughnutChart) {
  ETF_doughnutChart.data = new_data;
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