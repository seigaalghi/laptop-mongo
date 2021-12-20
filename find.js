const numbers = [4, 9, 19, 25, 29];
let first = numbers.find((e) => e == 20);

let index = numbers.indexOf(20);

// console.log(index)

console.log(numbers);
numbers.push(5); // menambahkan nilai ke index terakhir array
numbers.unshift(20); // menambahkan nilai ke index pertama array
numbers.pop(); // menghancurkan nilai index terakhir array
numbers.shift(); // menghancurkan nilai index pertama array
numbers.splice(2, 2, 20, 21);
console.log(numbers);

const newNumbers = numbers.slice(0, 3)
console.log(newNumbers)