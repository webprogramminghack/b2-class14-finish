"use strict";

// style property
{
  const divElement = document.getElementById("myDiv");

  // Mengubah style elemen
  divElement.style.color = "blue"; // Mengatur warna teks menjadi biru
  divElement.style.backgroundColor = "yellow"; // Mengatur warna latar belakang menjadi kuning
  divElement.style.fontSize = "20px"; // Mengatur ukuran font menjadi 20 piksel
}

// css text
{
  const divElement = document.getElementById("myDiv");

  // Menetapkan semua gaya menggunakan cssText
  divElement.style.cssText = "color: red; background-color: lightgrey; font-size: 24px;"; // Mengatur beberapa gaya sekaligus
}

// getComputedStyle
{
  const divElement = document.getElementById("myDiv");

  // Hanya mampu mendapatkan inline style
  console.log(divElement.style.border); // Menampilkan border inline
  console.log(divElement.style.padding); // Menampilkan padding inline

  // Mampu mendapatkan semua style, termasuk yang diambil dari CSS
  const computedStyle = window.getComputedStyle(divElement); // Mendapatkan semua gaya yang diterapkan

  console.log(computedStyle.border); // Menampilkan border yang diterapkan dari CSS
  console.log(computedStyle.padding); // Menampilkan padding yang diterapkan dari CSS
}

// className Property
{
  const divElement = document.getElementById("myDiv");

  // Mengganti seluruh daftar class
  divElement.className = "m-top"; // Mengatur class menjadi 'm-top'
}

// classList
{
  const divElement = document.getElementById("myDiv");

  // Menambahkan kelas
  divElement.classList.add("m-top"); // Menambahkan kelas 'm-top'

  // Menghapus kelas
  divElement.classList.remove("m-top"); // Menghapus kelas 'm-top'

  // Memeriksa apakah kelas tertentu ada
  if (divElement.classList.contains("m-top")) {
    console.log("Element has m-top"); // Menampilkan pesan jika kelas 'm-top' ada
  }

  // Mengganti kelas (jika ada, hapus; jika tidak ada, tambahkan)
  divElement.classList.toggle("m-top"); // Mengganti kelas 'm-top'
  divElement.classList.toggle("m-top"); // Mengganti kelas 'm-top' lagi
}
