"use strict"; // Mengaktifkan mode ketat untuk membantu menangkap kesalahan

// Mendapatkan elemen tombol dari DOM dengan ID 'myButton'
const button = document.getElementById("myButton");

// Fungsi yang akan dipanggil ketika tombol diklik
function handleClick1() {
  console.log("Handler 1 runs"); // Menampilkan pesan di konsol
}

// Fungsi kedua yang akan dipanggil ketika tombol diklik
function handleClick2() {
  console.log("handler 2 runs"); // Menampilkan pesan di konsol
}

// Menambahkan event listener untuk menangani klik pada tombol
button.addEventListener("click", handleClick1); // Menambahkan handleClick1 sebagai listener
button.addEventListener("click", handleClick2); // Menambahkan handleClick2 sebagai listener

// Menghapus event listener untuk handleClick1
button.removeEventListener("click", handleClick1); // Menghapus handleClick1 dari listener
