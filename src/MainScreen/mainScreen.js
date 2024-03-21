window.onload = function() {
    var startDate = new Date("2023-09-09");
    var interval = setInterval(function() {
        var currentDate = new Date();
        var timeDiff = currentDate - startDate;

        var seconds = Math.floor((timeDiff / 1000) % 60);
        var minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        var hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        var months = Math.floor(days / 30);
        days %= 30;
        document.getElementById("count-day").innerHTML = "<h2>" + months + " tháng " + days + " ngày và " + hours + ":" + minutes + ":" + seconds + "</h2>";
    }, 1000);
}