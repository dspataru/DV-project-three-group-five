# Project 3

Group Members: Jasmine Bamba, Nikita Gahoi, Gayatri John, Daiana Spataru

## App Access

https://dspataru.github.io/finance-dashboard/

<img width="944" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/13f62bc6-b49e-4261-8aa5-1133019d47dd">
<img width="947" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/ae17fadf-3b97-4c39-8c4e-e0bafa415b76">
<img width="945" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/c15fbbe6-c883-4170-bee9-ac17093f54c6">


## Table of Contents

- Back-End

    - Python Scripts: This includes .ipynb file to extract, transform and analyze data and .py file to load MongoDB and and create Flask API
    - CSV Folder: Contains .csv files exported from the extract and transform process

- Front-End

    - HTML Folder
    - CSS Folder
    - Javascript 

## Meeting the Project Requirements

1. Your visualization must include a Python Flask-powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.).

We used MongoDB to store our data, Python Flask API to access and query data, HTML/CSS to design our dashboard and Javascript to make our dashboard interactive.

2. Your project should fall into one of the following three tracks:
    - A combination of web scraping and Leaflet or Plotly
    - A dashboard page with multiple charts that update from the same data
    - A server that performs multiple manipulations on data in a database prior to visualization (must be approved)

Our project is a dashboard page with multiple charts that updata from the same data. The charts, which include a line chart, donut chart and gauge chart are updated by the selection of a portfolio type from the dropdown menu.

3. Your project should include at least one JS library that we did not cover.

Our project includes 2 JS libraries that we did not cover:
    - Chart.js
    - JSCharting

4. Your project must be powered by a dataset with at least 100 records.

Our database is made up of 11 collections, our portfolio data has daily information from March 2020, ~900 records of data for each portfolio (we have 3 portfolios)

Historical ETF data includes 5 collections for each of our 5 ETFs, with the smallest collection having 2914 records and the largest collection having 7722 records.

In addition we generated 100,000 Monte Carle Simulated portfolios as part of our asset allocation analysis process.

5. Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes).

Our dashboard has a dropdown menu to switch between different portfolios. The line chart is interactive as well, and you can click on different buttons to change the time horizon of the chart.

6. Your final visualization should ideally include at least three views.

Our dashboard has 3 interactive visuals: 
    - Donut chart that shows asset allocation of the portfolio
    - Line chart that plots the portfolio value over time
    - Gauge chart that shows risk level

We have 3 different portfolios, Conservative, Growth and Balanced, which produce different charting results. 

## Topic: Finance

Investment portfolios are essential tools for individuals and groups of people looking to optimize their financial strategies and achieve their long-term financial goals. In essence, an investment portfolio is a diversified collection of various assets, such as stocks, bonds, real estate, and more, carefully chosen and managed to meet specific financial objectives.

The primary purpose of an investment portfolio can be broken down into a few reasons:
- To spread risk across a range of investments to reduce the impact of poor performance in any single investment. 
- To enhance returns with a given risk tolerance.
- To achieve financial goals that are tailored to align with a person or group’s objectives.
- To adapt to changing circumstances. Since portfolios are not static and are regularly adjusted to reflect changing market conditions and personal circumstances, they can be adapted to meet the needs of the person or group.

## The Application

Group 5 is creating a dashboard that has three portfolio options: Low-risk, medium-risk, and high-risk. The portfolios will be developed based on five pre-selected exchange-traded funds (ETFs), and an arbitrary starting investment amount. The goal of this dashboard would be to provide an optimized investment strategy for the three portfolios. The dashboard would include the following features:
- Drop-down menu with three portfolio options: Low-risk, medium-risk, and high-risk.
- Description/table of the portfolio/stock information.
- Current value of portfolio: Total amount, % increase/decrease from invested amount, etc.
- Historical data of the portfolio from the starting point (starting point is chosen arbitrarily as March 2020) to the current date when the web page is accessed with options to select three different views: 1 year, 2 years, YTD.
- Pie chart to display the breakdown of the portfolio (percentage of money invested in each ETF).

