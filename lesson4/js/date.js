function GetCurrentYear()
{
    var dates = new Date();
    document.getElementById("currentYear").innerHTML = dates.getFullYear();
}

function ModifiedDate(){
    document.getElementById("timeModified").innerHTML = (document.lastModified);
}

function RefreshDates(){
GetCurrentYear();
ModifiedDate();
}

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
