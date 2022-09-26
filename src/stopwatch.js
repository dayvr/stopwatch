let [minutes, seconds, milliseconds] = [0, 0, 0];
let timer = null;
let isRunning = false;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const time = document.getElementById('time');

const start = () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(run, 10);
  }
}

const stop = () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

const reset = () => {
    if (!isRunning) {
        [minutes, seconds, milliseconds] = [0, 0, 0];
        time.innerHTML = '00:00:00';
    }
}

const run = () => {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    time.innerHTML = getFormattedTime();
}

const getFormattedTime = () => {
    return `${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(milliseconds / 10))}`;
}

const pad0 = (value) => {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
