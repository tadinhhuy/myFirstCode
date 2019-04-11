# myFirstCode
My first code on GitHub


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




let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};


function checkName(obj){
  if(("Alan","Jeff","Sarah","Ryan") in users){
    return true;
  }
  return false;
}
(checkName(users));


function countOnline(obj){
  let count = 0;
  for(let i in obj){
    if(obj[i].online === false){
      count++;
    }
  }
  return count;
}
(countOnline(users));



let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriends(userObj,friend){
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
(addFriends(user,"Peter"));



function findLongestWordLength1(str){
  let words = str.split(' ');
  let maxLength = 0;
  for(let i = 0; i < words.length; i++){
    if(maxLength < words[i].length){
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
function findLongestWordLength2(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}

(findLongestWordLength("The quick brown fox jumped over the lazy dog"));





function largestOfFour(arr) {
  let result = [];
  
  for(let i = 0; i < arr.length; i++){
    let greatestNum = arr[i][0];
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j] > greatestNum){
        greatestNum = arr[i][j];
      }
    }
    result[i] = greatestNum;
  }
  return result;
}
(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));




function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;
  for(let i = 0; i < words.length; i++){
    if(maxLength < words[i].length){
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
(findLongestWordLength("The quick brown fox jumped over the lazy dog"));




function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

(confirmEnding("Bastian", "n"));




function repeatStringNumTimes(str, num){
  let newArr = [];
  if( num < 0 ){return ""};
  while( num > 0){
    newArr += str;
    num--;
  }
  return newArr;
}
(repeatStringNumTimes("abc",3));




function truncateString(str, num){
  if(str.length > num && num > 0 || num < 0){
    return str.slice(0,num) + "...";
  }else{
    return str;
  }
}
(truncateString("Absolutely Longer", 4));




function findElement(arr){
  let num = 0;
  for(let i = 0; i < arr.length; i++){
    num = arr[i];
    if(num = arr[i] % 2 === 0){
      return num;
    }
  }
  return undefined;
}
(findElement([1, 3, 6, 9]));




function frankenSplice(arr1,arr2,n){
  let newArr = arr2.slice();
  for(let i = 0; i < arr1.length; i++){
    newArr.splice(n,0,arr1[i]);
    n++;
  }
  return newArr;
}
(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));



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

//Where do i belong
function getIndexToIns(arr,num){
  arr.sort(function(a,b){return a - b;});
//#1:
  let i = 0;
  while(num > arr[i]){i++;}
  return i;
  
// #2:
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] >= num){
//       return i;
//     }
//   }
//   return arr.length;
  
//#3:
//   arr.push(num);
//   arr.sort(function(a,b){return a-b;});
//   return arr.indexOf(num);
}
getIndexToIns([40, 60], 50);

//Bubble Sort: 
function bubbleSort(arr){
  for(let i = 0; i < arr.length;i++){
    for(let j = 0; j < arr.length-1;j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
