/**
 * Created by allenbklj on 12/3/15.
 */
function Node(value,left,right){
    this.value = value;
    this.left = left;
    this.right = right;
}

function BST(){
    this.root = null;
    this.insert = insert;
    this.min = min;
    this.max = max;
    this.count = 0;
    this.remove = remove;
    this.search = search;
}


function insert(value){
    this.count++;
    var node = new Node(value,null,null);
    if(this.root){
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(current.value > value){
                current = current.left;
                if(!current){
                    parent.left = node;
                    break;
                }
            }else {
                current = current.right;
                if(!current){
                    parent.right = node;
                    break;
                }
            }
        }
    }else{
        this.root = node;
    }
}

function min(node){
    if(node){
        var current = node,parent;
        while(true){
            parent = current;
            current = current.left;
            if(!current){
                return parent;
            }
        }
    }else{
        return;
    }
}

function max(){
    if(this.root){
        var current = this.root,parent;
        while(true){
            parent = current;
            current = current.right;
            if(!current){
                return parent;
            }
        }
    }else{
        return;
    }
}

function search(value){
    if(this.root){
        var current = this.root;
        while(true){
            if(current.value === value){
                return current;
            }else if (current.value > value){
                current = current.left;
                if(!current) break;
            }else if (current.value < value){
                current = current.right;
                if(!current) break;
            }
        }
    }else{
        return;
    }
}
function remove(value){
    this.count--;
    this.root = removeNode(this.root,value);
}

function removeNode(node,value){
    if(node){
        if(node.value === value){
            if(!node.left && !node.right){
                return null;
            }
            if(node.left == null){
                return node.right;
            }
            if(node.right == null){
                return node.left;
            }
            //node has two children
            var tempNode = this.min(node.right);
            node.value = tempNode.value;
            node.right = removeNode(node.right,tempNode.data);
            console.log(node);
            return node;
        }else if(value < node.value){
            node.left = removeNode(node.left,value);
            return node;
        }else{
            node.right = removeNode(node.right,value);
            return node;
        }
    }
}
var tree = new BST();
tree.insert(3);
tree.insert(13);
tree.insert(23);
tree.insert(4);
tree.insert(10);

console.log(tree.max());
console.log(tree.min());
console.log(tree.root);
console.log(tree.search(13));
console.log(tree.count);
tree.remove(13);
console.log(tree.count);
console.log(tree.root);