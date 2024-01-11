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

    insertAtTail(data: number): void {
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

    insertAtHead(data: number): void {
        const newNode = new doublyNode(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head!.prev = newNode;
            this.head = newNode;
        }
    }

    insertAfter(data: number, key: number): void {
        const newNode = new doublyNode(data);
        if (!this.head) {
            return;
        }
        let temp = this.head!;
        while (temp) {
            if (temp.data === key) {
                newNode.prev = temp;
                newNode.next = temp.next;
                if (temp.next) {
                    temp.next.prev = newNode;
                } else {
                    this.tail = newNode;
                }
                temp.next = newNode;
                return;
            }
            temp = temp.next!;
        }
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
console.log("Insert at the head of linked list")
doublyLinkedList.insertAtHead(1);
doublyLinkedList.insertAtHead(2);
doublyLinkedList.insertAtHead(3);
console.log("Forward:");
doublyLinkedList.display();

console.log("\nReverse:");
doublyLinkedList.displayReverse();

const doublyLinkedList1 = new DoublyLinkedList();
console.log("Insert at Tail of Linked List")
doublyLinkedList1.insertAtTail(1);
doublyLinkedList1.insertAtTail(2);
doublyLinkedList1.insertAtTail(3);

console.log("Forward:");
doublyLinkedList1.display();

console.log("\nReverse:");
doublyLinkedList1.displayReverse();

console.log("Insert after 2")

doublyLinkedList1.insertAfter(4, 2);

console.log("Forward:");
doublyLinkedList1.display();

console.log("\nReverse:");
doublyLinkedList1.displayReverse();