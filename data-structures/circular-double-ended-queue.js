
class CircularDeque {
    constructor(n) {
        this.queue = new Array(n).fill(null)
        this.maxN = n
        this.size = 0
        this.frontTail = 0
        this.backTail = this.maxN - 1
    }

    isEmpty() {
        return this.size == 0
    }

    isFull() {
        return this.size === this.maxN
    }

    increaseIterator(previousIteratorValue) {
        return previousIteratorValue % this.maxN
    }

    pushFront(x) {
        if (this.isFull()) {
            throw new Error("Queue is full")
        } else {
            this.queue[this.frontTail] = x
            this.frontTail = this.increaseIterator(this.frontTail + 1)
            this.size += 1
        }
    }

    pushBack(x) {
        if (this.isFull()) {
            throw new Error("Queue is full")
        } else {
            this.queue[this.backTail] = x
            this.backTail = this.increaseIterator(this.backTail - 1 + this.maxN)
            this.size += 1
        }
    }

    popFront() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty")
        }
        this.frontTail = this.increaseIterator(this.frontTail - 1 + this.maxN)
        const x = this.queue[this.frontTail]
        this.queue[this.frontTail] = null
        this.size -= 1
        return x
    }

    popBack() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty")
        }
        this.backTail = this.increaseIterator(this.backTail + 1)
        const x = this.queue[this.backTail]
        this.queue[this.backTail] = null
        this.size -= 1
        return x
    }
}