'use strict';

//DONE: 1.Stores the min/max hourly customers, and the average cookies per customer, in object properties
//  I THINK ITS DONE??                                        DONE: Not step 2, its step 5 or somwthing .Store the results for each location in a separate array... perhaps as a property of the object representing that location
// TODO: KINDA DONE: 3.Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// TODO: 4.Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// TODO: 5. Display the values of each array as unordered lists in the browser
// 6.


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
console.log('logged in randomintinclusive');

var firstAndPike = {
    minCustPerHr: 23,
    maxCustPerHr: 65,
    avgCookieSale: 6.3,
    estCookieSalesPerHrArray: [],
};


  firstAndPike.calculateSalesPerHour = function(){
    for(var i = 0; i < 15; i++){
      var randomCustomersPerHour = getRandomIntInclusive (this.minCustPerHr, this.maxCustPerHr);
      firstAndPike.estCookieSalesPerHrArray.push(randomCustomersPerHour);
      console.log('testing');
    }
  };
firstAndPike.calculateSalesPerHour();

var firstAndPike_ul = document.getElementById('firstAndPike');
var title_li = document.createElement('li');

title_li.textContent = '1st and Pike';
firstAndPike_ul.appendChild(title_li);
console.log('testing');
var times = [6 + ':00am ',7 + ':00am ',8 + ':00am ',9 + ':00am ',10 + ':00am ',11 + ':00am ',12 + ':00pm ',1 + ':00pm ',2 + ':00pm ',3 + ':00pm ',4 + ':00pm ',5 + ':00pm ',6 + ':00pm ',7 + ':00am ',8 + ':00pm '];
// var am = [':00am'];
// var pm = [':00pm'];
  for (var i = 0; i < 15; i++){
  var new_li = document.createElement('li');
  var cookiesThisHr = firstAndPike.estCookieSalesPerHrArray[i];
  new_li.textContent = `${0 + times[i]} - ${cookiesThisHr} cookies`;
  firstAndPike_ul.appendChild(new_li);
  console.log(cookiesThisHr);
  
  };
  console.log(firstAndPike);

//   console.log(this.estCookieSalesPerHrArray);
//   console.log('Sales last hour: ' + randomSalesPerHour);
// console.log('Number of Cust last hour: ' + randomCustomersPerHour);



  
//Last step// 

// Add things to the DOM

// Find a parent container
// create an element
// give that element content
// append that element to the parent // (appendChild)
// parent.appendChild(child)

firstAndPike.renderEstSalesToPage = function() {
// put store sales on page
console.log ('going on the page');


    for (var i = 0; i < 15; i++) {
    var new_li = document.createElement('li');
    var firstAndPike_salesPerHour = this.estCookieSalesPerHrArray[i];
    new_li.textContent = `${i + 1}: ${this.estCookieSalesPerHrArray[i]}  cookies`;
    firstAndPike_ul.appendChild(new_li);
    }
};

// firstAndPike.calculateSalesPerHour();
// firstAndPike.renderEstSalesToPage();


