"use strict";

// this is illegal
// these classes are considered "internal" to the browser's implementation of the DOM (Document Object Model).
// const heading = new HTMLHeadingElement('h1');

// Membuat elemen <p> baru dan menambahkannya ke body
{
  const newParagraph = document.createElement("p"); // Membuat elemen <p>
  newParagraph.textContent = "This is a new paragraph."; // Menambahkan teks ke paragraf
  document.body.appendChild(newParagraph); // Menambahkan paragraf ke akhir body
}

// Menambahkan elemen <li> baru ke dalam <ul>
{
  const ul = document.querySelector("ul"); // Mencari elemen <ul>
  const li = document.createElement("li"); // Membuat elemen <li>
  li.textContent = "New item"; // Menambahkan teks ke <li>
  ul.appendChild(li); // Menambahkan <li> sebagai anak terakhir dari <ul>
}

// Mengubah teks dalam elemen <p>
{
  const paragraph = document.querySelector("p"); // Mencari elemen <p>
  paragraph.textContent = "This text has been changed."; // Mengubah teks dalam <p>
}

// Mengubah konten HTML dalam elemen <div>
{
  const div = document.querySelector("div"); // Mencari elemen <div>
  div.innerHTML = "<h2>New Heading</h2><p>New content inside the div.</p>"; // Mengubah konten HTML
}

// Menambahkan elemen baru setelah elemen yang sudah ada
{
  const existingElement = document.querySelector("p"); // Mencari elemen <p> yang ada
  const newElement = document.createElement("p"); // Membuat elemen <p> baru
  newElement.textContent = "This is a new element added after the existing one."; // Menambahkan teks
  existingElement.after(newElement); // Menambahkan elemen baru setelah elemen yang ada
}

// Menambahkan beberapa elemen sekaligus ke dalam <div>
{
  const div = document.querySelector("div"); // Mencari elemen <div>
  const newElement1 = document.createElement("span"); // Membuat elemen <span> baru
  newElement1.textContent = "New span 1"; // Menambahkan teks ke <span>
  const newElement2 = document.createElement("span"); // Membuat elemen <span> baru
  newElement2.textContent = "New span 2"; // Menambahkan teks ke <span>

  div.append(newElement1, newElement2); // Menambahkan beberapa elemen sekaligus
}

// Menambahkan elemen baru di awal <div>
{
  const div = document.querySelector("div"); // Mencari elemen <div>
  const newHeading = document.createElement("h1"); // Membuat elemen <h1> baru
  newHeading.textContent = "Heading at the beginning"; // Menambahkan teks ke <h1>
  div.prepend(newHeading); // Menambahkan ke awal elemen <div>
}

// Menyisipkan HTML di sekitar elemen
{
  const div = document.querySelector("div"); // Mencari elemen <div>
  div.insertAdjacentHTML("beforebegin", "<p>Hello everyone.</p>"); // Menyisipkan HTML sebelum <div>
}

// Mengganti elemen anak dalam <div>
{
  const parent = document.querySelector("div"); // Mencari elemen <div>
  const newHeading = document.createElement("h3"); // Membuat elemen <h3> baru
  newHeading.textContent = "This is a new heading"; // Menambahkan teks ke <h3>

  const oldHeading = parent.querySelector("h1"); // Mencari elemen <h1> yang ada
  parent.replaceChild(newHeading, oldHeading); // Mengganti <h1> yang ada dengan <h3> baru
}

// Mengkloning elemen <div>
{
  const div = document.querySelector("div"); // Mencari elemen <div>
  const clonedDiv = div.cloneNode(true); // Mengkloning <div> dan anak-anaknya

  document.body.appendChild(clonedDiv); // Menambahkan <div> yang dikloning ke body
}

// Menghapus elemen anak dari <div>
{
  const div = document.querySelector("div"); // Mencari elemen <div>
  const h3 = div.querySelector("h3"); // Mencari elemen <h3> yang ada

  div.removeChild(h3); // Menghapus elemen <h3> dari <div>
}

// Menyisipkan elemen baru sebelum elemen yang ada
{
  const div = document.querySelector("div"); // Mencari elemen <div>
  const newHeading = document.createElement("h1"); // Membuat elemen <h1> baru
  newHeading.textContent = "This is a new heading"; // Menambahkan teks ke <h1>

  const paragraph = div.querySelector("p"); // Mencari elemen <p> yang ada
  div.insertBefore(newHeading, paragraph); // Menyisipkan <h1> baru sebelum <p>
}
