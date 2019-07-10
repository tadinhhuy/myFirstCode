function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var temp = 0;
  for(var i = min; i <= max; i++){
    temp += i;
  }
  return temp;
}
sumAll([1, 4]);


//Seek and Destroy
function destroyer(arr) {
  // Remove all the values
  let args = Array.prototype.slice.call(arguments);
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < args.length; j++){
      if(arr[i] === args[j]){
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

