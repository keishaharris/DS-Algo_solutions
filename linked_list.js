class LinkedList{
    constructor(){
        this.head = null;
    }

    //adds a new node containing value to the end of the list
    append(value){
        if(this.head == null){
            this.head = new Node(value);
        }
        else{
            let temp = this.head;
            while(temp.nextNode !== null){
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }

    // adds a new node containing value to the start of the list
    prepend(value){
        let temp = null;
        if(this.head !== null){
            temp = this.head
            this.head = new Node(value);
            this.head.nextNode = temp;
        }
    }

    // returns the total number of nodes in the list
    size(){
        let total=0;
        let temp = this.head;
        while(temp !== null){
            total++;
            temp = temp.nextNode;           
        }
        return total;
    }

    // returns the first node in the list
    getHeadValue(){
        if(this.head === null) return null;
        return this.head.value;
    }

    //  returns the last node in the list
    getTailValue(){
        let temp = this.head;
        while(temp.nextNode !== null){
            temp = temp.nextNode;
        }
        return temp.value; 
    }

    //  returns the node at the given index
    findIndexValue(index){
        let tmpIndex = 0;
        let temp = this.head;
        while(temp.nextNode !== null && tmpIndex !== index){
            temp = temp.nextNode;
            tmpIndex++;
        }
        return temp.value;
    }

    // removes the last element from the list
    popElement(){
        if(!this.head) return 'Empty List'
        let curr = this.head;
        let prev = null;
        while(curr.nextNode !== null){
            prev = curr;
            curr = curr.nextNode;
        }
        prev ? prev.nextNode = null : this.head = null;
    }

    // returns true if the passed in value is in the list and otherwise returns false
    containsValue(value){
        let temp = this.head
        while(temp !== null){
            if(temp.value == value) return true;
            temp = temp.nextNode;
        }
        return false;
    }

    // returns the index of the node containing value, or null if not found
    findIndex(value){
        let index = 0;
        let temp = this.head;
        while(temp !== null) {
            if(temp.value == value) return index;
            index++;
            temp = temp.nextNode;
        }
    }

    // prints the value of each node 
    listToString(){
        let temp = this.head;
        let toString = ``;
        while(temp !== null){
            toString += `(${temp.value}) -->`
            temp = temp.nextNode;
        }
        toString += `(null)`
        return toString
    }

    // inserts a new node with the provided value at the given index
    insertAt(value, index){
        let temp = this.head;
        let prev,followingNode = null;
        let tempIndex = 0;
        while(temp !== null && tempIndex !== index){
            prev = temp;
            temp, followingNode= temp.nextNode;
            tempIndex++
        }
        const newNode = new Node(value);
        temp.nextNode = followingNode;
        prev.nextNode = temp;   
    }

    //removes the node at the given index
    removeAt(index){
        let temp = this.head;
        let prev,followingNode = null;
        let counter = 0;
        while(index !== counter){
            prev = temp;
            temp, followingNode = temp.nextNode; 
        }
        prev.Nextnode = followingNode;
    }
}


class Node{
    constructor(value){
    this.value = value || null;
    this.nextNode = null;
    }
}

const lnkList = new LinkedList();

lnkList.append(2);
lnkList.append(3);
lnkList.append(4);
lnkList.prepend(1);

console.log('Size', lnkList.size()); //4
console.log('Get Head Value', lnkList.getHeadValue()); //1
console.log('Get Tail Value', lnkList.getTailValue()); //4
console.log('Find Index Value', lnkList.findIndexValue(2)) //3
console.log('Contains Value', lnkList.containsValue(2)); //true
console.log('Find Index of Value', lnkList.findIndex(1)); //0
console.log('Convert to String', lnkList.listToString()); // (1) --> (2) --> (3) --> (4) --> null
lnkList.popElement();
console.log('Display last Element Removed', lnkList.listToString()); // (1) --> (2) --> (3) --> null
// lnkList.insertAt(5,2); 
// console.log('Pring list', lnkList.listToString());// (1) --> (2) --> (5) --> (3) --> null
// console.log('Remove at', lnkList.removeAt(1));
// console.log('Pring list', listToString());
