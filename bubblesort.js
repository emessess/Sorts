function bubbleSort(array){
  var swaps = 0;
  do {
   swaps = 0;
   for(var i = 0; i < array.length; i++){
       if(array[i] > array[i+1]){
           var temp = array[i];
           array[i] = array[i+1]; 
           array[i+1] = temp;
      //   swap(array[i], array[i+1]);
        swaps++;
          }
       }
   } while(swaps > 0);
  return array;
  }
  // function swap(num1, num2){
  //     // let temp = num1;
  //     // num1 = num2;
  //     // num2 = temp;
  // }