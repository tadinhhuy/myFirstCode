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
}
