'use strict';

// this is illegal
// these classes are considered "internal" to the browser's implementation of the DOM (Document Object Model).
// const heading = new HTMLHeadingElement('h1');

// createElement();
{
  const newParagraph = document.createElement('p'); // Create a <p> element
  newParagraph.textContent = 'This is a new paragraph.'; // Add text to the paragraph
  document.body.appendChild(newParagraph); // Append the paragraph to the end of the body
}

// appendChild();
// appendChild returns the appended element
{
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = 'New item';
  ul.appendChild(li); // Add the <li> element as the last child of <ul>
}

// textContent
{
  const paragraph = document.querySelector('p');
  paragraph.textContent = 'This text has been changed.';
}

// innerHTML
{
  const div = document.querySelector('div');
  div.innerHTML = '<h2>New Heading</h2><p>New content inside the div.</p>';
}

// after();
{
  const existingElement = document.querySelector('p');
  const newElement = document.createElement('p');
  newElement.textContent =
    'This is a new element added after the existing one.';
  existingElement.after(newElement);
  // existingElement.before(newElement);
}

// append();
// append does not return the appended element but allows us to append multiple elements at once
// if we don't care about the return value, append is preferable than appendChild
{
  const div = document.querySelector('div');
  const newElement1 = document.createElement('span');
  newElement1.textContent = 'New span 1';
  const newElement2 = document.createElement('span');
  newElement2.textContent = 'New span 2';

  div.append(newElement1, newElement2); // Add multiple elements at once
}

// prepend();
{
  const div = document.querySelector('div');
  const newHeading = document.createElement('h1');
  newHeading.textContent = 'Heading at the beginning';
  div.prepend(newHeading); // Add to the beginning of the <div> element
}

// insertAdjacentHTML()
// "beforebegin": Before the element.
// "afterbegin": Inside the element, before the first child.
// "beforeend": Inside the element, after the last child.
// "afterend": After the element.
{
  const div = document.querySelector('div');
  div.insertAdjacentHTML('beforebegin', '<p>Hello everyone.</p>');
}

// replaceChild();
{
  const parent = document.querySelector('div');
  const newHeading = document.createElement('h3');
  newHeading.textContent = 'This is a new heading';

  const oldHeading = parent.querySelector('h1');
  parent.replaceChild(newHeading, oldHeading);
}

// cloneNode();
{
  const div = document.querySelector('div');
  const clonedDiv = div.cloneNode(true); // Clone the div and its children

  document.body.appendChild(clonedDiv); // Append the cloned div to the body
}

// removeChild();
{
  const div = document.querySelector('div');
  const h3 = div.querySelector('h3');

  div.removeChild(h3); // Remove the <h3> element from the <div>
}

// insertBefore();
{
  const div = document.querySelector('div');
  const newHeading = document.createElement('h1');
  newHeading.textContent = 'This is a new heading';

  const paragraph = div.querySelector('p');
  div.insertBefore(newHeading, paragraph);
}
