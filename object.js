let pesawat = {
  nama: "Buddy F12",
  warna: "Putih",
  tahunDibuat: 1999,
  namaPilot: [
    { nama: "Sharron", umur: 31 },
    { nama: "Henry", umur: 25 },
  ],
  getSummary: function () {
    return (
      "Nama Pesawat adalah " +
      this.nama +
      ", umur pesawat adalah : " +
      (new Date().getFullYear() - this.tahunDibuat) +
      ", dan Warna pesawat adalah " +
      this.warna
    );
  },
};

let arr = [
  { nama: "Sharron", umur: 31 },
  { nama: "Sarron", umur: 31 },
  { nama: "Henry", umur: 25 },
  { nama: "Jhon", umur: 40 },
];

arr.sort(function (kecil, besar) {
    kecil = kecil.nama.toLowerCase().split("").map(e=> e.charCodeAt()).reduce(function(a,b){return a+b})
    besar = besar.nama.toLowerCase().split("").map(e=> e.charCodeAt()).reduce(function(a,b){return a+b})
  return kecil-besar
});

console.log(arr);

// array kumpulan dari data yang index nya adalah angka 0, 1, 2 ...
// object kumpulan dari data yang indexnya adalah string

console.log("tulisan".toUpperCase());

console.log(pesawat.namaPilot[1].nama);

// sebuah object memiliki property (menyimpan nilai) dan method (menyimpan function)
// property terdiri atas key (nama) dan value (nilai)


const obj1 = [
  {
    name : "Seiga",
    job : "Developer",
    type : "Full stack Developer"
  },
  {
    name : "Seiga",
    job : "Developer",
    type : "Full stack Developer"
  },
  {
    name : "Seiga",
    job : "Developer",
    type : "Full stack Developer"
  },
  {
    name : "Seiga",
    job : "Developer",
    type : "Full stack Developer"
  }
]