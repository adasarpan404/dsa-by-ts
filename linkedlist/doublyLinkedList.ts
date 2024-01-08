class doublyNode {
    data: number;
    next: doublyNode | null;
    prev: doublyNode | null;
    constructor(data: number) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head: doublyNode | null;
    tail: doublyNode | null;
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data: number): void {
        const newNode = new doublyNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.prev = this.tail;
        this.tail!.next = newNode;
        this.tail = newNode;
    }
    display(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next!;
        }
    }
    displayReverse(): void {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);

console.log("Forward:");
doublyLinkedList.display();

console.log("\nReverse:");
doublyLinkedList.displayReverse();