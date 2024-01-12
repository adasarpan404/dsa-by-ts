class nodeinsertion {
    data: number;
    next: nodeinsertion | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class InsertionLinkedList {
    head: nodeinsertion | null;
    constructor() {
        this.head = null;
    }
    insertAtHead(data: number): void {
        const newNode = new nodeinsertion(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAtTail(data: number): void {
        const newNode = new nodeinsertion(data);
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
    insertAfter(data: number, key: number): void {
        const newNode = new nodeinsertion(data);
        if (key == this.head!.data) {
            newNode.next = this.head!.next;
            this.head!.next = newNode;
            return;
        }
        let temp = this.head;
        while (temp!.data != key) {
            temp = temp!.next;
            if (temp == null) {
                return;
            }
        }
        newNode.next = temp!.next;
        temp!.next = newNode
    }
    display(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const insertionLinkedList = new InsertionLinkedList();
console.log("insertion at head")
insertionLinkedList.insertAtHead(1);
insertionLinkedList.insertAtHead(2);
insertionLinkedList.insertAtHead(3);

insertionLinkedList.display()

console.log("insertion at tail")
const insertionLinkedList1 = new InsertionLinkedList();
insertionLinkedList1.insertAtTail(1);
insertionLinkedList1.insertAtTail(2);
insertionLinkedList1.insertAtTail(3);
insertionLinkedList1.display()

// 1->2->3

console.log("inserting 4 after 2")

insertionLinkedList1.insertAfter(4, 2);
insertionLinkedList1.display();

// 1-> 2-> 4-> 3