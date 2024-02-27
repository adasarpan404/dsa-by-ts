class node {
    data: number;
    next: node | null;

    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList {
    head: node | null;

    constructor() {
        this.head = null;
    }

    append(data: number): void {
        const newNode = new node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    display(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
