function frankenSplice(arr1,arr2,n){
  let newArr = arr2.slice(); 
  
  //copy arr2 cho newArr
  
  for(let i = 0; i < arr1.length; i++){
    newArr.splice(n,0,arr1[i]);
    
    //cắt từ n đến 0 và replace = arr1[i]
    
    n++;
  }
  return newArr;
}
(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
