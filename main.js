'use strict';

let countEl = document.getElementById('count-el');
let incrementBtn = document.getElementById('increment-btn');
let saveBtn = document.getElementById('save-btn');
let decreaseBtn = document.getElementById('decrease-btn');
let savedEl = document.getElementById('saved-el');
let totalEl = document.getElementById('total-el');

let count = 0;
let total = 0;

incrementBtn.addEventListener('click', () => {
  const increment = function () {
    count ++;
    countEl.textContent = count;
  };
  increment();
});

saveBtn.addEventListener('click', () => {
  const save = function () {
    let countStr = `${count} - `;
    savedEl.textContent += countStr;
    total += count;
    totalEl.textContent = total;
    countEl.textContent = 0;
    count = 0;
  };
  save();
});

decreaseBtn.addEventListener('click', () => {
  const decrease = function () {
    count--;
    countEl.textContent = count;
  }
  decrease();
});
