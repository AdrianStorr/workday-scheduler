let workday = {
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM" : "",
    "2 PM" : "",
    "3 PM" : "",
    "4 PM" : "",
    "5 PM" : "",
};

$(document).ready(function() {
    if(!localStorage.getItem('workday')) {
        updateCalenderTask(workday);
    } else{
         updateCalenderTask(JSON.parse(localStorage.getItem('workday')));
    }
})

$('#currentDay').text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm:ss a'));

let counter = 1;
for(const property in workDay) {
    let textEntry = "#text-entry" + counter;
    $(textEntry).text(workDay[property]);
    let presentHour= moment().hour();
    let presntTime = hourStringNumber(timeString);
}