let dropdownList = document.getElementById("list");
      dropdownList.style.display = "none";
      function openDropdown() {
         if (dropdownList.style.display != "none") {
            dropdownList.style.display = "none";
         } else {
            dropdownList.style.display = "block";
         }
      }
      let portfolio = 'Conservative'
      const p_elements = document.getElementsByTagName("p");
      // access all p elements
      const totalP = p_elements.length;
      // iterate through all <p> elements
      for (let i = 0; i < totalP; i++) {
         const option = p_elements[i];
         // add event listner to <p> element
         option.addEventListener("click", () => {
            // When a user clicks on any p element, get its innerHTML
            portfolio = option.innerHTML;
            updateCharts(portfolio); // calling the update charts function
            console.log("The selected option is " + portfolio);
            // close the dropdown list once users select an option
         })
      }



// var mypiechart = document.getElementById("pie_chart").getContext('2d');
// let round_graph = new Chart(mypiechart, {
//     type:'doughnut',
//     data:{
//       labels:['Bonds','SPY','VGK','SCHE', 'VONG'],
//       datasets:[{
//         lable:'Samples',
//         data :[
//           60, 15, 5, 12, 8
//         ],
//         backgroundColor: ['#f77062','#4e73df','#36b9cc', '#8395f9', '#1cc88a'],
//         hoverBackgroundColor: ['#1cc88a','#2e59d9', '#17a673', '#2c9faf'],
//         hoverBorderColor: "rgba(234, 236, 244, 1)",
//       }]
//     },
//     options: {
//         plugins : {
//             legend:{
//                 display: false
//             }
//         }
//       }
    
//     })


// var mychart = document.getElementById("chart").getContext('2d');

// // create new chart instance
// var chart = new Chart(mychart, {
//     type: 'line',
//     data: {
//         labels: ['Jan', 'Feb', 'Mar', 'Apr','Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//         datasets:[
//             {
//                 label: 'BOND',
//                 data: [915, 925, 900, 950, 1000, 935, 964, 800, 817, 830, 850, 887],
//                 borderColor: 'yellow',
//                 borderWidth: 2
//             },
//             {
//                 label: 'SPY',
//                 data: [1098, 1020, 1058, 1190, 1200, 1256, 1198, 1057, 900, 978, 1059, 962],
//                 borderColor: 'cyan',
//                 borderWidth: 2
//             }
//         ]
//     },
//     options: {
//       resposive:true
//     }}
// );

// var data = [
// 	{
// 		domain: { x: [0, 1], y: [0, 1] },
// 		value: 270,
// 		title: { text: "Risk Indicator" },
// 		type: "indicator",
// 		mode: "gauge+number"
// 	}
// ];

// var layout = { width: 300, height: 300, background:false};
// Plotly.newPlot('gauge', data, layout);