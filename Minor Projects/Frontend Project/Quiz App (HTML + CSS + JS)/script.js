let timeLeft = 10;

let timerId = setInterval(function () {
    timeLeft--;

    if (timeLeft <= 0) {
        timeLeft = 0;
        console.log(timeLeft);
        clearInterval(timerId);
        console.log("Time is up!");
        return;
    }

    console.log(timeLeft);
}, 1000);