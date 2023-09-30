// Code was taken from: https://jscharting.com/editor/#name=CircularMarker.htm
// and modified to meet the requirements of the dashboard.

let description = "<span style='fontSize: 35'>Low Risk</span>";
let pointer_colour = '#77E6B4';
let pointer_value = 425;

// Function to update the guage when different portfolios are selected
function update_riskMeter() {
  let selectedData = document.getElementById('dataSelector').value;

  // Check which portfolio option was selected
  if (selectedData === 'highRisk') {
    description = "<span style='fontSize: 35'>High Risk</span>";
    pointer_colour = '#D0312D';
    pointer_value = 750;
  }
  else if (selectedData === 'medRisk') {
    description = "<span style='fontSize: 35'>Medium Risk</span>";
    pointer_colour = '#FFD221';
    pointer_value = 600;
  }
  else {
    description = "<span style='fontSize: 35'>Low Risk</span>";
    pointer_colour = '#77E6B4';
    pointer_value = 425;
  }


  let gauge_Chart = initialize_gaugeChart();
  gauge_Chart.draw();

}



// Initialize the low risk option for the risk meter (gauge chart)
function initialize_gaugeChart() {
  gauge_chart = new JSC.chart('gaugeChart', { 
    type: 'gauge ', 
    legend_visible: false, 
    chartArea_boxVisible: false, 
    xAxis: { 
      /*Used to position marker on top of axis line.*/
      scale: { range: [0, 1], invert: true } 
    }, 
    palette: { 
      pointValue: '%yValue',
      ranges: [ 
        { value: 0, color: '#77E6B4' }, 
        { value: 1/3, color: '#FFD221' }, 
        { value: 2/3, color: '#D0312D' }, 
        { value: 1, color: '#D0312D' }, 
      ] 
    }, 
    yAxis: { 
      defaultTick: { padding: 13, enabled: false }, 
      line: { 
        width: 15, 
        breaks_gap: 0.03, 
        color: 'smartPalette'
      }, 
      scale: { range: [350, 850] } 
    }, 
    defaultSeries: { 
      opacity: 1, 
      shape: { 
        label: { 
          align: 'center', 
          verticalAlign: 'middle'
        } 
      } 
    }, 
    series: [ 
      { 
        type: 'marker', 
        name: 'Score', 
        shape_label: { 
          text: 
            description,  // this text gets updated when the portfolio changes
          style: { fontSize: 48 } 
        }, 
        defaultPoint: { 
          tooltip: '%yValue', 
          marker: { 
            outline: { 
              width: 10, 
              color: pointer_colour  // this colour gets updated when the portfolio changes
            }, 
            fill: 'white', 
            type: 'circle', 
            visible: true, 
            size: 30 
          } 
        }, 
        points: [[1, pointer_value]]  // this gets updated to indicate the level of risk
      } 
    ] 
  });
} 

//let gauge_chart;
//initialize_gaugeChart();
update_riskMeter();