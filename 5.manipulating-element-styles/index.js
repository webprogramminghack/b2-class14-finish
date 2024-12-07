'use strict';

// style property
{
  const divElement = document.getElementById('myDiv');

  // Mengubah style elemen
  divElement.style.color = 'blue';
  divElement.style.backgroundColor = 'yellow';
  divElement.style.fontSize = '20px';
}

// css text
{
  const divElement = document.getElementById('myDiv');

  // Menetapkan semua gaya menggunakan cssText
  divElement.style.cssText =
    'color: red; background-color: lightgrey; font-size: 24px;';
}

// getComputedStyle
{
  const divElement = document.getElementById('myDiv');

  // Hanya mampu mendapatkan inline style
  console.log(divElement.style.border);
  console.log(divElement.style.padding);

  // Mampu mendapatkan semua style, termasuk yang diambil dari CSS
  const computedStyle = window.getComputedStyle(divElement);

  console.log(computedStyle.border);
  console.log(computedStyle.padding);
}

// className Property
{
  const divElement = document.getElementById('myDiv');

  // Mengganti seluruh daftar class
  divElement.className = 'm-top';
}

// classList
{
  const divElement = document.getElementById('myDiv');

  // Menambahkan kelas
  divElement.classList.add('m-top');

  // Menghapus kelas
  divElement.classList.remove('m-top');

  // Memeriksa apakah kelas tertentu ada
  if (divElement.classList.contains('m-top')) {
    console.log('Element has m-top');
  }

  // Mengganti kelas (jika ada, hapus; jika tidak ada, tambahkan)
  divElement.classList.toggle('m-top');
  divElement.classList.toggle('m-top');
}
