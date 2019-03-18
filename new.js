// 'use strict';

// // make objects for each location //


// // key, vaules and properties //
// // 1. location 
// //2. min customer per hr
// // 3. max customers per hr
// // 4. avg cookies per customer


// // and so key vaule is gonna have a method //
// // 1. Calculate random number of customers
// //2. Calculate average sales per hour
// //3. Calculate total sales per day
// //4. List details in an ordered manner
// //5. Render results onto webpage


// // math that makes our table work//
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// } 


// //Global variable
// var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// //using a business array but using the new method to add new store to table//

// var businessesArray = [
//   new Business('1st and Pike', 23, 65, 6.3),
//   new Business('SeaTac Airport', 3, 24, 1.2),
//   new Business('Seattle Center', 11, 38, 3.7),
//   new Business('Capitol Hill', 20, 38, 2.3),
//   new Business('Alki', 23, 65, 6.3)
// ]; 

// // create my constructor function aka make a object into a function //
// function Business (location, min, max, avgCookie) {
//   this.location = location;
//   this.minCustPerHr = min;
//   this.maxCustPerHr = max;
//   this. avgCookieSale = avgCookie;
//   this.numberCustomersArray = [];
//   this.avgSalesPerHr = [];
// }

// //Create methods for constructors
// //This method will calculate random number of customers per hour
// Business.prototype.numberCustomersArray = function() {
//   var randomCustomers = getRandomIntInclusive(this.minCustPerHr, this.maxCustPerHr);
//   return randomCustomers;
// };