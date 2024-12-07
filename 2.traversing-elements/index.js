'use strict';

// get parent
const text = document.querySelector('.text');
console.log(text.parentElement);

// Memilih Elemen Anak
{
  const container = document.querySelector('.container');

  const firstChild = container.firstElementChild; // Elemen anak pertama
  const lastChild = container.lastElementChild; // Elemen anak terakhir

  console.log(firstChild); // <p class="text">Paragraph 1</p>
  console.log(lastChild); // <p class="text">Paragraph 4</p>
}

// what happens if we use firstChild instead of firstElementChild
{
  const parent = document.querySelector('.container');
  console.log(parent.firstChild);
}

// Memilih Elemen Sibling
{
  const container = document.querySelector('.container');

  const firstChild = container.firstElementChild;
  const secondParagraph = firstChild.nextElementSibling; // Elemen sibling setelah paragraf pertama
  const firstParagraph = secondParagraph.previousElementSibling; // Elemen sibling setelah paragraf kedua

  console.log(secondParagraph); // <p class="text">Paragraph 2</p>
  console.log(firstParagraph); // <p class="text">Paragraph 3</p>
}

// Mengambil semua element child
{
  const container = document.querySelector('.container');
  const paragraphs = container.children;
  console.log(paragraphs);
}