## The Process

<img width="387" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/e3387a0f-8bc9-4573-a815-c6667b32ae04">

### Extract & Transform

#### 1. Pick 5 ETFs

ETFs will be chosen to gain exposure to each of the following categories:

- Bonds
- North American Equities
- International Equities
- Emerging Markets
- High Growth Equities

Bonds | **Pimco Active Bond Exchange-Traded Fund (BOND)**

Why we chose it?

The Pimco Active Bond Exchange-Traded Fund is an actively managed ETF that is focused primarily on generating income. It is a well-diversified fund including government related, securitized and investment grade corporate debt. 75% of the portfolio holdings being investment-grade credit ratings, and 65% boast AAA ratings. 

North American Equities | **SPDR S&P 500 ETF Trust (SPY)**

Why we chose it?

The SPDR S&P 500 ETF trust is an exchange-traded fund which trades on the NYSE Arca under the symbol SPY. It is designed to track the S&P 500 stock market index. The S&P 500 represents 80% of the North American market and includes companies across all sectors. It is frequently used as a benchmark for the market as whole.

International Equities | **Vanguard FTSE Europe ETF (VGK)**

Why we chose it?

The Vanguard FTSE Europe ETF is ideal if you are looking for a well-rounded European ETF. The ETF holds over 1,300 stocks with a total net asset value of $20.94 billion. In addition, the ETF has various stocks from many different sectors, with its three biggest industries being financial services, healthcare and industrials. VGK is advantageous for investors because of its numerous stocks and industries across the European markets, aiming to spread investor risk appropriately.

Emerging Markets Equities |  **Schwab Emerging Markets Equity ETF (SCHE)**

Why we chose it?

Emerging markets can produce significant profits for investors willing to take on more considerable risk and volatile markets. The Schwab Emerging Markets Equity ETF invests in emerging stocks as well as emerging countries such as China, Taiwan, India and Brazil.  Its top sectors are financial services, technology and consumer cyclical.

High Growth Equities | **Vanguard Russell 1000 Growth ETF (VONG)**

Why we chose it?

The Vanguard Russell 1000 Growth ETF holds a portfolio of approximately 500 prominent U.S. companies that exhibit substantial growth prospects. A substantial 46.30% of the fund's assets are allocated to the technology sector. This ETF is closely tied to the Russell 1000 Growth Index, providing access to large-cap enterprises operating within the growth-oriented segment of the U.S. stock market. Companies within this growth category present significant profit potential as they are in their initial developmental stages, but this also elevates the associated risk level for this asset class.


#### 2. Pick Investment Timeline

Start Date: March 1, 2020

Investment Horizon: 3.5 years

#### 3. Initial Investment

Default amount is $1,000,000. 

#### 4. Extracting ETF Data

We are using the yahoo_fin.stock_info library on python. This library parses information from Yahoo Finance, and we will be using this library to pull daily price, dividend and analyst information for each of our selected ETFs.

#### 5. Transforming ETF Data

Calculated Annualized Expected Return (%), Average daily total return, Dividend return,  Annualized  risk & Annualized variance, Covariance matrix etc. using extracted data to see trends and growth in each ETF

### Analysis

#### 1. Asset Allocation

There is one-size-fits-all approach to portfolio allocation. Portfolio managers use a combination of quantitative models, simulations and personal judgement in order to determine the weights of each asset in a portfolio. There are several methods that can be used to determine the weights, in this project, we will be conducting the following analyses:

- **Minimum-variance portfolio**

Allocating assets in a manner that minimizes the overall portfolio variance. This involves calculating the covariance between the stocks and optimizing the allocation to reduce portfolio risk. You can use mathematical optimization techniques, such as the Markowitz Mean-Variance Optimization, to find the weights that minimize risk for a given level of return.

- **Maximum-return portfolio**

Allocating assets to optimize for maximum return while staying within your risk tolerance. This would involve selecting the stocks with the highest expected returns and allocating more capital to them.

