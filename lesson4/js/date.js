function GetCurrentYear()
{
    var dates = new Date();
    document.getElementById("currentYear").innerHTML = dates.getFullYear();
}

function TodaysDate(){
    var date = new Date();
    document.getElementById("todaysDate").innerHTML = date;
}

function RefreshDates(){
GetCurrentYear();
TodaysDate();
}

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
