class Queue
{
    constructor(){
        this.items= [];
    }
    isEmpty(){
        return this.items.length ==0;
    }
    enqueue(element){
        this.items.push(element);
        console.log(element + ' ' + "enqueued to queue")
    }
    dequeue(){
        // if(this.isEmpty){
        //     return "Underflow";
        // }
        return this.items.shift();
    }
    front(){
        // if(this.isEmpty){
        //     return "No Elements In Queue";
        // }
        return this.items[0];
    }
    rear(){
        // if(this.isEmpty){
        //     return "No Elements In Queue";
        // }
        return this.items[this.items.length-1];
    }
}

let bank = new Queue();

console.log("Queue is Empty :"  + bank.isEmpty());

bank.enqueue(10);
bank.enqueue(20);
bank.enqueue(30);
bank.enqueue(40);
console.log("Queue is Empty :"  + bank.isEmpty());

console.log(bank.items);
console.log(bank.dequeue() + "dequeued from bank");

console.log("Front item is : "  + bank.front());
console.log("Rear item is : "  + bank.rear());