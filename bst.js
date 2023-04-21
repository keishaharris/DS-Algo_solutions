class Node {
    constructor(value){
        this.value = value;
        this.leftTree = null;
        this.rightTree = null;
    }
}

class Tree{
    constructor(array){
        this.root = this.buildTree(array);
    }

    parseArray(array){
        let newArray = []
        array.map(item => {
            if(!newArray.includes(item)){
                newArray.push(item);
            }
        })
        return newArray.sort();
    }

    buildTree(array){
        if(!array.length) return null;
        const mid = Math.floor(array.length/2)
        const root = new Node(array[mid]);
        const leftArray = array.slice(0,mid);
        const rightArray = array.slice(mid + 1);
   
        root.leftTree = this.buildTree(leftArray)
        root.rightTree = this.buildTree(rightArray);
        return root
    }

    printTree = (node, prefix = '', isLeft = true) => {
        if (node === null) {
           return;
        }
        if (node.rightTree !== null) {
          this.printTree(node.rightTree, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
        if (node.leftTree !== null) {
          this.printTree(node.leftTree, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
      }
}

array = [3,4,1,87,3,0,2,1,43,93]
const tree = new Tree(array);
let newTree = tree.parseArray(array); // [0,1,2,3,4,43,87,93]
console.log(newTree);
let balancedTree = tree.buildTree(newTree, 0, newTree.length)
console.log(tree.printTree(balancedTree));