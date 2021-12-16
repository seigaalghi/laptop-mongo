function merge(left, right) {
  let result = [];
  let leftLen = left.length;
  let rightLen = right.length;
  let l = 0;
  let r = 0;

  while (l < leftLen && r < rightLen) {
    if (left[l] < right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

// [4] [3]
// result = [3, 4]
// return result.concat(left.slice(0)).concat(right.slice(1))

function mergeSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
// console.log(mergeSort([5,4,3,2,8,10]));

// [5,4,3,2,8,10]
// 6 : [5,4,3]   [2,8,10]

// mergeSort([5, 4, 3]) = merge(mergeSort([5]), mergeSort([4,3]))
// mergeSort([2, 8, 10]) = merge(mergeSort([2]), mergeSort([8,10]))

// kiri = merge(mergeSort([5]), mergeSort([4,3]))
// mergeSort([5]) = [5] // merge([5], mergeSort([4,3]))
// mergeSort([4,3]) = merge(mergeSort([4]), mergeSort([3])) // merge([5], merge(mergeSort([4]), mergeSort([3])))
// merge(mergeSort([4]), mergeSort([3])) == merge([4], [3]) = [3, 4] // merge([5], merge([4], [3]))
// merge([5], [3, 4])
// [3, 4, 5]

merge(mergeSort([5, 4, 3]), mergeSort([2, 8, 10])); // recursion pertama
merge(merge(mergeSort([5]), mergeSort([4, 3])), merge(mergeSort([2]), mergeSort([8, 10]))); // recursion kedua
merge(merge([5], merge([4], [3])), merge([2], merge([8], [10]))); // recursion ketiga
merge(merge([5], [3, 4]), merge([2], [8, 10])); // recursion keempat
merge([3, 4, 5], [2, 8, 10]); // recursion kelima
// 2,3,4,5,8,10 // hasil akhir


[5,4,3,2,8,10]

[5,4,3] [2,8,10]

[5] [4,3]    [2] [8,10]

[5] [4] [3]     [2] [8] [10]

result= [3,4,5]
l = 0
r = 2
left[l] < right[r]
[5] [3,4]  [2] [8, 10]

[3,4,5] [2] [8, 10]

result= [2, 8, 10]
l = 1
r = 0
[2] [8, 10]
left[l] < right[r]

result = [2,3,4,5,8, 10]
[3,4,5] [2, 8, 10]
l = 3
r = 1
left[l] < right[r]

result = [2,3,4,5,8,10]


[3,4,5 ].slice(l)
result.concat([]).concat([8, 10]);

result = [2,3,4,5] + [8, 10]
result = [2,3,4,5,8,10]