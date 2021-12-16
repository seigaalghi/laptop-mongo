function bubbleSort(array) {
  for (let i = array.length; i >= 0; i--) {
    for (let j = 1; j < i; j++) {
      if (array[j - 1] > array[j]) {
        let temporary = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temporary;
      }
    }
  }
  return array;
}
console.log(bubbleSort([5,4,3,2,8,10]))
console.log(bubbleSort([7,8,5,3,1,4]))

// nilai awal = [5,4,3,2,8,10]
// i = 6, j = 0, dan selama j < i
// array[j] < array[j-1] || array[1] < array[0]? 4 < 5?? 
// array ke 0 disimpan ke variable temporary || temporary = 5
// array ke 0 diisikan dengan nilai array ke 1 || [4,4,3,2,8,10]
// array ke 1 diisi dengan nilai array ke 0 (temporary) || [4,3,5,2,8,10]

// nilai awal = [4,3,2,5,8,10]
// i = 5, j = 1, dan selama j < i
// [3,2,4,5,8,10]

// nilai awal = [3,2,4,5,8,10]
// i = 4,j = 1, selama J< I kita akan looping lagi
// [2,3,4,5,8,10]

// [7,8,5,3,1,4] // ke 0
// [7,5,3,1,4,8] // ke 1
// [5,3,1,4,7,8] // ke 2
// [3,1,4,5,7,8] // ke 3
// [1,3,4,5,7,8] // ke 4
// [1,3,4,5,7,8] // ke 5