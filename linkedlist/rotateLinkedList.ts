class rotateNode {
    data: number;
    next: rotateNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class RotateLinkedList {
    head: rotateNode | null;
    constructor() {
        this.head = null;
    }
    append(data: number): void {
        const newNode = new rotateNode(data);
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
        let listString = ""
        let current = this.head;
        while (current) {
            listString += current.data + "->";
            current = current.next;
        }
        listString += "null";
        console.log(listString)
    }
    rotate(k: number): void {
        if (!this.head || k <= 0) {
            return;
        }
        let current = this.head;
        let length = 1;
        while (current.next) {
            current = current.next;
            length++;
        }
        k = k % length;
        if (k == 0) {
            return;
        }
        current = this.head;
        for (let i = 1; i < length - k; i++) {
            current = current.next!;
        }
        const newHead = current.next;
        current.next = null;
        current = newHead!
        while (current.next) {
            current = current.next;
        }
        current.next = this.head;
        this.head = newHead
    }
}

const rotateLinkedList = new RotateLinkedList();
rotateLinkedList.append(1);
rotateLinkedList.append(2);
rotateLinkedList.append(3);
rotateLinkedList.append(4);
rotateLinkedList.append(5);

console.log("Original Linked List:");
rotateLinkedList.display();

const rotationSteps = 2;
rotateLinkedList.rotate(rotationSteps);

console.log(`Linked List after rotating by ${rotationSteps} steps:`);
rotateLinkedList.display();