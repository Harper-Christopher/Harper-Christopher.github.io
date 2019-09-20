function GetCurrentYear()
{
    var date = new Date();
    document.getElementById("currentYear").innerHTML = date.getFullYear();
}

function ModifiedDate(){
    document.getElementById("timeModified").innerHTML = (document.lastModified);
}

function RefreshDates(){
GetCurrentYear();
ModifiedDate();
}