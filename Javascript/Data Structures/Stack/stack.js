function Stack() { 
    var collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.push = function(val){
        return collection.push(val);
    }
    this.pop = function(){
        return collection.pop();
    }
    this.peek = function(){
        return collection[collection.length-1];
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }
    this.clear = function(){
        collection.length = 0;
    }
}



const ES6 = "ES6";

class Stack {
    constructor() {
        this.collection = [];
    }
    print(){
        console.log(this.collection);
    }
    push(val){
        return this.collection.push(val);
    }
    pop(){
        return this.collection.pop();
    }
    peek(){
        return this.collection[this.collection.length-1];
    }
    isEmpty(){
        return this.collection.length === 0;
    }
    clear(){
        return this.collection.length = 0;
    }
}
