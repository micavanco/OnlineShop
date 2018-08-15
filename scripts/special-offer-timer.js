(function () {
    var counter = 0;
    var seconds = 59;
    var minutes = 59;
    var hours = 23;

    var elSeconds = document.getElementById('offer-seconds');
    var elMinutes = document.getElementById('offer-minutes');
    var elHours = document.getElementById('offer-hours');

    elSeconds.innerText = seconds.toString();
    elMinutes.innerText = minutes.toString();
    elHours.innerText = hours.toString();

    setInterval(updateTimer, 1000);


    function updateTimer() {
        counter++;
        seconds--;
        if(counter === 59)
        {
            seconds = 59;
            minutes--;
            if(minutes === 0)
            {
                minutes = 59;
                hours--;
            }
            counter = 0;
        }
        if(seconds < 10)
            elSeconds.innerText = '0'+seconds.toString();
        else
            elSeconds.innerText = seconds.toString();
        if(minutes < 10)
            elMinutes.innerText = '0'+minutes.toString();
        else
            elMinutes.innerText = minutes.toString();
        if(hours < 10)
            elHours.innerText = '0'+hours.toString();
        else
            elHours.innerText = hours.toString();
    }
}());