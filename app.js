const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');

let cancelId;
let startTime;

function startTimer() {
    startTime = Date.now();
    console.log(startTime)
    cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
    cancelAnimationFrame(cancelId)
}

function resetTimer() {

}

function updateTimer() {
    let millisElapsed = (Date.now() - startTime);
    let secondsElapsed = millisElapsed / 1000;
    let minutesElapsed = secondsElapsed / 60;

    let minutesFormat = Math.floor(minutesElapsed);
    let secondsFormat = Math.floor(secondsElapsed % 60);
    let millisFormat = millisElapsed % 1000

    if (minutesFormat.toString().length === 1) {
        minutesFormat = "0" + minutesFormat;
    }
    if (secondsFormat.toString().length === 1) {
        secondsFormat = "0" + secondsFormat;
    }
    if (millisFormat.toString().length < 3) {
        millisFormat = millisFormat.toString().padStart(3, "0");
    }
    

    timerMilliseconds.innerHTML = millisFormat;
    timerSeconds.innerHTML = secondsFormat;
    timerMinutes.innerHTML = minutesFormat;

    cancelId = requestAnimationFrame(updateTimer)
}