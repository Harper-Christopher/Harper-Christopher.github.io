function GetCurrentYear()
{
    var date = new Date();
    document.getElementById("currentyear").innerHTML = date.getFullYear();
}

function RefreshDate(){
GetCurrentYear();
}