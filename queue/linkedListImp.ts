class QueueNode {
    data: number;
    next: QueueNode | null;

    constructor(value: number) {
        this.data = value;
        this.next = null;
    }
}

class Queue {
    head: QueueNode | null;
    tail: QueueNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value: number): void {
        const newNode: QueueNode = new QueueNode(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            if (this.tail) {
                this.tail.next = newNode;
                this.tail = newNode;
            }
        }
    }

    dequeue(): void {
        if (!this.head) {
            console.log("Underflow");
            return;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return;
        }
        if (this.head) {
            this.head = this.head.next;
        }
    }

    front(): number | null {
        if (this.head) {
            return this.head.data;
        } else {
            return null;
        }
    }

    isEmpty(): boolean {
        return this.head === null;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.front()); // Output: 1
queue.dequeue();
console.log(queue.front()); // Output: 2
