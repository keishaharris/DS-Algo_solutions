class LinkedList{
    constructor(){
        this.head = null;
    }

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

    prepend(value){
        let temp = null;
        if(this.head !== null){
            temp = this.head
            this.head = new Node(value);
            this.head.nextNode = temp;
        }
    }

    size(){
        let total=0;
        let temp = this.head;
        while(temp !== null){
            total++;
            temp = temp.nextNode;           
        }
        return total;
    }

    getHeadValue(){
        if(this.head === null) return null;
        return this.head.value;
    }

    getTailValue(){
        let temp = this.head;
        while(temp.nextNode !== null){
            temp = temp.nextNode;
        }
        return temp.value; 
    }

    findIndexValue(index){
        let tmpIndex = 0;
        let temp = this.head;
        while(temp.nextNode !== null && tmpIndex !== index){
            temp = temp.nextNode;
            tmpIndex++;
        }
        return temp.value;
    }

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

    containsValue(value){
        let temp = this.head
        while(temp !== null){
            if(temp.value == value) return true;
            temp = temp.nextNode;
        }
        return false;
    }

    findIndex(value){
        let index = 0;
        let temp = this.head;
        while(temp !== null) {
            if(temp.value == value) return index;
            index++;
            temp = temp.nextNode;
        }
    }

    listToString(){
        let temp = this.head;
        while(temp.nextNode !== null){
            console.log(`(${temp.value}) -->`)
            temp = temp.nextNode;
        }
        console.log(`${temp.nextNode}`);
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
console.log('Conver to String', lnkList.listToString())// (1) --> (2) --> (3) --> (4) --> null