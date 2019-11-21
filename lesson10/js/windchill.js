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
  .then((jsObject) => {
    console.log(jsObject);

    
plusOne = 1;
    for (let i = 0; i < jsObject.list.length; i++) {

    if (jsObject.list[i].dt_txt.includes("18:00:00")) {

        document.getElementById('high' + plusOne).textContent = Math.round(jsObject.list[i].main.temp_max) + "° F";
        document.getElementById("pic" + plusOne).setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png'); 
        document.getElementById('pic' + plusOne).setAttribute('alt', jsObject.list[i].weather[0].description);
        
        plusOne++;
    }
}

  });

 /* for (i = 0; i <= 5; i++) {
  days = [dayOne, dayTwo, dayThree, dayFour, dayFive];
  var currentDate = new Date();
    var currentDay = currentDate.getDay();
    if (currentDay == 0) {
        var currentDay = "Sun";
    }
    else if (currentDay == 1) {
        var currentDay = "Mon";
    }
    else if (currentDay == 2) {
        var currentDay = "Tues";
    }
    else if (currentDay == 3) {
        var currentDay = "Wed";
    }
    else if (currentDay == 4) {
        var currentDay = "Thurs";
    }
    else if (currentDay == 5) {
        var currentDay = "Fri";
    }
    else if (currentDay == 6) {
        var currentDay = "Sat";
    }



    document.getElementById(days[i]).innerHTML = currentDay;
}*/
