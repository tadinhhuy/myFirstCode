function insertionSort(arr){
  for(let i = 0; i < arr.length; i++){
    let temp = arr[i];
    for(var j = i - 1;temp < arr[j]; j--){
      arr[j+1] = arr[j];
    }
    arr[j+1] = temp;
  }
  return arr;
}

