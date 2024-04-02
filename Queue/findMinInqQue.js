class Queue
{
    constructor(){
        this.items = [];
    }
    isEmpty(){
        return this.items.length==0;
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift();
    }
    findMin(){
        let min =this.items[0];
        for(let i = 1; i<this.items.length;i++){
            if(this.items[i]<min){
                min=this.items[i]
            }
        }
        return min;
    }

}

let find = new Queue();

 console.log(find.isEmpty());
 find.enqueue(4);
 find.enqueue(8);
 find.enqueue(5);
 find.enqueue(50);

 console.log(find.findMin());