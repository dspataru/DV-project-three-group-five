// Initializing charts with conservative portfolio
<<<<<<< HEAD
let doughnutChart = document.getElementById('pie_chart').getContext('2d');
let lineChart = document.getElementById('portfolioHistory_lineChart').getContext('2d'); // get a reference to the canvas element

let weights_url = 'https://gayatrijohn3-d498f365-c54e-4381-857d-9f4ac180634e.socketxp.com/api/portfolio_weights/';
let portfolio_url = 'https://gayatrijohn3-d498f365-c54e-4381-857d-9f4ac180634e.socketxp.com/api/portfolio_data/';
let ETF_url = 'https://gayatrijohn3-d498f365-c54e-4381-857d-9f4ac180634e.socketxp.com/api/' // UPDATE

let p = 'conservative';

// initialize the donut chart with conservative data
d3.json(weights_url + p)
  .then(function(data) {

    console.log(data);

    const values = Object.values(data).filter((value, key) => key !== 'portfolio');
    intializeDonutChart(values);
=======
let p = 'conservative';

let lineChart = document.getElementById('portfolioHistory_lineChart').getContext('2d'); // get a reference to the canvas element

let base_url = 'https://nikitagahoi-15458a97-2869-4864-b6cb-5c159da0a651.socketxp.com/api/'

let weights_url = base_url+'portfolio_weights/';
let portfolio_url = base_url+'portfolio_data/';
let ETF_url = base_url+'price_info/' 

let ETF_doughnutChart;

d3.json(weights_url+p).then(function(data){
  console.log(data);
})
//let portfolioHistory_lineChart;

//initialize the donut chart with conservative data
d3.json(weights_url + p)
  .then(function(data) {

    const values = Object.values(data).filter((value, key) => key !== 'portfolio');
    initializeDonutChart(values.slice(0,5));
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf

  })
  .catch(function(error) {
        // Handle any errors that occur during the request
        console.error('Error:', error);
  });


<<<<<<< HEAD


=======
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
// initialize the line chart with conservative & YTD data
d3.json(portfolio_url + p)
    .then(function(data) {

        // Handle the JSON data here
<<<<<<< HEAD
        console.log(data)
=======
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf

        data.forEach((item) => {
            item.dateObj = new Date(item.date);
            });

            // Sort the list of dictionaries by date in ascending order
            data.sort((a, b) => a.dateObj - b.dateObj);

            // Remove the dateObj key if you don't need it anymore
            data.forEach((item) => {
                delete item.dateObj;
            });

<<<<<<< HEAD
            // Now, data is sorted by date in ascending order
            console.log(data);
=======
            // below the data is sorted by date in ascending order
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf

            portfolio_values = [];
            portfolio_dates = [];

            data.map(function(item){
                portfolio_values.push(item[`${p}_portfolio_value`])
                portfolio_dates.push(item.date)
            })

<<<<<<< HEAD
            let dates = portfolio_dates.map(dateStr => new Date(dateStr));
            
            initializeLineChart(portfolio_values, dates); // making the line chart
            initializePortfolioValue(portfolio_values); // populating the current portfolio value
=======
            //let dates = portfolio_dates.map(dateStr => new Date(dateStr));

            let previousDate = portfolio_values[portfolio_values.length - 2];
            let currentDate = portfolio_values[portfolio_values.length - 1];

            initializeLineChart(portfolio_values, portfolio_dates); // making the line chart
            display_portfolioValue(previousDate, currentDate); // populating the current portfolio value
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
        })
    .catch(function(error) {
        // Handle any errors that occur during the request
        console.error('Error:', error);
    });



<<<<<<< HEAD
// Initialize the ETF summary table
d3.json(ETF_url)
    .then(function(data) {
        updateETFTable(data);
    })
=======

// Initialize the ETF summary table

let ETFtabledata = [];
let ETFnames = ['BOND', 'SPY', 'VGK', 'VONG', 'SCHE'];
let ETFsURL = [];
let startDate = '/2023-10-02';

for (i=0; i<ETFnames.length; i++) {
    ETFsURL.push(ETF_url + ETFnames[i] + startDate);
}

// Use D3.js to make API calls for each URL
ETFsURL.forEach(url => {
    d3.json(url)
      .then(data => {

        updateETFTable(data);

      })
      .catch(error => {
        // Handle any errors that occur during API calls
        console.error('API error:', error);
      });
  });

  
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
