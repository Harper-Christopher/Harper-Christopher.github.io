//Storing the resource URL into a const variable. 
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

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
    const prophets = jsonObject['prophets'];
    
    //Loop to go through every record and process them into their own cards one at a time.
    for (let i = 0; i < prophets.length; i++ ) {  
        
//Variables to build HTML (build element) for card, h2, birth date, birthplace, and image.       
let card = document.createElement('section');
let h2 = document.createElement('h2');
let dateOfBirth = document.createElement('p');
let placeOfBirth = document.createElement('p');
let prophetImage = document.createElement('img');

//Outputting the content to the user through the for loop. 
h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
dateOfBirth.textContent = "Date of Birth: " + prophets[i].birthdate;
placeOfBirth.textContent = "Place of Birth: " + prophets[i].birthplace;
prophetImage.setAttribute('src', prophets[i].imageurl);

// Adds node to the end of the list of children of specified parent node (card).
card.appendChild(h2);
card.appendChild(dateOfBirth);
card.appendChild(placeOfBirth);
card.appendChild(prophetImage);

// Places div.card (each card) at the end of the list (one after the other) during the for loop.
document.querySelector('div.cards').appendChild(card);
    }
});
