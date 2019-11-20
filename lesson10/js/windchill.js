/* JavaScript to calculate the windchill in the weather summary. */
var high = parseInt(document.getElementById("high").innerHTML);
var windSpeed = parseInt(document.getElementById("windspeed").innerHTML);
var windMilesPerHour = windSpeed * 0.16;
var windChillFactor = 35.74 + 0.6215 * high - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * high * Math.pow(windSpeed, 0.16);

if (high <= 50 && windSpeed >= 3) {
document.getElementById("windchill").innerHTML = Math.round(windChillFactor) + "° F";
}
else {
document.getElementById("windchill").innerHTML = "N/A";
}

/* JavaScript to display current conditions in the weather summary. */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('high').textContent = jsObject.main.temp + "° F" + " / " + jsObject.main.temp_max + "° F" ;
    document.getElementById('humidity').textContent = jsObject.main.humidity + "%";
    document.getElementById('windspeed').textContent = jsObject.wind.speed + " mph";

});

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=fe9fd1b6278811d8a022a086d5b14b88&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


    for (let i = 0; i < forecast.list.length; i++ ) {

    if (jsObject.forecast.list.dt_txt.includes("18:00:00") {

    }

}
  });

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

    document.getElementById('dayOne').innerHTML = currentDay;