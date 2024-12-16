"use strict";

// // Pilih elemen dengan class box3
// const box3 = document.querySelector(".box3");

// // 1. Event Bubbling Example
// // Bubbling adalah fase default di mana event "menggelembung" dari elemen terdalam ke luar.
// box3.addEventListener("click", function () {
//   console.log("Box 3 biru clicked!(Bubbling phase)");
// });

// // Pilih semua elemen div untuk demonstrasi event propagation
// const divs = document.querySelectorAll("div");

// // 2. Event Bubbling + stopPropagation Example
// // Dengan menghentikan bubbling menggunakan stopPropagation, event tidak akan naik lebih jauh.
// function logClassValue(e) {
//   console.log(`Bubbling stopped at: ${this.classList.value}`); // Menampilkan class elemen yang diklik
//   e.stopPropagation(); // Menghentikan event bubbling
// }

// divs.forEach((div) => {
//   div.addEventListener("click", logClassValue); // Menambahkan event listener untuk setiap div
// });

// // 3. Event Capturing Example
// // Capturing adalah kebalikan dari bubbling, di mana event "ditangkap" dari elemen terluar ke dalam.
// divs.forEach((div) => {
//   div.addEventListener(
//     "click",
//     function () {
//       console.log(`Capturing at: ${this.classList.value}`); // Menampilkan class elemen saat event ditangkap
//     },
//     { capture: true } // Mengaktifkan fase capturing
//   );
// });

// 4. Event Delegation Example
// Event delegation menggunakan fitur bubbling untuk menambahkan satu event listener ke parent.
const box1 = document.querySelector(".box1"); // Memilih elemen dengan class box1
box1.addEventListener("click", function (e) {
  console.log(`Delegated event on: ${e.target.classList.value}`); // Menampilkan class elemen yang diklik dalam delegasi
});
