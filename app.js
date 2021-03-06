'use strict';
// global varabiles //
var times = [6 + ':00am ',7 + ':00am ',8 + ':00am ',9 + ':00am ',10 + ':00am ',11 + ':00am ',12 + ':00pm ',1 + ':00pm ',2 + ':00pm ',3 + ':00pm ',4 + ':00pm ',5 + ':00pm ',6 + ':00pm ',7 + ':00am ',8 + ':00pm '];


// math method to round our number//
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  console.log('logged in randomintinclusive');
// stores information in an object form//
var firstAndPike = {
   minCustPerHr: 23,
    maxCustPerHr: 65,
    avgCookieSale: 6.3,
    estCookieSalesPerHrArray: [],
};
firstAndPike.name = 'First and Pike'; 

// for loop statement, to calculate the sales per hour //
firstAndPike.calculateSalesPerHour = function(){
    for(var i = 0; i < 15; i++){
      var randomCustomersPerHour = getRandomIntInclusive (this.minCustPerHr, this.maxCustPerHr);
      firstAndPike.estCookieSalesPerHrArray.push(randomCustomersPerHour);
      console.log('testing');
    }
  };
firstAndPike.calculateSalesPerHour();
// ^ calling my function back 


// creating an element and linking it to my html id so it shows on the page//
firstAndPike.renderAsUl = function(){
var firstAndPike_ul = document.getElementById('firstAndPike');
var title_li = document.createElement('th');
title_li.textContent = '1st and Pike';
firstAndPike_ul.appendChild(title_li);
console.log('testing');

for (var i = 0; i < 15; i++){
  var new_li = document.createElement('th');
  var cookiesThisHr = this.estCookieSalesPerHrArray[i];
  new_li.textContent = `${cookiesThisHr} `;
  firstAndPike_ul.appendChild(new_li);
  console.log(cookiesThisHr);
  };
  console.log(firstAndPike);


};
firstAndPike.renderAsUl();
//===========================================================================//



var seaTacAirport = {
  minCustPerHr: 3,
   maxCustPerHr: 24,
   avgCookieSale: 1.2,
   estCookieSalesPerHrArray: [],
};
seaTacAirport.name = 'seaTacAirport';

seaTacAirport.calculateSalesPerHour = function(){
   for(var i = 0; i < 15; i++){
     var randomCustomersPerHour = getRandomIntInclusive (this.minCustPerHr, this.maxCustPerHr);
     seaTacAirport.estCookieSalesPerHrArray.push(randomCustomersPerHour);
     console.log('testing');
   }
 };
 seaTacAirport.calculateSalesPerHour();

seaTacAirport.renderAsUl = function(){
var seaTacAirport_ul = document.getElementById('seaTacAirport');
var title_li = document.createElement('th');
title_li.textContent = 'Sea Tac Airport';
seaTacAirport_ul.appendChild(title_li);
console.log('testing');

for (var i = 0; i < 15; i++){
 var new_li = document.createElement('th');
 var cookiesThisHr = this.estCookieSalesPerHrArray[i];
 new_li.textContent = `${cookiesThisHr}`;
 seaTacAirport_ul.appendChild(new_li);
 console.log(cookiesThisHr);
 };
 console.log(seaTacAirport);


};
seaTacAirport.renderAsUl();

//===============================================================================//


var seattleCenter = {
  minCustPerHr: 3,
   maxCustPerHr: 24,
   avgCookieSale: 1.2,
   estCookieSalesPerHrArray: [],
};
seattleCenter.name = 'seattleCenter';


seattleCenter.calculateSalesPerHour = function(){
   for(var i = 0; i < 15; i++){
     var randomCustomersPerHour = getRandomIntInclusive (this.minCustPerHr, this.maxCustPerHr);
     this.estCookieSalesPerHrArray.push(randomCustomersPerHour);
     console.log('testing');
   }
 };
 seattleCenter.calculateSalesPerHour();


 seattleCenter.renderAsUl = function(){
var seattleCenter_ul = document.getElementById('seattleCenter');
var title_li = document.createElement('th');
title_li.textContent = 'Seattle Center';
seattleCenter_ul.appendChild(title_li);
console.log('testing');

for (var i = 0; i < 15; i++){
 var new_li = document.createElement('th');
 var cookiesThisHr = this.estCookieSalesPerHrArray[i];
 new_li.textContent = `${cookiesThisHr}`;
 seattleCenter_ul.appendChild(new_li);
 console.log(cookiesThisHr);
 };
 console.log(seattleCenter);


};
seattleCenter.renderAsUl();

//===============================================================================//

var capitolHill = {
  minCustPerHr: 3,
   maxCustPerHr: 24,
   avgCookieSale: 1.2,
   estCookieSalesPerHrArray: [],
};
capitolHill.name = 'capitolHill';


capitolHill.calculateSalesPerHour = function(){
   for(var i = 0; i < 15; i++){
     var randomCustomersPerHour = getRandomIntInclusive (this.minCustPerHr, this.maxCustPerHr);
     this.estCookieSalesPerHrArray.push(randomCustomersPerHour);
     console.log('testing');
   }
 };
 capitolHill.calculateSalesPerHour();


 capitolHill.renderAsUl = function(){
var capitolHill_ul = document.getElementById('capitolHill');
var title_li = document.createElement('th');
title_li.textContent = 'Capitol Hill';
capitolHill_ul.appendChild(title_li);
console.log('testing');

for (var i = 0; i < 15; i++){
 var new_li = document.createElement('th');
 var cookiesThisHr = this.estCookieSalesPerHrArray[i];
 new_li.textContent = `${cookiesThisHr}`;
 capitolHill_ul.appendChild(new_li);
 console.log(cookiesThisHr);
 };
 console.log(capitolHill);


};
capitolHill.renderAsUl();
// =============================================================//


var alki = {
  minCustPerHr: 23,
   maxCustPerHr: 65,
   avgCookieSale: 6.3,
   estCookieSalesPerHrArray: [],
};
alki.name = 'alki';


alki.calculateSalesPerHour = function(){
   for(var i = 0; i < 15; i++){
     var randomCustomersPerHour = getRandomIntInclusive (this.minCustPerHr, this.maxCustPerHr);
     this.estCookieSalesPerHrArray.push(randomCustomersPerHour);
     console.log('testing');
   }
 };
 alki.calculateSalesPerHour();

alki.renderAsUl = function(){
var alki_ul = document.getElementById('alki');
var title_li = document.createElement('th');
title_li.textContent = 'Alki';
alki_ul.appendChild(title_li);

for (var i = 0; i < 15; i++){
 var new_li = document.createElement('th');
 var cookiesThisHr = this.estCookieSalesPerHrArray[i];
 new_li.textContent = `${cookiesThisHr}`;
 alki_ul.appendChild(new_li);
 console.log(cookiesThisHr);
 };
 console.log(alki);


};
alki.renderAsUl();






