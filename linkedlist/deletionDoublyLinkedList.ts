class deletionDoublyNode {
    data: number;
    next: deletionDoublyNode | null;
    prev: deletionDoublyNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DeletionDoublyLinkedList {
    head: deletionDoublyNode | null;
    tail: deletionDoublyNode | null;
    constructor() {
        this.head = null
        this.tail = null
    }

    append(data: number): void {
        const newNode = new deletionDoublyNode(data);
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

    deleteAtHead(): void {
        if (this.head === null) {
            return;
        }
        this.head = this.head.next;
        if (this.head !== null) {
            this.head.prev = null;
        }
    }

    deleteAtTail(): void {
        if (this.head === null) {
            return;
        }
        if (this.head.next === null) {
            this.head = null;
            return;
        }
        let current = this.head;
        let previous = null;
        while (current.next !== null) {
            previous = current;
            current = current.next;
        }
        if (previous !== null) {
            previous.next = null
        }
    }

    deleteAtCertainPosition(position: number): void {
        if (!this.head || position < 1) {
            return;
        }
        if (position === 1) {
            if (this.head.next !== null) {
                this.head.next.prev = null;
            }
            this.head = this.head.next;
        }
        let current = this.head;
        let previous = null;
        let count = 1;
        while (current && count < position) {
            previous = current;
            current = current.next;
            count++;
        }
        if (!current) {
            return;
        }
        if (previous !== null) {
            previous.next = current.next;
            if (current.next !== null) {
                current.next.prev = previous;
            }
        }
    }

}

const deletionDoublyLinkedList = new DeletionDoublyLinkedList();

deletionDoublyLinkedList.append(1);
deletionDoublyLinkedList.append(2);
deletionDoublyLinkedList.append(3);
deletionDoublyLinkedList.append(4);
deletionDoublyLinkedList.append(5);
deletionDoublyLinkedList.append(6);

console.log("Initial Linked List")
deletionDoublyLinkedList.display()

deletionDoublyLinkedList.deleteAtHead()
console.log("After deleting node from head")
deletionDoublyLinkedList.display()

deletionDoublyLinkedList.deleteAtTail()
console.log("After deleting node from the end of a linked list")
deletionDoublyLinkedList.display()

deletionDoublyLinkedList.deleteAtCertainPosition(3)
console.log("After deleting node from 3rd position of a linked list")
deletionDoublyLinkedList.display()