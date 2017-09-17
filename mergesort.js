function split(wholeArray) {
  let mid = wholeArray.length / 2;
  let left = wholeArray.slice(0, mid)
  let right = wholeArray.slice(mid)

  return [left, right];
}

function merge(left, right) {
  let mergedArray = [],
      leftIdx = 0;
      rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      mergedArray.push(left[leftIdx]);
      leftIdx++;
    } else {
      mergedArray.push(right[rightIdx]);
      rightIdx++;
    }
  }

  for (; leftIdx < left.length; leftIdx++) mergedArray.push(left[leftIdx]);
  for (; rightIdx < right.length; rightIdx++) mergedArray.push(right[rightIdx]);

  return mergedArray;
 }

 function mergeSort(array) {
     if (array.length < 2) return array;

     let splitted = split(array);
     let left = splitted[0];
     let right = splitted[1];

     return merge(mergeSort(left), mergeSort(right));
  }