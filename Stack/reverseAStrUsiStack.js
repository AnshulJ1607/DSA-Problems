class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    peek() {
      return !this.isEmpty() ? this.items[this.items.length - 1] : null;
    }
  
    printStack() {
      let str = "";
      for (let i = 0; i < this.items.length; i++) {
        str += this.items[i] + " ";
      }
      return str;
    }
  }
  
  function reverseString(str) {
    const stack = new Stack();
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }
    let reversedString = "";
    while (!stack.isEmpty()) {
      reversedString += stack.pop();
    }
    return reversedString;
  }
  
  // Example usage:
  const str = "hello";
  console.log("Original String:", str);
  console.log("Reversed String:", reverseString(str));
  