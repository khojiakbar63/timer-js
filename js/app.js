// Call from html
const nightModeBtn = document.querySelector('#night-mode-btn');
const dayModeBtn = document.querySelector('#day-mode-btn');
const body = document.querySelector('body');
const screen = document.querySelector('#body');
const buttons = document.querySelectorAll('.button');


// Functions
function updateTime () {
    const hours = new Date().getHours().toString().padStart(2, '0');
    const minutes = new Date().getMinutes().toString().padStart(2, '0');
    const seconds = new Date().getSeconds().toString().padStart(2, '0');
    const time = document.querySelector('.time');
    time.innerHTML = `<h1>${hours} : ${minutes} : ${seconds}</h1>`
}
setInterval(updateTime, 1000);
updateTime()

// Dark mode
function darkMode () {
    body.classList.add('dark-mode');
    screen.classList.add('dark-btn')
    nightModeBtn.style.display = 'none';
    dayModeBtn.style.display = 'block';

    buttons.forEach(button => {
        button.classList.add('dark-btn');
    })
}
// Day mode
function dayMode () {
    body.classList.remove('dark-mode');
    screen.classList.remove('dark-btn')
    dayModeBtn.style.display = 'none';
    nightModeBtn.style.display = 'block';
    buttons.forEach(button => {
        button.classList.remove('dark-btn');
    })
}
// Modebtn 


nightModeBtn.addEventListener('click', darkMode)
dayModeBtn.addEventListener('click', dayMode)