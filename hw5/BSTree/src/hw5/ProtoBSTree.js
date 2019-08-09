function ProtoBSTree() {
 
}
ProtoBSTree.prototype.init = function (){}; //+
ProtoBSTree.prototype.getArray = function (){}; //+
ProtoBSTree.prototype.toString = function (){}; //+
ProtoBSTree.prototype.getSize = function (){}; //+
ProtoBSTree.prototype.push = function (){}; //+
ProtoBSTree.prototype.remove = function (){};//
ProtoBSTree.prototype.setBalance = function (){};//

// ------------------------------------------------------------------//

const Node = function (value) {
   this.value = value;
   this.right = null;
   this.left = null;
   
};

function BST(){
   this.root = null;
   this.size = 0;
   

   ProtoBSTree.apply(this.arguments);
}
BST.prototype = Object.create(ProtoBSTree.prototype)
BST.prototype.constructor = BST;


BST.prototype.getArray =  function () {
    if(this.root) {
        return printArray(this.root);
    } else {
        return [];
    }
  
    function printArray(tempNode) {
          let binaryList = [];

        if (tempNode) {
            binaryList = binaryList.concat(printArray(tempNode.left));
            binaryList.push(tempNode.value);
            binaryList = binaryList.concat(printArray(tempNode.right));
        }

        return binaryList;
    }
   
};

BST.prototype.init = function (array) {
   if (!array) {
       return this.size;
   }

   for (let i = 0; i < array.length; i++) {
       this.push(array[i]);
      
   }
    return array;
  };

BST.prototype.getSize = function()  {
   return this.getArray().length;
};

BST.prototype.toString = function () {
  let string = '[';
    let array = this.getArray();

    for (let i = 0; i < this.getSize(); i++) {
        string += array[i];
        if (i !== this.getSize() - 1) {
            string += ', ';
        }
    }

    string += ']';
    return string;
  
};

BST.prototype.push = function (value) {
   let root = this.root;

   if(!root){
      this.root = new Node(value);
      return;
      
   }

   let currentNode = root;
   let newNode = new Node(value); 
   

   while(currentNode){
      if(value < currentNode.value){
        
          if(!currentNode.left){
             currentNode.left = newNode;
             
             break;
          }
          else{
             currentNode = currentNode.left;
             
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            
            break;
         }
         else{
            currentNode = currentNode.right;
           
         }
     }
     
  }
 this.size++;
 return this.getSize();
};

BST.prototype.remove = function (value) {
let size = 0;
    this.root = removeNode(this.root, value);
    this.size -= size;

    return this.getSize();

    function removeNode(tempNode, value) {
        if (!tempNode) {
            return null;
        }

        if (tempNode.value === value) {
            if (!tempNode.right) {
                size++;
                return tempNode.left;
            }

            if (!tempNode.left) {
                size++;
                return tempNode.right;
            }

            let newNode = tempNode;
            tempNode = getLeaf(newNode.right);
            tempNode.right = delLeaf(newNode.right);
            tempNode.left = newNode.left;
            size++;
        } else if (tempNode.value > value) {
            tempNode.left = removeNode(tempNode.left, value);
        } else {
            tempNode.right = removeNode(tempNode.right, value);
        }

        return tempNode; 
     
    }

    function getLeaf(tempNode) {
        return (!tempNode.left) ? tempNode : getLeaf(tempNode.left);
    }

    function delLeaf(tempNode) {
        if (!tempNode.left) {
            return tempNode.right;
        }

        tempNode.left = delLeaf(tempNode.left);

        return tempNode;
        
    }
};


    BST.prototype.setBalance = function () {
        let binaryArray = this.getArray();

    return this._root = createBalancedTree(binaryArray, 0, binaryArray.length - 1);

    function createBalancedTree(binArray, begin, end) {
        if (end < begin) {
            return null;
        }

        const middle = parseInt((begin + end) / 2);
        const tempNode = new Node(binArray[middle]);
        tempNode.left = createBalancedTree(binArray, begin, middle - 1);
        tempNode.right = createBalancedTree(binArray, middle + 1, end);

        return tempNode;
    }

};




// const bst = new BST()

// bst.init([11,3,4,56,1,2,3,4,66])

// // console.log(bst)

// // bst.push(999)
// // bst.push(1000)
// // bst.push(66)
// // // console.log(bst)

// // console.log(bst.getSize())

// console.log(bst.toString())


// // console.log(bst.setBalance())

// // console.log(bst.remove(999))


// // console.log(bst.getArray())
// // console.log(bst.get(0))