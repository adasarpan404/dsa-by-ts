class nodedeletion {
    data: number;
    next: nodedeletion | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class DeletionLinkedList {
    head: nodedeletion | null;

    constructor() {
        this.head = null;
    }

    insertAtHead(data: number): void {
        const newNode = new nodedeletion(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    display(): void {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
    deleteAtHead(): void {
        this.head = this.head!.next
    }

    deleteAtEnd(): void {
        let current = this.head;
        while (current!.next!.next) {
            current = current!.next;
        }
        current!.next = null;
    }

    deleteAtCertainPostion(position: number): void {
        if (!this.head || position < 1) {
            return;
        }
        if (position === 1) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        let previous = null;
        let count = 1;
        while (current && count < position) {
            previous = current;
            current = current.next!;
            count++;
        }
        if (!current) {
            return;
        }
        if (previous) {
            previous.next = current.next;
        }
    }
}

let deletionLinkedList = new DeletionLinkedList();

deletionLinkedList.insertAtHead(6);
deletionLinkedList.insertAtHead(5);
deletionLinkedList.insertAtHead(4);
deletionLinkedList.insertAtHead(3);
deletionLinkedList.insertAtHead(2);
deletionLinkedList.insertAtHead(1);

console.log("Initial List")
deletionLinkedList.display()

deletionLinkedList.deleteAtHead();
console.log("After deletion from head")
deletionLinkedList.display()

deletionLinkedList.deleteAtEnd()
console.log("After deletion from end")
deletionLinkedList.display()

deletionLinkedList.deleteAtCertainPostion(3)
console.log("After deletion from certain position")
deletionLinkedList.display()