- **Monte Carlo Simulation:**

Use simulation techniques to model different allocation scenarios and their potential outcomes based on historical data and various assumptions. This approach helps you understand the range of possible returns and risks for different allocations.

- **Mean-Variance Optimization**

Mean-variance optimization is a process of allocation weights in a manner that maximizes the Sharpe Ratio, ie. risk adjusted returns, of the portfolio.

- **Hierarchal Risk Parity (HRP) portfolio**

The HRP method works by finding subclusters of similar assets based on returns and constructing a hierarchy from these clusters to generate weights for each asset.

- **Mean Conditional Value at Risk (mCVAR)**

It works by measuring the worst-case scenarios for each asset in the portfolio, which is represented here by losing the most money. The worst-case loss for each asset is then used to calculate weights to be used for allocation for each asset.

How we built these models:

- Minimum-variance portfolio and maximum-return portfolio weights are calculated using quadratic minimization models.  The function is given the returns, risk and covariance matrix of the 5 ETFs. We set the constraints (such as weights have to sum to 1) and targets (target return or desired risk value), and solve for the weights. We used two libraries on python to solve for the weights, Scipy and CVXPY. Scipy calculated weights that did not allow for short selling (non-negative weights) and CVXPY calculated weights that allows for short selling.

- Mean-Variance Optimization was calculated using PyPortfolioOpt library. The function is given the prices of the 5 ETFs over a period of time, and it maximizes Sharpe Ratio under given constraints.

- HRP and mCVAR models were calculated using PyPortfolioOpt library. These models overcome the big pitfall of mean-variance optimization, which makes many simplifying assumptions such as normally distributed returns.

- The Monte Carlo simulations generated 100,000 portfolios of different returns and weights.

For the purpose of the project we are assuming the ability to make non-discrete purchases of the ETFs.

We used a combination of these quantitative models, simulations and personal judgement in order to determine the weights of each asset in a portfolio. 

**Portfolio Allocations**

Conservative:

BOND: 63%
SPY: 31%
VGK: 2%
SCHE: 0%
VONG: 4%

Balanced:

BOND: 33%
SPY: 42%
VGK: 8%
SCHE: 5%
VONG: 12%

Growth

BOND: 17%
SPY: 36%
VGK: 15%
SCHE: 8%
VONG: 24%

### Load & Flask API

### 1. Exporting Data from script

The following .csv files were exported from the script

- portfolio_weights.csv

This can be used to access portfolio weights. 

- {etf}_price_info.csv

5 files, for the 5 different ETFs, which contains price , dividend and return related historical data for each ETF. 

columns include: date, ticker_symbol, close_price, dividend, trading_volume, daily_return, dividend_return and total_return

- return_risk.csv

This has expected annualized return and risk of each of the 5 etfs. 

- {portfolio}_data.csv

3 files for the 3 different portfolios, which contains the dollar value allocations in each ETF and total value of each of the portfolios, as well as daily return.

columns include: date, BOND_value, SPY_value, VGK_value, SCHE_value, VONG_value, {conservative/balanced/growth}_portfolio_value, {conservative/balanced/growth}_portfolio_value

- etf_additional_info.csv

This contains additional etf info including the following: Net Assets, NAV, PE Ratio (TTM), Yield, YTD Daily Total Return, Beta (5Y Monthly), Expense Ration (net) and Inception Date.

### 2. Importing the data onto MongoDB

Why we chose MongoDB?

Unlike traditional SQL databases, which use structured tables and fixed schemas, MongoDB uses a document-oriented data model.
Flexibility: MongoDB is like a versatile storage box. It can hold different types of items (data) without needing a fixed structure.
Easy Growth: As our project grows, MongoDB can handle it like adding more boxes to store things. SQL needs us to reorganize the cabinet, which can be tricky and time-consuming.
Speed: MongoDB is quick at finding and getting stuff from the storage box as it's designed for speed.

