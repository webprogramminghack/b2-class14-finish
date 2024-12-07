'use strict';

const button = document.getElementById('myButton');

function handleClick1() {
  console.log('Handler 1 runs');
}

function handleClick2() {
  console.log('handler 2 runs');
}

// Menambahkan event listener
button.addEventListener('click', handleClick1);
button.addEventListener('click', handleClick2);

// Menghapus event listener
button.removeEventListener('click', handleClick1);
