// Function to update the table
function updateETFTable(ETF_info) {
    
<<<<<<< HEAD
    let etfName = [];
=======
    //console.log(ETF_info);
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
    let tickerSymbol = [];
    let closingPrice = [];
    let tradingVolume = [];
    let percentChange = [];

    ETF_info.map(function(item){
<<<<<<< HEAD
        etfName.push(item[`${p}_price_info`]); // get ETF name
=======
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
        tickerSymbol.push(item.ticker_symbol); // get ticker symbol
        closingPrice.push(item.close_price); // get closing price
        tradingVolume.push(item.trading_volume); // get trading vol
        percentChange.push(item.daily_return); // get % change of stock value
    });

    let tableBody = document.getElementById("tableBody");

    // Loop through the arrays and create rows for each item
<<<<<<< HEAD
    for (let i = 0; i < etfName.length; i++) {
        const row = document.createElement("tr");

        const etfNameCell = document.createElement("td");
        etfNameCell.textContent = etfName[i];
        row.appendChild(etfNameCell);

=======
    for (let i = 0; i < tickerSymbol.length; i++) {
        const row = document.createElement("tr");

>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
        const tickerSymbolCell = document.createElement("td");
        tickerSymbolCell.textContent = tickerSymbol[i];
        row.appendChild(tickerSymbolCell);

        const closingPriceCell = document.createElement("td");
<<<<<<< HEAD
        closingPriceCell.textContent = closingPrice[i];
        row.appendChild(closingPriceCell);

        const tradingVolumeCell = document.createElement("td");
        tradingVolumeCell.textContent = tradingVolume[i];
        row.appendChild(tradingVolumeCell);

        const percentChangeCell = document.createElement("td");
        percentChangeCell.textContent = percentChange[i];
=======
        closingPriceCell.textContent = Number(closingPrice[i].toString().slice(0,5));
        row.appendChild(closingPriceCell);

        const tradingVolumeCell = document.createElement("td");
        tradingVolumeCell.textContent = Number(tradingVolume[i].toString().slice(0,5));
        row.appendChild(tradingVolumeCell);

        const percentChangeCell = document.createElement("td");
        percentChangeCell.textContent = Number(percentChange[i].toString().slice(0,5));
>>>>>>> 36a04bc4e32be091d7054c398428403b63cb3edf
        row.appendChild(percentChangeCell);

        tableBody.appendChild(row);
    };
};