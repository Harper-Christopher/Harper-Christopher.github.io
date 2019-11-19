// Using openweathermap.org to get weather data. (Pulling from weather?, id=5604473 is the code for Preston, with APPID being the key given for signing up, and units=imperial turns temp to F.)
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // Displays the temp by using the JS object created pulls the data from the main, and uses the temp value.
    document.getElementById('current-temp').textContent = jsObject.main.temp;

    // Creating variable for an image directly from the openweathermap website, uses the JS object in weather getting the icon in the first position [0] and making it a .png.
  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';

  // Creating variable for the discription in the first weather position [0].
  const desc = jsObject.weather[0].description; 


document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);


  });