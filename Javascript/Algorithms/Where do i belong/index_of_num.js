function getIndexToIns(arr, num){
  arr.sort((a,b) => {a - b});
  let i = 0;
  while(num > arr[i]){
    i++;
  }
  return i;
}

//Or:

function getIndexToIns(arr, num){
  arr.push(num);
  arr.sort((a,b) => {return a - b;})
  return arr.indexOf(num);
}


//Or:
function getIndexToIns(arr, num){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] >= num){
      return i;
    }
  }
  return arr.length;
}


getIndexToIns([40, 60, 70, 80], 50);
