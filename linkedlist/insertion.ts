class nodeinsertion {
    data: number;
    next: nodeinsertion | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

export class InsertionLinkedList {
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
