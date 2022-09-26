let running = 0;
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let time = document.getElementById('time');

console.log('Stopwatch loaded');

function startTime() {
    if (running === 0) {
        running = 1;
        increment();
        start.innerHTML = 'Pause';
    } else {
        running = 0;
        start.innerHTML = 'Resume';
    }
}

function stopTime() {
    running = 0;
    start.innerHTML = 'Start';
}

function resetTime() {
    running = 0;
    time.innerHTML = '00:00:00';
    start.innerHTML = 'Start';
}

function increment() {
    if (running === 1) {
        setTimeout(function() {
            time.innerHTML = getTime();
            increment();
        }, 1000);
    }
}

function getTime() {
    let currentTime = new Date();
    let timeElapsed = new Date(currentTime - startTime);
    let min = timeElapsed.getMinutes();
    let sec = timeElapsed.getSeconds();
    let ms = timeElapsed.getMilliseconds();
    return (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec) + ':' + (ms < 10 ? '00' + ms : ms < 100 ? '0' + ms : ms);
}

start.onclick = function() {
    if (running === 0) {
        startTime();
    } else {
        stopTime();
    }
};

stop.onclick = function() {
    stopTime();
};

reset.onclick = function() {
    resetTime();
};