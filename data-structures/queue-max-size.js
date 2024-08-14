// FIFO (First In, First Out)
class Queue {
    constructor(n) {
        this.queue = new Array(n).fill(null);
        this.head = 0;
        this.tail = 0;
        this.maxN = n;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.maxN;
    }

    push(x) {
        if (this.isFull()) {
            throw new Error('Queue is full');
        }
        this.queue[this.tail] = x;
        this.tail = (this.tail + 1) % this.maxN;
        this.size += 1;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        const x = this.queue[this.head];
        this.queue[this.head] = null;
        this.head = (this.head + 1) % this.maxN;
        this.size -= 1;
        return x;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        return this.queue[this.head];
    }

    getSize() {
        return this.size;
    }

    clear() {
        this.queue = new Array(this.maxN).fill(null);
        this.head = 0;
        this.tail = 0;
        this.size = 0;
    }

    print() {
        return this.queue
    }
}

// const queue = new Queue(5);
// queue.push(1);
// queue.push(2);
// queue.push(3);
// console.log(queue.peek());

// console.log(queue.pop());
// console.log(queue.peek());
// console.log(queue.print());
// queue.push(4);
// queue.push(5);
// queue.push(6);
// console.log(queue.print());

// queue.push(7);
// console.log(queue.pop());
// console.log(queue.pop());

// queue.clear();
// console.log(queue.isEmpty());