We created a new database called portfolios_db, in which each of the .csv files were imported as collections using the following lines:

    mongoimport --db portfolios_db --collection growth_portfolio_data --type csv --headerline --drop --file growth_portfolio_data.csv

    mongoimport --db portfolios_db --collection balanced_portfolio_data --type csv --headerline --drop --file balanced_portfolio_data.csv

    mongoimport --db portfolios_db --collection conservative_portfolio_data --type csv --headerline --drop --file conservative_portfolio_data.csv

    mongoimport --db portfolios_db --collection vong_price_info --type csv --headerline --drop --file VONG_price_info.csv

    mongoimport --db portfolios_db --collection vgk_price_info --type csv --headerline --drop --file VGK_price_info.csv

    mongoimport --db portfolios_db --collection spy_price_info --type csv --headerline --drop --file SPY_price_info.csv

    mongoimport --db portfolios_db --collection sche_price_info --type csv --headerline --drop --file SCHE_price_info.csv

    mongoimport --db portfolios_db --collection bond_price_info --type csv --headerline --drop --file BOND_price_info.csv

    mongoimport --db portfolios_db --collection etf_additional_info --type csv --headerline --drop --file etf_additional_info.csv

    mongoimport --type csv -d portfolios_db -c portfolio_weights --headerline --drop portfolio_weights.csv

    mongoimport --type csv -d portfolios_db -c etf_return_risk --headerline --drop etf_return_risk.csv

### 3. Creating the Flask API

Once our data was in MongoDB, we used PyMongo to access and query the data. We then created a Flask API with the following routes:

<img width="959" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/ae4f93d7-7e46-475b-b2df-331ec72ccaff">


<img width="959" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/19ac8af9-5740-4469-8db5-66eeee0d40c9">

/api/portfolio_weights/[portfolio]:  Return the ETF allocation for each portfolio

<img width="942" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/fb981b8e-d9e5-4a4a-8cd2-f0ea135a30ed">

/api/portfolio_data/[portfolio]: Return the portfolio data for each portfolio

/api/portfolio_data/[portfolio]/[start_date]: Return the portfolio data for each portfolio from a given start date

/api/portfolio_data/[portfolio]/[start_date]/[end_date]: Return the portfolio data for each portfolio between a given start and end date

<img width="960" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/543b701f-e7c8-44c2-af04-595ac033550d">

/api/return_risk/[etf]: Return the average annualized return and risk of a given ETF

<img width="942" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/98cca130-17be-4d5c-a5e2-19e0eb7de769">

/api/price_info/[etf]: Return price, dividend and return information of a given ETF

/api/price_info/[etf]/[start_date]: Return price, dividend and return information of a given ETF from a given start date

<img width="953" alt="image" src="https://github.com/dspataru/DV-project-three-group-five/assets/135036996/2327714c-76c8-4d71-967c-9e01f0568e55">

/api/additional_info/[etf]: Return additional information on the ETF such as Net Assets, NAV, PE Ratio (TTM), Yield, YTD Daily Total Return, Beta (5Y Monthly), Expense Ration (net) and Inception Date.

Once the Flask API is working, we needed to host it on an online server so that it can be accesses by all our teammates. We used SocketXP to do this. After registering the SocketXP Client with the SocketXP Cloud Service, we could create HTTP proxy tunnel between the application running in your laptop and the SocketXP Cloud Service, via the SocketXP Client.

Public url: https://nikitagahoi-15458a97-2869-4864-b6cb-5c159da0a651.socketxp.com/

Why did we chose SocketXP?

- SocketXP is a simple, quick and cost-effective way to deploy your web application online.
- It is free for 30 days

