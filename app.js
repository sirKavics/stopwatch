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

// PRACTICE RUN I

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
//     cancelAnimationFrame(cancelId)
// }

// function resetTimer() {
//     startTime = Date.now();
//     savedTime = 0;

//     timerMilliseconds.innerHTML = "000";
//     timerSeconds.innerHTML = "00";
//     timerMinutes.innerHTML = "00";
// }


// function updateTimer() {
//     cancelId  = requestAnimationFrame(updateTimer);

//     let millisElapsed = savedTime + Date.now() - startTime;
//     let secondsElapsed = millisElapsed / 1000;
//     let minutesElapsed = secondsElapsed / 60;

//     let millisFormat = millisElapsed % 1000;
//     let secondsFormat = Math.floor(secondsElapsed % 60);
//     let minutesFormat = Math.floor(minutesElapsed);

//     if (millisFormat.toString().length < 3) {
//         millisFormat = millisFormat.toString().padStart(3, "0");
//     }
//     if (secondsFormat.toString().length < 2) {
//         secondsFormat = "0" + secondsFormat;
//     }
//     if (minutesFormat.toString().length < 2) {
//         minutesFormat = "0" + minutesFormat;
//     }

//     timerMilliseconds.innerHTML = millisFormat;
//     timerSeconds.innerHTML = secondsFormat;
//     timerMinutes.innerHTML = minutesFormat;
// }

// PRACTICE RUN II

const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds');
const timerMinutes = document.querySelector('.timer__minutes');

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
    startTime = Date.now();
    cancelId = requestAnimationFrame(updateTimer);
}

function stopTimer() {
    savedTime = savedTime + Date.now() - startTime;
    cancelAnimationFrame(cancelId)
}

function resetTimer() {
    startTime = Date.now();
    savedTime = 0;

    timerMilliseconds.innerHTML = "000";
    timerSeconds.innerHTML = "00";
    timerMinutes.innerHTML = "00";
}

function updateTimer() {
    console.log('updateTimer()');
    cancelId = requestAnimationFrame(updateTimer);

    millisecondsElapsed = savedTime +Date.now() - startTime;
    secondsElapsed = millisecondsElapsed / 1000;
    minutesElapsed = secondsElapsed / 60;

    millisecondsFormat = millisecondsElapsed % 1000;
    secondsFormat = Math.floor(secondsElapsed % 60);
    minutesFormat = Math.floor(minutesElapsed);

    if (millisecondsFormat.toString().length < 3) {
        millisecondsFormat = millisecondsFormat.toString().padStart(3, "0");
    }
    if (secondsFormat.toString().length < 2) {
        secondsFormat = "0" + secondsFormat;
    }
    if (minutesFormat.toString().length < 2) {
        minutesFormat = "0" + minutesFormat;
    }

    timerMilliseconds.innerHTML = millisecondsFormat;
    timerSeconds.innerHTML = secondsFormat;
    timerMinutes.innerHTML = minutesFormat;

}