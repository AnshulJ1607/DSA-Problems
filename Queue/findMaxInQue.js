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
    findMax(){
        let max =this.items[0];
        for(let i = 1; i<this.items.length;i++){
            if(this.items[i]>max){
                max=this.items[i]
            }
        }
        return max;
    }

}

const big = new Queue();

big.enqueue(8);
big.enqueue(8);
big.enqueue(6);
big.enqueue(72);
big.enqueue(9);
console.log(big.items);

console.log(big.findMax());