'use strict';

function bubbleSort(array) {
  let sorted = false;
  for (let end = array.length; end > 0 && !sorted; end--) {
    sorted = true;
    for (let j = 0; j < end; j++){
      if(!inOrder(array, j)) {
        swap(array, j);
        sorted = false;
      }
    }
  }
  return array;
} 

function inOrder(arr, index) {
  if (index === arr.length - 1) return true;
  return (arr[index] < arr[index + 1]);
}

function swap(arr, index) {
  [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
}
