function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  
  set.add('Taco', 'Cat', 'Awesome');
  
  console.log(set);
  return set;
}

checkSet();
