function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){ 
    this.element = element; 
    this.next = null; 
  }; 

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };
  
  //add a element at the end of list
  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        //initialize currentNode is a pointer
        var currentNode = head;
        // iterate to the end of the list
        while(currentNode.next){
            currentNode  = currentNode.next;
        }
        //add node
        currentNode.next = node;
    }

    length++;
  }; 

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      //remove the first node
      head = currentNode.next;
    }else{
      //iterate through each element
      while(currentNode.element !== element){
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };
  
  this.isEmpty = function(){
    return length === 0;
  }
  
  //method return the index of the given element
  this.indexOf = function(element){
    var currentNode = head;
    var index = -1;
    //iterate through each node
    while(currentNode){
      index++;
      if(currentNode.element === element){
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }
  
  //method return at element at a given index
  this.elementAt = function(index){
    var currentNode = head;
    var count = 0;
    while(count < index){
      count++;
      currentNode = currentNode.next;
    } 
    return currentNode.element;
  }
  
  //Remove Elements from a Linked List by Index
  this.removeAt = function(index){
    var currentNode = head;
    var previousNode;
    var count = 0;
    //return null if the given index is less than 0 and index greater than length
    if(index < 0 || index >= length ){
      return null;
    }
    //index = 0, the pointer is going to start at second node
    if(index === 0){
      head = currentNode.next;
    }else{
      while(count < index){
      count++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    previousNode.next = currentNode.next;
    }
    length--;
    //return the element of the removed node.
    return currentNode.element;
  }
  
}

//For test:
let list = new LinkedList();
list.add("A");
list.add("B");
list.add("C");
list.add("D");
list.indexOf('B');
list.elementAt(2);
list.head();
