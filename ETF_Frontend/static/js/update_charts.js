// 
function updateCharts(portfolio) {

    let ETFdistribution_portfolioName = document.getElementById("portfolioType_output");
    if (ETFdistribution_portfolioName) {
      ETFdistribution_portfolioName.textContent = portfolio;
    }

    update_doughnutChart(portfolio);
    updateGauge(portfolio);
    update_lineChart(portfolio);
    update_currentPortfolio(portfolio);

  
  }