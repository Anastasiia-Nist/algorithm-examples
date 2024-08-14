// LIFO ( Last In, First Out)

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }
}


// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.size());
// stack.clear();
// console.log(stack.isEmpty());