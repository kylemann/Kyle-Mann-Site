var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'good morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'good afternoon';
    else if (hrs >= 17 && hrs <= 18)
        greet = 'good evening';
else if (hrs >= 18 && hrs <= 24)
        greet = 'good night';
    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b>';