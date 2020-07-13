//Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

//For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

//The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

//Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".



function mutation(arr) {
  let target = arr[0].toLowerCase();
  let strToTest = arr[1].toLowerCase();
  for (var i = 0; i < strToTest.length; i++) {
    if (target.indexOf(strToTest[i]) === -1) return false;
  }
  return true;
}



function mutation(arr) {

  return arr[1].toLowerCase().split("").every(letter => {
    return arr[0].toLowerCase().indexOf(letter) !== -1;
  });

}


mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // return true
