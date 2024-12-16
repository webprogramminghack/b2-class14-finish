"use strict";

// Mendapatkan elemen tombol dengan ID 'mouseButton'
const mouseButton = document.getElementById("mouseButton");

// Menambahkan event listener untuk event 'click' pada tombol
mouseButton.addEventListener("click", () => alert("Button clicked!")); // Menampilkan alert saat tombol diklik
// Menambahkan event listener untuk event 'mouseover' pada tombol
mouseButton.addEventListener("mouseover", () => console.log("Mouse over!")); // Menampilkan pesan di konsol saat mouse berada di atas tombol
// Menambahkan event listener untuk event 'mouseout' pada tombol
mouseButton.addEventListener("mouseout", () => console.log("Mouse out!")); // Menampilkan pesan di konsol saat mouse keluar dari tombol

// Mendapatkan elemen input dengan ID 'inputField'
const inputField = document.getElementById("inputField");

// Menambahkan event listener untuk event 'keydown' pada input
inputField.addEventListener(
  "keydown",
  (event) => console.log("Key down:", event.key) // Menampilkan kunci yang ditekan di konsol
);
// Menambahkan event listener untuk event 'keyup' pada input
inputField.addEventListener(
  "keyup",
  (event) => console.log("Key up:", event.key) // Menampilkan kunci yang dilepaskan di konsol
);
// Menambahkan event listener untuk event 'keypress' pada input
inputField.addEventListener("keypress", (event) => {
  // console.log(event); // Menampilkan objek event di konsol (dapat diaktifkan untuk debugging)
  if (event.key === "Enter") {
    // Memeriksa apakah kunci yang ditekan adalah 'Enter'
    console.log("Enter key pressed"); // Menampilkan pesan di konsol jika 'Enter' ditekan
  }
});

// Mendapatkan elemen form dengan ID 'myForm'
const form = document.getElementById("myForm");

// Menambahkan event listener untuk event 'submit' pada form
form.addEventListener("submit", (event) => {
  // console.log(event); // Menampilkan objek event di konsol (dapat diaktifkan untuk debugging)
  event.preventDefault(); // Mencegah reload halaman saat form disubmit
  alert("Form submitted!"); // Menampilkan alert saat form disubmit
});

// Menambahkan event listener untuk event 'resize' pada window
window.addEventListener("resize", () => {
  const width = window.innerWidth; // Mendapatkan lebar jendela
  const height = window.innerHeight; // Mendapatkan tinggi jendela
  console.log(`Window resized: Width = ${width}, Height = ${height}`); // Menampilkan ukuran jendela di konsol
});

// Menambahkan event listener untuk event 'scroll' pada window
window.addEventListener("scroll", () => {
  const scrollX = window.scrollX; // Mendapatkan posisi scroll horizontal
  const scrollY = window.scrollY; // Mendapatkan posisi scroll vertikal
  console.log(`Page scrolled: X = ${scrollX}, Y = ${scrollY}`); // Menampilkan posisi scroll di konsol
});

// Menambahkan event listener untuk event 'load' pada window
window.addEventListener("load", () => {
  console.log("Page loaded"); // Menampilkan pesan di konsol saat halaman selesai dimuat
});
