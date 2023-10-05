// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------
// Display the current portfolio value and percent change.
// --------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------
// Setting the variables for each portfolio value amount.
// ------------------------------------------------------

let yesterday_portfolioValue_HR = 1000;
let yesterday_portfolioValue_MR = 1000;
let yesterday_portfolioValue_LR = 1000;

let today_portfolioValue_HR = 800;
let today_portfolioValue_MR = 1000;
let today_portfolioValue_LR = 1200;

// -----------------------------------------------------------
// Function to create and display the current portfolio value.
// -----------------------------------------------------------

function display_portfolioValue(initialAmount, updatedAmount) {

    // Calculate the percent change
    var percentChange = ((updatedAmount - initialAmount) / initialAmount) * 100;

    // Get the HTML elements
    var dollarAmountElement = document.getElementById('dollarAmount');
    var percentChangeElement = document.getElementById('percentChange');

    // Update the dollar amount and percent change
    dollarAmountElement.textContent = 'Current Portfolio Value: $' + updatedAmount.toFixed(2);
    percentChangeElement.textContent = 'Percent Change: ' + percentChange.toFixed(2) + '%';

    // Apply CSS class based on the sign of percentChange
    if (percentChange > 0) {percentChangeElement.classList.add('positive');} 
    else if (percentChange < 0) {percentChangeElement.classList.add('negative');}
    else {percentChangeElement.classList.add('unchanged');}

}



// ---------------------------------------------------------
// Initializing the portfolio data with the low-risk option.
// ---------------------------------------------------------

display_portfolioValue(yesterday_portfolioValue_LR, today_portfolioValue_LR);




// -----------------------------------------------------------------------------------------------
// Function to update the portfolio value based on the selected portfolio from the drop down menu.
// -----------------------------------------------------------------------------------------------

function update_currentPortfolio(selectedData) {
    
    let initial;
    let updated;

    // Check which portfolio option was selected
    if (selectedData === 'highRisk') {
        initial = yesterday_portfolioValue_HR;
        updated = today_portfolioValue_HR;
    }
    else if (selectedData === 'medRisk') {
        initial = yesterday_portfolioValue_MR;
        updated = today_portfolioValue_MR;
    }
    else {
        initial = yesterday_portfolioValue_LR;
        updated = today_portfolioValue_LR;
    }

    display_portfolioValue(initial, updated);
}
