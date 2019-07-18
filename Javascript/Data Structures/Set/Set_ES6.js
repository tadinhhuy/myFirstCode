function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  
  set.add('Taco', 'Cat', 'Awesome');
  
  console.log(set);
  return set;
}

checkSet();

function checkSet(){
   var set = [1, 2, 3, 4, 5]; //Create a set with values 1, 2, 3, 4, & 5
   //Remove the value 2
   //Remove the value 5
   //Return the set
   set.delete(2);
   set.delete(5);
   return set;
}

function checkSet(arrToBeSet, checkValue){

    var set = new Set(arrToBeSet);
    var hastwo = set.has(checkValue);

}

checkSet([ 1, 2, 3], 2);


