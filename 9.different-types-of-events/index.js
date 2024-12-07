'use strict';

// mouse event
const mouseButton = document.getElementById('mouseButton');

mouseButton.addEventListener('click', () => alert('Button clicked!'));
mouseButton.addEventListener('mouseover', () => console.log('Mouse over!'));
mouseButton.addEventListener('mouseout', () => console.log('Mouse out!'));

// keyboard event
const inputField = document.getElementById('inputField');

inputField.addEventListener('keydown', (event) =>
  console.log('Key down:', event.key)
);
inputField.addEventListener('keyup', (event) =>
  console.log('Key up:', event.key)
);
inputField.addEventListener('keypress', (event) => {
  // console.log(event);
  if (event.key === 'Enter') {
    console.log('Enter key pressed');
  }
});

// form events
const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  // console.log(event);
  event.preventDefault(); // Mencegah reload halaman
  alert('Form submitted!');
});

// window events
// Window resize event listener
window.addEventListener('resize', () => {
  const width = window.innerWidth; // Get the width of the window
  const height = window.innerHeight; // Get the height of the window
  console.log(`Window resized: Width = ${width}, Height = ${height}`);
});

// Window scroll event listener
window.addEventListener('scroll', () => {
  const scrollX = window.scrollX; // Get the horizontal scroll position
  const scrollY = window.scrollY; // Get the vertical scroll position
  console.log(`Page scrolled: X = ${scrollX}, Y = ${scrollY}`);
});

// Window load event listener
window.addEventListener('load', () => {
  console.log('Page loaded');
});
