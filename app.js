'use strict';

//DONE: 1.Stores the min/max hourly customers, and the average cookies per customer, in object properties
// TODO: I THINK ITS DONE??                                       Not step 2, its step 5 or somwthing .Store the results for each location in a separate array... perhaps as a property of the object representing that location
// TODO: 3.Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
// TODO: 4.Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated
// TODO: 5. Display the values of each array as unordered lists in the browser
// 6.

//step one, lable everything//
var pike = {
  loction: '1st and Pike',
min_cus_per_hr: 23,
max_cus_per_hr: 65,
avg_cookie_per_hr: 6.3,
};

var seaTac = {
  min_cus_per_hr: 3,
  max_cus_per_hr: 24,
  avg_cookie_per_hr: 1.2,
};

var seaCenter = {
min_cus_per_hr: 11,
max_cus_per_hr: 38,
avg_cookie_per_hr: 3.7,
};

var capHill = {
min_cus_per_hr: 20,
max_cus_per_hr: 38,
avg_cookie_per_hr: 2.3,
};

var alki = {
  min_cus_per_hr: 2,
  max_cus_per_hr: 16,
  avg_cookie_per_hr: 4.6,
};
console.log('Loctions and thier key vaules');
// step two throw all my loctions into a array //
var loctions_result = [pike, seaTac, seaCenter, capHill, alki];

 // Get the parent
  // Make a new element
  // Give it content
  // append it to the page


  //step three generate random number of customers per hourat the store//
//found this of random number on the web/my teacher
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  } 
console.log('Show pike on the page');

TODO:// var pike_ul = document.getElementById('pike');
// var title_li = document.createElement('li');
// title_li.textContent = '1st and Pike';
// console.log(title_li.textContent);





//Last step//

// Add things to the DOM

// Find a parent container
// create an element
// give that element content
// append that element to the parent

var parent_container = document.getElementById('student-container'); // empty ul;

var new_list_item_element = document.createElement('li');
// empty list item;

new_list_item_element.textContent = pike.loction;
// <li>Joseph</li>

parent_container.appendChild(new_list_item_element);
//append child adds an element to another element (as a child)

