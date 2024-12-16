"use strict";

// Mendapatkan elemen parent dari elemen dengan kelas "text"
const text = document.querySelector(".text");
console.log(text.parentElement); // Menampilkan elemen parent dari elemen "text"

// Memilih Elemen Anak
{
  const container = document.querySelector(".container"); // Mengambil elemen dengan kelas "container"

  const firstChild = container.firstElementChild; // Elemen anak pertama
  const lastChild = container.lastElementChild; // Elemen anak terakhir

  console.log(firstChild); // Menampilkan elemen anak pertama
  console.log(lastChild); // Menampilkan elemen anak terakhir
}

// Menjelaskan apa yang terjadi jika kita menggunakan firstChild daripada firstElementChild
{
  const parent = document.querySelector(".container"); // Mengambil elemen dengan kelas "container"
  console.log(parent.firstChild); // Menampilkan firstChild, yang bisa jadi bukan elemen (misalnya, teks kosong)
}

// Memilih Elemen Sibling
{
  const container = document.querySelector(".container"); // Mengambil elemen dengan kelas "container"

  const firstChild = container.firstElementChild; // Elemen anak pertama
  const secondParagraph = firstChild.nextElementSibling; // Elemen sibling setelah paragraf pertama
  const firstParagraph = secondParagraph.previousElementSibling; // Elemen sibling sebelum paragraf kedua

  console.log(secondParagraph); // Menampilkan elemen sibling kedua
  console.log(firstParagraph); // Menampilkan elemen sibling pertama
}

// Mengambil semua elemen child
{
  const container = document.querySelector(".container"); // Mengambil elemen dengan kelas "container"
  const paragraphs = container.children; // Mengambil semua elemen anak dari container
  console.log(paragraphs); // Menampilkan semua elemen anak
}
