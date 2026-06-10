// const timerMilliseconds = document.querySelector('.timer__milliseconds');
// const timerSeconds = document.querySelector('.timer__seconds');
// const timerMinutes = document.querySelector('.timer__minutes');

// let cancelId;
// let startTime;
// let savedTime = 0;

// function startTimer() {
//     startTime = Date.now();
//     cancelId = requestAnimationFrame(updateTimer)
// }

// function stopTimer() {
//     savedTime = savedTime + Date.now() - startTime;
//     console.log(savedTime)
//     cancelAnimationFrame(cancelId);
// }

// function resetTimer() {
//     startTime = Date.now();
//     savedTime = 0;

//     timerMilliseconds.innerHTML = "000";
//     timerSeconds.innerHTML = "00";
//     timerMinutes.innerHTML = "00";
// }

// function updateTimer() {
//     let millisElapsed = savedTime + Date.now() - startTime;
//     let secondsElapsed = millisElapsed / 1000;
//     let minutesElapsed = secondsElapsed / 60;

//     let millisFormat = millisElapsed % 1000
//     let secondsFormat = Math.floor(secondsElapsed % 60);
//     let minutesFormat = Math.floor(minutesElapsed);

//     if (minutesFormat.toString().length === 1) {
//         minutesFormat = "0" + minutesFormat;
//     }
//     if (secondsFormat.toString().length === 1) {
//         secondsFormat = "0" + secondsFormat;
//     }
//     if (millisFormat.toString().length < 3) {
//         millisFormat = millisFormat.toString().padStart(3, "0");
//     }
    

//     timerMilliseconds.innerHTML = millisFormat;
//     timerSeconds.innerHTML = secondsFormat;
//     timerMinutes.innerHTML = minutesFormat;

//     cancelId = requestAnimationFrame(updateTimer)
// }

// PRACTICE RUN 

const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
    startTime = Date.now();
    cancelId =requestAnimationFrame(updateTimer);
}

function stopTimer() {
    cancelAnimationFrame(cancelId);
    savedTime = savedTime + Date.now() - startTime
    console.log(savedTime)
}

function resetTimer() {
    savedTime = 0;
    startTime = Date.now();

    timerMilliseconds.innerHTML = "000";
    timerSeconds.innerHTML = "00";
    timerMinutes.innerHTML = "00";
}

function updateTimer() {
    cancelId = requestAnimationFrame(updateTimer);
    
    let millisecondsElapsed = savedTime + Date.now() - startTime;
    let secondsElapsed = (millisecondsElapsed / 1000);
    let minutesElapsed = secondsElapsed / 60;

    let millisecondsFormat = millisecondsElapsed % 1000
    let secondsFormat = Math.floor(secondsElapsed % 60);
    let minutesFormat = Math.floor(minutesElapsed);

    if (millisecondsFormat.toString().length < 3) {
        millisecondsFormat = millisecondsFormat.toString().padStart(3, "0");
    }
    if (secondsFormat.toString().length === 1) {
        secondsFormat = secondsFormat.toString().padStart(2, "0");
    }
    if (minutesFormat.toString().length === 1) {
        minutesFormat = minutesFormat.toString().padStart(2, "0");
    }
    

    timerMilliseconds.innerHTML = millisecondsFormat;
    timerSeconds.innerHTML = secondsFormat;
    timerMinutes.innerHTML = minutesFormat;
}