// Call from html
const nightModeBtn = document.querySelector('#night-mode-btn');
const dayModeBtn = document.querySelector('#day-mode-btn');
const body = document.querySelector('body');
const bodySection = document.querySelector('#body');
const buttons = document.querySelectorAll('.button');
const leftArrowDark = document.querySelector('#left-arrow-dark');
const leftArrowWhite = document.querySelector('#left-arrow-white');
const screen = document.querySelector('#screen');
const timer = document.querySelector('#timer');
const clock = document.querySelector('#clock');
const stopWatch = document.querySelector('#stop-watch');
const time = document.querySelector('#time');
const startStopBtn = document.querySelector('#start-stop-btn');
const resetBtn = document.querySelector('#reset-btn');
const enterBtn = document.querySelector('#enter-btn');
const cover = document.querySelector('.cover');
const leftArrow = document.querySelector('.left-arrow');
// Functions
function updateTime () {
    const hours = new Date().getHours().toString().padStart(2, '0');
    const minutes = new Date().getMinutes().toString().padStart(2, '0');
    const seconds = new Date().getSeconds().toString().padStart(2, '0');
    const milliSeconds = new Date().getMilliseconds().toString().padStart(3, '0');
    const time = document.querySelector('.time');
    time.innerHTML = `<h1>${hours} : ${minutes} : ${seconds}</h1>`
    
}
setInterval(updateTime, 100);
// updateTime()

// Dark mode
function darkMode () {
    body.classList.add('dark-mode');
    bodySection.classList.add('dark-btn')
    nightModeBtn.style.display = 'none';
    dayModeBtn.style.display = 'block';
    leftArrowDark.style.display = 'none';
    leftArrowWhite.style.display = 'block';

    buttons.forEach(button => {
        button.classList.add('dark-btn');
    })
}
// Day mode
function dayMode () {
    body.classList.remove('dark-mode');
    bodySection.classList.remove('dark-btn')
    dayModeBtn.style.display = 'none';
    nightModeBtn.style.display = 'block';
    leftArrowDark.style.display = 'block';
    leftArrowWhite.style.display = 'none';

    buttons.forEach(button => {
        button.classList.remove('dark-btn');
    })
}
function showClock () {
    time.style.display = 'block';
    stopWatch.style.display = 'none';
    startStopBtn.style.display = 'none';
    resetBtn.style.display = 'none';
}
function showTimer () {
    stopWatch.innerHTML = `00.00.000`
    time.style.display = 'none';
    stopWatch.style.display = 'block';
    startStopBtn.style.display = 'block';
    resetBtn.style.display = 'block';
}

function startStop () {
    if (startStopBtn.innerText === 'Start') {
        startStopBtn.innerText = 'Stop';
    }else {
        startStopBtn.innerText = 'Start';
    }
}
function reset () {
    startStopBtn.innerText = 'Start';
    stopWatch.innerText = '00:00:00';
}
function enter () {
    cover.classList.add('open')
}
function exit () {
    cover.classList.remove('open')
}
// Events
nightModeBtn.addEventListener('click', darkMode)
dayModeBtn.addEventListener('click', dayMode)
clock.addEventListener('click', showClock)
timer.addEventListener('click', showTimer)
startStopBtn.addEventListener('click', startStop)
resetBtn.addEventListener('click', reset);
enterBtn.addEventListener('click', enter)
leftArrow.addEventListener('click', exit)