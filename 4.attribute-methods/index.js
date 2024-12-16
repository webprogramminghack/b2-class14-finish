"use strict"; // Mengaktifkan mode ketat untuk menghindari kesalahan umum

// Mendapatkan elemen input dengan id 'username'
const inputElement = document.getElementById("username");
// Mengambil semua atribut dari elemen input
const attributes = inputElement.attributes;

// Mengiterasi melalui semua atribut dan mencetaknya ke konsol
for (let i = 0; i < attributes.length; i++) {
  console.log(attributes[i]); // Mencetak objek atribut
  // console.log(`${attributes[i].name} = ${attributes[i].value}`); // Mencetak nama dan nilai atribut
}

// getAttribute() - Mengambil nilai dari atribut tertentu
{
  const inputElement = document.getElementById("username"); // Mendapatkan elemen input lagi
  const idValue = inputElement.getAttribute("id"); // Mengambil nilai atribut 'id'

  console.log(idValue); // Output: username, mencetak nilai id ke konsol
}

// setAttribute() dan removeAttribute() - Mengubah dan menghapus atribut
{
  const inputElement = document.getElementById("username"); // Mendapatkan elemen input lagi
  inputElement.setAttribute("placeholder", "Enter username"); // Mengubah nilai atribut 'placeholder'
  // Menambahkan atribut 'value' jika belum ada
  inputElement.setAttribute("value", "JohnDoe"); // Menambahkan atribut 'value' dengan nilai 'JohnDoe'
  inputElement.setAttribute("class", "bg-red"); // Menambahkan atribut 'class' dengan nilai 'bg-red'
  inputElement.removeAttribute("class"); // Menghapus atribut 'class' dari elemen input
  // inputElement.classList.remove('bg-red'); // Alternatif untuk menghapus kelas menggunakan classList
}

// hasAttribute() - Memeriksa apakah elemen memiliki atribut tertentu
{
  const inputElement = document.getElementById("username"); // Mendapatkan elemen input lagi
  const hasId = inputElement.hasAttribute("id"); // Memeriksa apakah atribut 'id' ada

  console.log(hasId); // Output: true, mencetak hasil pemeriksaan ke konsol
}

// removeAttribute(); // Contoh penggunaan removeAttribute() yang sudah ditunjukkan sebelumnya
