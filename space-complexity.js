// space complexity
// O(1)

function getTotal(arr) {
  let total = 0;
  arr.forEach(function (e) {
    total += e;
  });
  return total;
}

// console.log(getTotal([1, 6, 5, 4, 8, 9]));

// O(n) 

function sayHi(count){
    let hi = []
    for(let i = 1; i <= count; i++){
        hi.push("Hi")
    }
    return hi
}
console.log(sayHi(6))
