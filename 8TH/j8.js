
const bodyEl = document.querySelector('body');
const textareaEl = document.querySelector('.textarea');
const totalCountEl = document.querySelector('.total_count');
const leftCounterEl = document.querySelector('.left_counter');

let totalCount = 0;
let leftCounter = 0;

textareaEl.addEventListener('input', () => {
    const text = textareaEl.value;
    totalCount = text.length;
    leftCounter = totalCount;
    totalCountEl.innerHTML = totalCount;
    leftCounterEl.innerHTML = 50 - leftCounter;
});


