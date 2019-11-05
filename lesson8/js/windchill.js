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