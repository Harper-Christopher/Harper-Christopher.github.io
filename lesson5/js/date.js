function GetCurrentYear()
{
    var dates = new Date();
    document.getElementById("currentYear").innerHTML = dates.getFullYear();
}

function TodaysDate(){
    /* date.toLocaleDateString("en-gb", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); */
    var currentDate = new Date();
    var currentDay = currentDate.getDay();
    if (currentDay == 0) {
        var currentDay = "Sunday";
    }
    else if (currentDay == 1) {
        var currentDay = "Monday";
    }
    else if (currentDay == 2) {
        var currentDay = "Tuesday";
    }
    else if (currentDay == 3) {
        var currentDay = "Wednesday";
    }
    else if (currentDay == 4) {
        var currentDay = "Thursday";
    }
    else if (currentDay == 5) {
        var currentDay = "Friday";
    }
    else if (currentDay == 6) {
        var currentDay = "Saturday";
    }

    var currentMonth = currentDate.getMonth();
    if (currentMonth == 0){
        var currentMonth = "January";
    }
    else if (currentMonth == 1) {
        var  currentMonth = "February";
    }
    else if (currentMonth == 2) {
        var currentMonth = "March";
    }
    else if (currentMonth == 3) {
        var currentMonth = "April";
    }
    else if (currentMonth == 4) {
        var currentMonth = "May";
    }
    else if (currentMonth == 5) {
        var currentMonth = "June";
    }
    else if (currentMonth == 6) {
        var currentMonth = "July";
    }
    else if (currentMonth == 7) {
        var currentMonth = "August";
    }
    else if (currentMonth == 8) {
        var currentMonth = "September";
    }
    else if (currentMonth == 9) {
        var currentMonth = "October";
    }
    else if (currentMonth == 10) {
        var currentMonth = "November";
    }
    else if (currentMonth == 11) {
        var currentMonth = "December";
    }

    document.getElementById("todaysDate").innerHTML = currentDay + ", " + currentDate.getDate() + " " + currentMonth + " " + currentDate.getFullYear();
}

function RefreshDates(){
GetCurrentYear();
TodaysDate();
Message();
}

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function Message() {
    var currentDay = 5;
    if (currentDate == 5) {
    
    }
}