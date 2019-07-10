function filteredArray(arr,elem){
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) === -1){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
(filteredArray([[10, 8, 3], [1, 6, 23], [3, 18, 6]], 18));
