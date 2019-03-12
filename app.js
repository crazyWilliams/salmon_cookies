'use strict';

//DONE: 1.Stores the min/max hourly customers, and the average cookies per customer, in object properties
//  I THINK ITS DONE??                                        DONE: Not step 2, its step 5 or somwthing .Store the results for each location in a separate array... perhaps as a property of the object representing that location
// TODO: KINDA DONE: 3.Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// TODO: 4.Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// TODO: 5. Display the values of each array as unordered lists in the browser
// 6.
var hours_in_a_week = 14;
//step one, lable everything//
var pike = {
  loction: '1st and Pike',
min_cus_per_hr: 23,
max_cus_per_hr: 65,
avg_cookie_per_hr: 6.3,
cookie_result:[],
};

var seaTac = {
  min_cus_per_hr: 3,
  max_cus_per_hr: 24,
  avg_cookie_per_hr: 1.2,
  cookie_result: [],
};

var seaCenter = {
min_cus_per_hr: 11,
max_cus_per_hr: 38,
avg_cookie_per_hr: 3.7,
 cookie_result: [],
}

var capHill = {
min_cus_per_hr: 20,
max_cus_per_hr: 38,
avg_cookie_per_hr: 2.3,
cookie_result: [],
};

var alki = {
  min_cus_per_hr: 2,
  max_cus_per_hr: 16,
  avg_cookie_per_hr: 4.6,
  cookie_result: [],
};
console.log('Loctions and thier key vaules');
// step two throw all my loctions into a array //
var loctions_result = [pike, seaTac, seaCenter, capHill, alki];

 

  //step three generate random number of customers per hour at the store//
//found this of random number on the web/my teacher
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  } 
console.log('Show pike on the page');




pike.render_cookies_to_page = function(){
  console.log('show cookies');

  // Get the parent
  // Make a new element
  // Give it content
  // append it to the page

  var pike_ul = document.getElementById('pike');
var title_li = document.createElement('li');
title_li.textContent = 'cookies and time';
  pike_ul.appendChild(title_li);
  
for (var i = 0; i < this.cookie_result.length; i++) {
  var new_li = document.createElement('li');
  var cookies_bought = this.cookie_result[i];
  new_li.textContent = `am: ${i + 1} am: ${cookies_bought}`;
  console.log('test');

}
};

pike.cookies_sold_per_hr = function(){
  for(var i = 0; i < 7; i++){
    var random_time = getRandomIntInclusive(this.min_cus_per_hr, this.max_cus_per_hr);
    var random_customer = random_time * this.avg_cookie_per_hr;
    this.cookie_result.push(random_customer);
    console.log('test');
  }
};
//Last step// 

// Add things to the DOM

// Find a parent container
// create an element
// give that element content
// append that element to the parent // (appendChild)
// parent.appendChild(child)


var title = document.getElementById('header'); 
title.innerHTML = 'Salmon Cooky';
console.log(title.innerHTML);

pike.render_cookies_to_page = function(){
  var parent = document.getElementById('pike');
  // console.log(parent);
  // console.log('hello');
  var title_list_item =document.createElement('li');
  // console.log(title_list_item);
  title_list_item.textContent = this.storeName;
  parent.appendChild(title_list_item);
  var li_el = document.createElement('li');

for (var i = 0; i < hours_in_a_week; i++){
  
var cookies_sold_per_hr = this.cookie_result[i];
//li_el.textConent = '6am 30 cookies'//
  li_el.textContent = `${i+6}:00 30 cookies`;
  parent.appendChild(li_el);
}

};

// get on the page
pike.cookies_sold_per_hr();  
pike.render_cookies_to_page();