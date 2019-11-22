/* JavaScript to display current conditions in the weather summary. */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherObject) => {
    console.log(weatherObject);

    document.getElementById('currently').textContent = weatherObject.weather[0].description;
    document.getElementById('high').textContent = Math.round(weatherObject.main.temp) + "° F";
    document.getElementById('humidity').textContent = weatherObject.main.humidity + "%";
    document.getElementById('windspeed').textContent = Math.round(weatherObject.wind.speed) + " mph";

/* JavaScript to calculate the windchill in the weather summary. */
var high = weatherObject.main.temp;
var windSpeed = weatherObject.wind.speed;
var windMilesPerHour = windSpeed * 0.16;
var windChillFactor = 35.74 + 0.6215 * high - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * high * Math.pow(windSpeed, 0.16);

if (high <= 50 && windSpeed >= 3) {
document.getElementById("windchill").innerHTML = Math.round(windChillFactor) + "° F";
}
else {
document.getElementById("windchill").innerHTML = "N/A";
}
});




// JavaScript to display data for the 5 day forecast.
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
    console.log(forecastObject);

// plusOne variable to increase the element ID each time through the for loop to place data in the next element.    
plusOne = 1;

    for (let i = 0; i < forecastObject.list.length; i++) {

    if (forecastObject.list[i].dt_txt.includes("18:00:00")) {

        let timeDate = forecastObject.list[i].dt;
        let date = new Date(timeDate * 1000);
        let weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let dayOfWeek = weekDays[date.getDay()];

        document.getElementById('day' + plusOne).textContent = dayOfWeek; 
        document.getElementById('high' + plusOne).textContent = Math.round(forecastObject.list[i].main.temp_max) + "° F";
        document.getElementById("pic" + plusOne).setAttribute('src', 'https://openweathermap.org/img/w/' + forecastObject.list[i].weather[0].icon + '.png'); 
        document.getElementById('pic' + plusOne).setAttribute('alt', forecastObject.list[i].weather[0].description);
        
        plusOne++;
    }
}

  });
