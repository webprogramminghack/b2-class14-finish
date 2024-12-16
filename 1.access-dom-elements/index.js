// Mengaktifkan mode ketat untuk menghindari kesalahan umum
"use strict";

// Mengambil elemen dengan ID "message" dari dokumen dan menyimpannya dalam variabel msg
const msg = document.getElementById("message");
// Menampilkan elemen msg di konsol
console.log(msg);

// Mengambil semua elemen <h1> dari dokumen dan menyimpannya dalam variabel headings
const headings = document.getElementsByTagName("h1");
// Menampilkan elemen headings di konsol
console.log(headings);

// Mengambil elemen dengan ID "container" dari dokumen
const container = document.getElementById("container");
// Mengambil semua elemen dengan kelas "message" yang berada di dalam container
const messages = container.getElementsByClassName("message");
// console.log(messages); // Menampilkan elemen messages di konsol (dihapus dari tampilan)

// Menampilkan objek dokumen di konsol
console.log(document);
// Menampilkan elemen container di konsol
console.log(container);

// Menunjukkan bahwa prototipe dari container dan dokumen memiliki kesamaan
console.log(container.__proto__.__proto__.__proto__.__proto__ === document.__proto__.__proto__.__proto__);

// Menunjukkan bahwa container adalah instance dari Node (dihapus dari tampilan)
// console.log(document instanceof Node);
// console.log(container instanceof Node);

// Menggunakan querySelector untuk mengambil elemen
{
  // Mengambil elemen pertama dengan kelas "message"
  const message = document.querySelector(".message");
  // Menampilkan elemen message di konsol
  console.log("message :>> ", message);

  // Mengambil semua elemen dengan kelas "message" di dalam container
  const messages = document.querySelector("#container").querySelectorAll(".message");
  // Menampilkan elemen messages di konsol
  console.log("messages :>> ", messages);
}

// Menunjukkan bahwa metode akses berada di prototipe dari Document dan Element, bukan di prototipe Node
console.log(Document.prototype.hasOwnProperty("querySelector")); // Memeriksa apakah Document memiliki metode querySelector
console.log(Element.prototype.hasOwnProperty("querySelectorAll")); // Memeriksa apakah Element memiliki metode querySelectorAll
console.log(Node.prototype.hasOwnProperty("querySelectorAll")); // Memeriksa apakah Node memiliki metode querySelectorAll