![image](https://github.com/dspataru/DV-project-three-group-five/assets/135036996/06a1ae16-3295-45a0-a0f1-fa54d8e9f329)

### Javascript Development

We wanted to make several visualizations to display on the dashboard. After doing some research we found there were common elements on investment portfolio dashboards: pie charts which showed the total investments by asset class or percent allocation in investments, line charts that showed the investment amount (net worth) over time, a summary of each investment, and the total portfolio value. Based on this, the team created a sketch of the idea for the layout of the dashboard.

The following dashboard requirements were documented:
- Shall have a drop down menu with three portfolio options: conservative, balanced, growth
- Donut chart requirements:
    - Shall display the proportion of money invested in each ETF when hovering over a section of the chart
    - Shall update the proportions depending on which portfolio is selected (needs to update based on a button press)
- Gauge chart requirements:
    - Shall show which portfolio is selected (needs to update based on a button press)
- Line chart requirements:
    - Shall show the history of the investment change over time for each portfolio (needs to update based on a button press)
    - Shall be able to select YTD, 1Y, and 2Y views (needs to update based on a button press)
    - Shall be able to receive a start and end date from the user and update the chart accordingly (needs to update based on a calendar selection)
- Current portfolio value requirements:
    - Shall show the current portfolio amount, the percent change from the last time the database was updated, and show an arrow indicating whether the percent change is positive (arrow up) or negative (arrow down)
    - The font colour of the percent change shall be green when positive and red when negative
- ETF table summary requirements:
    - Shall show the ETF name, ticker symbol, latest closing price, trading volume, and % change from when the database was last updated

In order to achieve the above requirements, two JavaScript web visualization libraries were used:
Chart.js (https://www.chartjs.org/docs/latest/)
JSCharting (https://jscharting.com/tutorials/types/js-circular-gauge-chart/)
 
Chart.js is an open-source project that allows users to create eight types of visualizations that are animated and can be customized. This Javascript library was selected because of its performance on all modern browsers, responsiveness, and built in animations. JSCharting is another JavaScript library that was used only to make the gauge chart.
 
In order to get the data to populate the charts, an API call is made using the flaskAPIs through an XMLHttpRequest. All modern browsers have a built-in XMLHttpRequest object to request data from a server and so this method was chosen. A GET and SEND request was made for each API call to link the proper data to each element on the dashboard.

### HTML & CSS

In our project, we leveraged HTML and CSS to create a visually appealing and interactive user interface.
- HTML (Hypertext Markup Language) 
    We used HTML to create the semantic structure of our web application.

  Key HTML components used:

      Elements: Tags like <div>, <p>, <header>, and <footer> to structure content.
      Forms: <form>, <input>, and <button> for user input and interaction.
      Links: <a> tags for navigation and linking to other pages.

- CSS (Cascading Style Sheets)
    We utilized CSS to enhance the visual appeal and user experience.

  Key CSS features used:

        Selectors: Targeting HTML elements for styling.
        Properties: Defining attributes like colors, fonts, margins, and padding.
        Layout: Creating responsive designs with flexbox and grid layouts.
        Animations and Transitions: Adding visualizations for better user experience 

### Hosting the App

We are hosting the app on Git Pages, a simple way to host a static app online.

## References

1. https://www.forbes.com/advisor/investing/best-bond-etfs/
2. https://www.benzinga.com/money/best-international-etfs
3. https://www.forbes.com/advisor/investing/best-growth-etfs/
4. https://money.usnews.com/funds/etfs/international-stock
5. https://money.usnews.com/investing/bonds/slideshows/the-best-bond-etfs-to-buy-now
6. https://pypi.org/project/pyportfolioopt/
7. https://docs.scipy.org/doc/scipy/reference/optimize.minimize-slsqp.html
8. https://www.cvxpy.org/
9. https://builtin.com/data-science/portfolio-optimization-python
10. https://medium.datadriveninvestor.com/portfolio-optimization-with-python-using-scipy-optimize-monte-carlo-method-a5b4e89e0548
11. https://www.socketxp.com/iot/remote-access-python-flask-app-from-internet/
12. https://www.chartjs.org/docs/latest/
13. https://jscharting.com/editor/#name=CircularMarker.htm
14. https://www.youtube.com/watch?v=RG-weA9HUrg&t=94s

