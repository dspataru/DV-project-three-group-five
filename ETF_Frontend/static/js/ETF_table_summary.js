// Replace with your own Alpha Vantage API key
const apiKey = 'KG5XMICT6CAOFDOX';
// Define the stock symbols you want to track
const stockSymbols = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA'];

// Function to fetch stock data
async function fetchStockData(symbol) {
    try {
        const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${apiKey}`);
        const data = await response.json();
        const metaData = data['Meta Data'];
        const lastRefreshed = metaData['3. Last Refreshed'];
        const timeSeries = data['Time Series (1min)'];
        const latestData = timeSeries[lastRefreshed];
        return {
            symbol: symbol,
            lastPrice: latestData['4. close'],
            change: latestData['4. close'] - latestData['1. open'],
        };
    } catch (error) {
        console.error(`Error fetching data for ${symbol}: ${error.message}`);
        return null;
    }
}

// Function to update the table
async function updateTable() {
    const tableBody = document.getElementById('stockTableBody');
    tableBody.innerHTML = '';

    for (const symbol of stockSymbols) {
        const stockData = await fetchStockData(symbol);
        if (stockData) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${stockData.symbol}</td>
                <td>${stockData.lastPrice}</td>
                <td>${stockData.change.toFixed(2)}</td>
                <td>${((stockData.change / stockData.lastPrice) * 100).toFixed(2)}%</td>
            `;
            tableBody.appendChild(row);
        }
    }
}

// Update the table periodically (e.g., every 60 seconds)
updateTable();
setInterval(updateTable, 60000);