class QueueNode<T> {
    data: T;
    next: QueueNode<T> | null;

    constructor(value: T) {
        this.data = value;
        this.next = null;
    }
}

export class Queue<T> {
    head: QueueNode<T> | null;
    tail: QueueNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value: T): void {
        const newNode: QueueNode<T> = new QueueNode<T>(value);
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

    front(): T | null {
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

