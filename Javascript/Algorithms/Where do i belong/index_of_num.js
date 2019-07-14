function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}

//Or:

function getIndexToIns(arr, num){
  arr.push(num);
  arr.sort((a,b) => {return a - b;})
  return arr.indexOf(num);
}




getIndexToIns([40, 60, 70, 80], 50);
