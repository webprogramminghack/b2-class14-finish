'use strict';

const msg = document.getElementById('message');
console.log(msg);

const headings = document.getElementsByTagName('h1');
console.log(headings);

const container = document.getElementById('container');
const messages = container.getElementsByClassName('message');
// console.log(messages);

console.log(document);
console.log(container);

// show slide 33

console.log(
  container.__proto__.__proto__.__proto__.__proto__ ===
    document.__proto__.__proto__.__proto__
);

// console.log(document instanceof Node);
// console.log(container instanceof Node);

// use querySelector
{
  const message = document.querySelector('.message');
  console.log('message :>> ', message);

  // const messages = document.querySelectorAll('.message');

  const messages = document
    .querySelector('#container')
    .querySelectorAll('.message');

  // const messages = document.getElementsByID
  console.log('messages :>> ', messages);
}

// accessor methods reside in the prototype of the Document and the Element, not in the Node prototype
console.log(Document.prototype.hasOwnProperty('querySelector'));
console.log(Element.prototype.hasOwnProperty('querySelectorAll'));
console.log(Node.prototype.hasOwnProperty('querySelectorAll'));
