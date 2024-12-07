'use strict';

const box3 = document.querySelector('.box1');

// seperti yang saya bilang, kalau Node merupakan instance Dari EventTarget
// maka node memiliki memampuan untuk manage events
// box3.addEventListener('click', function () {
//   console.log('click');
// });

const divs = document.querySelectorAll('div');

function logClassValue(e) {
  console.log(this.classList.value);
  e.stopPropagation(); // stop bubbling
}

divs.forEach((div) => {
  div.addEventListener('click', function () {
    console.log(this.classList.value);
  });
});

// divs.forEach((div) => {
//   div.addEventListener('click', logClassValue, {
//     capture: false,
//   });
// });
