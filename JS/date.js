function TheCurrentYear()
{
    var year = new year();
    var currentDate = year.getFullYear();
    document.getElementById("currentyear").innerHTML = currentDate;
}

TheCurrentYear();