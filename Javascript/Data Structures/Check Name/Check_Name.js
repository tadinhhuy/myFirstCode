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
