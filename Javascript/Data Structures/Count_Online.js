let users = {
  Kobe: {
    age: 27,
    online: false
  },
  Jack: {
    age: 32,
    online: true
  },
  John: {
    age: 48,
    online: false
  },
  Nick: {
    age: 19,
    online: true
  }
};

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
