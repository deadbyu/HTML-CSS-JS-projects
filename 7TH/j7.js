const labelElement = document.querySelector('.label');
const circleEl = document.querySelector('.circle');
const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');


inputEl.checked = false;

function UpdatebodyC() {
    if(inputEl.checked) {
        bodyEl.style.backgroundColor = "Black";
        circleEl.style.backgroundColor = "White";
    } else {
        bodyEl.style.backgroundColor = "White";
        circleEl.style.backgroundColor = "Black";
    }
}

inputEl.addEventListener('change', UpdatebodyC);