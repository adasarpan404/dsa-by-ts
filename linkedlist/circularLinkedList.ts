class circularNode {
    data: number;
    next: circularNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    head: circularNode | null;
    constructor() {
        this.head = null;
    }

    append(data: number): void {
        const newNode = new circularNode(data);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }
        let current = this.head;
        while (current.next != this.head) {
            current = current.next!;
        }
        current.next = newNode;
        newNode.next = this.head;
    }

    display(): void {
        if (!this.head) {
            return;
        }
        let current = this.head;
        do {
            console.log(current.data)
            current = current.next!;
        } while (current != this.head)
    }
}

const circularLinkedList = new CircularLinkedList();
circularLinkedList.append(1);
circularLinkedList.append(2);
circularLinkedList.append(3);

circularLinkedList.display();