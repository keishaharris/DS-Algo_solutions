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

console.log(lnkList.size()); //4