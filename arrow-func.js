function perkalian(a, b) {
  return a * b;
}

const perkalianEs5 = function (a, b) {
  return a * b;
};

const perkalianEs6 = (a, b) => {
  return a * b;
};

const perkalianEs62 = (a, b) => a * b;

console.log(perkalian(2, 4));
console.log(perkalianEs5(2, 4));
console.log(perkalianEs6(2, 4));
console.log(perkalianEs62(2, 4));

const checkLebihBesar = (a, b) => (a > b || a == b ? a : b);

console.log(checkLebihBesar(16, 16));

let a = "Kata";

let b = a.toLocaleLowerCase() == "kata" ? "A adalah Kata" : "A Bukan Kata";

console.log(b);

let arr = ["a", "b", "c", "d"];
let arrAngka = [1,10,9,7,8]

let arrNew = arr.filter((e) => e != "c");
let arrNewMap = arr.map(e=> e != "c" ? e : null)

let hasilPenjumlahan = arrAngka.reduce((a,b)=> a+b)

arrAngka.sort((a,b)=> a - b)

console.log(arrNew);
console.log(arrNewMap);
console.log(hasilPenjumlahan)

console.log(arrAngka)
