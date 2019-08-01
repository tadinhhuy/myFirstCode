let arr = [1,5,4,3,6,9,10,54,65,34,23,76,87,45,32];

function linearSearch(arr,value){
  for(let i of arr){
    if(arr[i] === value){
      return arr[i];
    }else{
      return -1;
    }
  }
}

//For test:
console.log(linearSearch(arr,9));
