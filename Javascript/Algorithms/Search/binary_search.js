let arr = [1,5,4,3,6,9,10,54,65,34,23,76,87,45,32];

function binarySearch(arr,value){

  let sorted = arr.sort((a,b) => a-b);
  
  let low = 0;
  let high = sorted.length-1;
  
  while(low <= high){
  
    let mid = Math.floor((low+high)/2);
    
    if(sorted[mid] === value){
    
      return sorted[mid];
      
    }else if(sorted[mid] < value){
    
      low = mid + 1;
      
    }else{
    
      high = mid - 1;
      
    }
  }
  return -1;
}

//For test:
console.log(binarySearch(arr,34));
