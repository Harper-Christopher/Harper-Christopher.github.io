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
        
//Variables to build HTML (build element) for town, h2, h3, founded, population, rainfall, and image.       
let town = document.createElement('section');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let founded = document.createElement('p');
let population = document.createElement('p');
let rainfall = document.createElement('p');
let townImage = document.createElement('img');

//Outputting the content to the user through the for loop. 
h2.textContent = towns[i].name;
h3.textContent = towns[i].motto;
founded.textContent = "Year Founded: " + towns[i].yearFounded;
population.textContent = "Population: " + towns[i].currentPopulation;
rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
townImage.setAttribute('src', towns[i].photo);

// Adds node to the end of the list of children of specified parent node (town).
town.appendChild(h2);
town.appendChild(h3);
town.appendChild(founded);
town.appendChild(population);
town.appendChild(rainfall);
town.appendChild(townImage);

// Places div.card (each town) at the end of the list (one after the other) during the for loop.
document.querySelector('div.townPages').appendChild(town);
    }
});