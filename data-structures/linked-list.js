class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    insertAt(index, value) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        while (count < index && current !== null) {
            previous = current;
            current = current.next;
            count++;
        }
        if (count === index) {
            const newNode = new Node(value);
            previous.next = newNode;
            newNode.next = current;
        } else {
            throw new Error('Index out of bounds');
        }
    }

    remove(value) {
        if (this.head === null) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    get(index) {
        let current = this.head;
        let count = 0;
        while (current !== null && count < index) {
            current = current.next;
            count++;
        }
        return current ? current.value : null;
    }

    print() {
        const values = [];
        let current = this.head;
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}


// const list = new LinkedList();
// list.append(1);
// list.append(2);
// list.append(3);
// list.insertAt(1, 4);
// console.log(list.print());
// list.remove(4);
// console.log(list.print());
// console.log(list.get(1));
