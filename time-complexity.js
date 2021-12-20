// O(1)

function getFirst(arr) {
  let newArr = arr.slice(0, 3);
  return newArr;
}

function sayHello() {
  console.log("Hello World");
}

// console.log(getFirst([1,2,3,4,5,6,7,8,9,10,11]))
// sayHello()

// O(log n) misal n = 10, maka code dijalankan sebanyak (log 10)

function binarySearch(arr, value) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    console.log("jalan binary");
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] == value) {
      return middle;
    } else if (arr[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}

function elementSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    console.log("jalan element");
    if (arr[i] == value) return i;
  }
}

// console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
// console.log(elementSearch([0, 1, 2, 3, 4, 5, 6, 5, 8, 9, 10, 12, 7], 7));

// O(n) n = 13, maka code dijalankan sebanyak 13x

function printAll(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// printAll([0, 1, 2, 3, 4, 5, 6, 5, 8, 9, 10, 12, 7])

function getMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log("jalan ke ", i);
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// console.log(getMax([0, 1, 2, 3, 4, 5, 100, 5, 8, 9, 10, 12, 7]))

function bubbleSort(array) {
  for (let i = array.length; i >= 0; i--) {
    for (let j = 1; j < i; j++) {
      console.log("jalan");
      if (array[j - 1] > array[j]) {
        let temporary = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temporary;
      }
    }
  }
  return array;
}

// console.log(bubbleSort([0, 1, 2, 3, 4, 5, 100, 5, 8, 9, 10, 12, 7]));

function printStar(count) {
  let output = "";
  for (let i = 1; i <= count; i++) {
    for (let j = count; j > 0; j--) {
      output += "*".repeat(i) + "=".repeat(j) + "\n";
    }
  }
  return output;
}

console.log(printStar(2))