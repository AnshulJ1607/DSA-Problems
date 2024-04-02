class Stack
{
    constructor(){
        this.items=[];
    }
    isEmpty(){
        return this.items.length==0;
    }
    add(element){
        this.items.push(element);
        console.log(element+" Pushed into Stack ")
    }
    remove(){
        if(this.items.length>0){
        return this.items.pop();
        }  
    }
    peek(){
        return this.items[this.items.length-1];
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items=[]
    }

}

let stack = new Stack();
console.log("Stack is empty: " + stack.isEmpty());

stack.add(1);
stack.add(2);
stack.add(4);
stack.add(8);

console.log("Elements present in the Stack: " + stack.items)
console.log(stack.remove() + " Popped From Stack ");
console.log(" Top element is: "  + stack.peek());
console.log("Stack is empty: " + stack.isEmpty());
console.log("Size of the Stack " + stack.size());
console.log("Elements present in the Stack: " + stack.items)
stack.clear();
console.log("Elements present in the Stack: " + stack.items)


