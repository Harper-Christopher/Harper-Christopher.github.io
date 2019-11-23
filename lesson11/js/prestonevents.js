//Storing the resource URL into a const variable. 
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//Fetch method to feed the required argument (requestURL).
fetch(requestURL)
//.then method that returns a Promise which response will work with as an argument ot an anonymous function.
  .then(function (response) {
    return response.json();
  })
  //.then method setup to work with the converted response data in JS object format.
  .then(function (jsonObject) {
    console.table(jsonObject);

    //Store results of the converted response. 
    const towns = jsonObject['towns'];
    
    //Loop to go through every record and process them into their own div one at a time.
    for (let i = 0; i < towns.length; i++ ) {  
        if (towns[i].name == "Preston") {
//Variables to build HTML (build element) for town, h2, h3, founded, population, rainfall, and image.       
let town = document.createElement('section');
let h4 = document.createElement('h4');
let hr = document.createElement('hr');
let event1 = document.createElement('p');
let event2 = document.createElement('p');
let event3 = document.createElement('p');
let townImage = document.createElement('img');

//Outputting the content to the user through the for loop. 
h4.textContent = "Upcoming Events: "
event1.textContent = towns[i].events[0];
event2.textContent = towns[i].events[1];
event3.textContent = towns[i].events[2];
townImage.setAttribute('src', "images/" + towns[i].photo);
townImage.setAttribute('alt', "images/" + towns[i].name);

// Adds node to the end of the list of children of specified parent node (town).
town.appendChild(h4);
town.appendChild(hr);
town.appendChild(event1);
town.appendChild(event2);
town.appendChild(event3);
town.appendChild(townImage);

// Places div.card (each town) at the end of the list (one after the other) during the for loop.
document.querySelector('div.announcements').appendChild(town);
    }}
});