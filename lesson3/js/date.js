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