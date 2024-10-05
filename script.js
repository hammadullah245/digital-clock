let hour = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');


let clock = setInterval(function time() {
    let date_now = new Date();
    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    if (hr < 10) {
        hr = "0" + hr;
    }

    if (min < 10) {
        min = "0" + min;  
    }

    if (sec < 10) {
        sec = "0" + sec;
    }

    hour.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = sec;

}, 1000
);