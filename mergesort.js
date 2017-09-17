function split(wholeArray) {
  var mid = Math.floor((wholeArray.length)/2);
  var firstHalf = wholeArray.slice(0,mid)
  var secondHalf = wholeArray.slice(mid)
       return [firstHalf, secondHalf];
      }
 function merge(arr1, arr2){
  let mergedArray = [];
  while(arr1.length || arr2.length){
      if(arr1[0] <= arr2[0]){
          mergedArray.push(arr1[0])
          arr1.shift();
      } else{
       mergedArray.push(arr2[0])  
       arr2.shift();
      }
  }
     return mergedArray
 }
 function mergeSort(array) {
     
  
  }