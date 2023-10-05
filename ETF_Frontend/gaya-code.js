etf_list = ['bond','spy','vgk','sche','vong']
portfolio_list = ['conservative', 'balanced', 'growth']
let dropdown = d3.select('#selDataset');
let options = dropdown
  .selectAll("option")
  .data(portfolio_list)
  .enter()
  .append("option");
// Set the text and value attributes for each option
options.text(function(d) {
  return d;
})
.attr("value", function(d) {
  return d;
});
console.log('test');
let port_url = 'https://gayatrijohn3-d498f365-c54e-4381-857d-9f4ac180634e.socketxp.com/api/portfolio_data/'
let p = 'balanced'

// Use d3.json to fetch data from the API
d3.json(port_url+p)
  .then(function(data) {
    // Handle the JSON data here
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
        portfolio_values=[]
        portfolio_dates=[]
        data.map(function(item){
            portfolio_values.push(item[`${p}_portfolio_value`])
            portfolio_dates.push(item.date)
        })
        let dates = portfolio_dates.map(dateStr => new Date(dateStr));
        const trace = {
        x: dates,
        y: portfolio_values,
        type: 'scatter',
        mode: 'lines',
        name: 'Portfolio Value',
      };
      const layout = {
        title: 'Portfolio Value Over Time',
        xaxis: {
          title: 'Date',
        },
        yaxis: {
          title: 'Portfolio Value',
        },
      };
      Plotly.newPlot('line', [trace], layout);
  })
  .catch(function(error) {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  });

  let weights_url = 'https://gayatrijohn3-d498f365-c54e-4381-857d-9f4ac180634e.socketxp.com/api/portfolio_weights/'
  d3.json(weights_url+p)
  .then(function(data) {
    // Handle the JSON data here
    console.log(data)
    const values = Object.values(data).filter((value, key) => key !== 'portfolio');
    const labels = Object.keys(data).filter((key) => key !== 'portfolio');
    const pie_data = [{
        values: values,
        labels: labels,
        type: 'pie',
      }];
      const layout = {
        title: 'Balanced Portfolio Allocation',
      };
      Plotly.newPlot('pie', pie_data, layout);
  })