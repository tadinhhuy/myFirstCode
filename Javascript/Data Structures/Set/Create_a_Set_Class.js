function Set() {
    // the var collection will hold our set
    var collection = [];
    
    // this method will check for the presence of an element and return true or false.
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    
    //this method will add an element into collection
    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    } 
    
    // this method will remove an element inside collection
    this.remove = function(element){
        let index = collection.indexOf(element);
        if(this.has(element)){
            collection.splice(index,1);
            return true;
        }
        return false;
    }
    
    // this method will return the size of the set
    this.size = function(){
        return collection.length;
    }
    
    // this method will return the union of two sets
    this.union = function(otherSet){
        let unionSet = new Set();
        let firstSet = this.values();
        let secondSet = otherSet.values();

        firstSet.forEach(function(ele){
            unionSet.add(ele);
        });

        secondSet.forEach(function(ele){
            unionSet.add(ele);
        });
        return unionSet;
    }
    
    // this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet){
        let intersectionSet = new Set();
        let firstSet = this.values();
        firstSet.forEach(function(element){
            if(otherSet.has(element)){
                intersectionSet.add(element);
            }
        });
        return intersectionSet;
    }
    
    //this method will test if the set is a subset of a different set (return true of false)
    this.subset = function(otherSet){
        let firstSet = this.values();
        return firstSet.every(function(element){
            return otherSet.has(element);
        })
    }
    
}


// for test:
let setA = new Set();
let setB = new Set();
setA.add("a");
setA.add("b");
setA.add("c");
setB.add("c");
setB.add("d");
let intersectionSetAB = setA.intersection(setB);
intersectionSetAB.values();
