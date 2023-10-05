// ---------------------------------------------------------------------------------
// Creating a line chart using Chart.js and updating it based on dropdown selection.
// ---------------------------------------------------------------------------------

<<<<<<< HEAD
let YTD_url = 'https://gayatrijohn3-d498f365-c54e-4381-857d-9f4ac180634e.socketxp.com/api/portfolio_data/';

let currentDate = new Date()
=======
let YTD_url = 'https://nikitagahoi-0c509522-ac93-40bc-8e9f-b8e18d3f0921.socketxp.com/api/portfolio_data/';
let start = '/2022-03-02'
let currentDate = new Date();
let currentDate_formatted = currentDate.toISOString(0, 10);
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf

let oneYearAgo = new Date(currentDate);
oneYearAgo.setFullYear(currentDate.getFullYear() - 1); // subtract one year from the current date
let oneYearAgoFormatted = oneYearAgo.toISOString().slice(0, 10); // format the result as a string

let twoYearAgo = new Date(currentDate);
twoYearAgo.setFullYear(currentDate.getFullYear() - 1); // subtract one year from the current date
let twoYearAgoFormatted = oneYearAgo.toISOString().slice(0, 10); // format the result as a string

<<<<<<< HEAD
let oneYear_URL = YTD_url + p + oneYearAgoFormatted;
let twoYear_URL = YTD_url + p + twoYearAgoFormatted;


=======
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
function initializeLineChart(portfolioVals, date) {

    let lowRisk_lineData = {
        labels: date,
        datasets: [{
<<<<<<< HEAD
            label: 'Conservative',
=======
            label: '', // needs to change or GO
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
            data: portfolioVals,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth: 2,
        }]
    };

<<<<<<< HEAD
=======


>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
    // Generate default graph
    let portfolioHistory_lineChart = new Chart(lineChart, {
        type: 'line',
        data: lowRisk_lineData,
        options: {
            resposive: true
        }
    });
<<<<<<< HEAD

=======
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
    return portfolioHistory_lineChart;
}


// Function to update the line chart
function update_lineChart(portfolio_values, dates) {
<<<<<<< HEAD
=======
    
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
    portfolioHistory_lineChart.data.datasets[0].data = portfolio_values;   // Update the chart's data with the new data
    portfolioHistory_lineChart.labels = dates;   // Update the chart's data with the new timeline
    portfolioHistory_lineChart.update();
}

<<<<<<< HEAD
// Function that listens for a button press event.
function update_timeline() {
    
=======

function portfolioAPIcall(portfolioURL, p) {

        d3.json(portfolioURL + p)
        .then(function(data) {
        //console.log(data)
        data.forEach((item) => {
            item.dateObj = new Date(item.date);
            });

            // Sort the list of dictionaries by date in ascending order
            data.sort((a, b) => a.dateObj - b.dateObj);

            // Remove the dateObj key if you don't need it anymore
            data.forEach((item) => {
                delete item.dateObj;
            });

            // Now, data is sorted by date in ascending order
            //console.log(data)

            portfolio_values = [];
            portfolio_dates = [];

            data.map(function(item){
                portfolio_values.push(item[`${p}_portfolio_value`]);
                //console.log(item.date);
                portfolio_dates.push(item.date);
            })

            let dates = portfolio_dates.map(dateStr => new Date(dateStr));
            
            // making the line chart
            update_lineChart(portfolio_values, dates);
        })
        .catch(function(error) {
            // Handle any errors that occur during the request
            console.error('Error:', error);
        })
};

// Function that listens for a button press event.
function update_timeline() {
    
    console.log('button was clicked');

>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
    // Add a click event listener to the button
    let YTD_button = document.getElementById('YTD');
    let oneYear_button = document.getElementById('1Y');
    let twoYear_button = document.getElementById('2Y');

<<<<<<< HEAD
    YTD_button.addEventListener('click', () => { portfolioAPIcall(YTD_url, p) });
    oneYear_button.addEventListener('click', () => { portfolioAPIcall(oneYear_URL, p) });    
    twoYear_button.addEventListener('click', () => { portfolioAPIcall(twoYear_URL, p) });

}


function portfolioAPIcall(portfolioURL, p) {

    d3.json(portfolioURL + p)
    .then(function(data) {
      console.log(data)
      data.forEach((item) => {
        item.dateObj = new Date(item.date);
        });

        // Sort the list of dictionaries by date in ascending order
        data.sort((a, b) => a.dateObj - b.dateObj);

        // Remove the dateObj key if you don't need it anymore
        data.forEach((item) => {
            delete item.dateObj;
        });

        // Now, data is sorted by date in ascending order
        console.log(data)

        portfolio_values = [];
        portfolio_dates = [];

        data.map(function(item){
            portfolio_values.push(item[`${p}_portfolio_value`])
            portfolio_dates.push(item.date)
        })

        let dates = portfolio_dates.map(dateStr => new Date(dateStr));
        
        // making the line chart
        update_lineChart(portfolio_values, dates);
    })
    .catch(function(error) {
        // Handle any errors that occur during the request
        console.error('Error:', error);
    })
}
=======
    YTD_button.addEventListener('click', () => { portfolioAPIcall(YTD_url, p, start) });
    oneYear_button.addEventListener('click', () => { portfolioAPIcall(YTD_url, p, oneYearAgoFormatted) });  
    twoYear_button.addEventListener('click', () => { portfolioAPIcall(YTD_url, p, twoYearAgoFormatted) });

}
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
