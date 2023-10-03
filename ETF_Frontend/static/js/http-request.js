// 
// Making an API call using the flaskAPIs with XMLHttpRequest
//

let base_url = 'https://gayatrijohn3-d498f365-c54e-4381-857d-9f4ac180634e.socketxp.com/'
let weights_url_LR = base_url + 'api/portfolio_weights/conservative';
let investmentHistory_url = '';
let latestPortfolio_url = '';


// --------------------------------------------------
// Creating an API call to get the weights JSON file.
// --------------------------------------------------
const request = new XMLHttpRequest();
request.open('GET', `${weights_url_LR}`);
request.send();

// getting the data in the console tab
request.onload = () => { 
    if (request.status === 200) {
        console.log(JSON.parse(request.response));  // using JSON.parse to convert the data from txt to JSON
    }
    else {  // error handling if a request was not successful
        console.log(`error ${request.status}`);
    }
}
