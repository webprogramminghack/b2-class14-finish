'use strict';

const inputElement = document.getElementById('username');
const attributes = inputElement.attributes;

for (let i = 0; i < attributes.length; i++) {
  console.log(attributes[i]);
  // console.log(`${attributes[i].name} = ${attributes[i].value}`);
}

// getAttribute()
{
  const inputElement = document.getElementById('username');
  const idValue = inputElement.getAttribute('id');

  console.log(idValue); // Output: username
}

// setAttribute() and removeAttribute()
{
  const inputElement = document.getElementById('username');
  inputElement.setAttribute('placeholder', 'Enter username'); // Mengubah nilai attribute yang sudah ada
  // menambah attribute yang tidak ada
  inputElement.setAttribute('value', 'JohnDoe'); // Menambahkan atribut value
  inputElement.setAttribute('class', 'bg-red');
  inputElement.removeAttribute('class'); // Menghapus attribute class
  // inputElement.classList.remove('bg-red');
}
// hasAttribute()
{
  const inputElement = document.getElementById('username');
  const hasId = inputElement.hasAttribute('id');

  console.log(hasId); // Output: true
}

// removeAttribute();
