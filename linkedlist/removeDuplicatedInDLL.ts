class duplicatesDLLNode {
    constructor(public data: number, public prev: duplicatesDLLNode | null = null, public next: duplicatesDLLNode | null = null) { };
}

class DuplicateDoublyLinkedList {
    constructor(public head: duplicatesDLLNode | null = null, public tail: duplicatesDLLNode | null = null) { }

    addNode(data: number): void {
        const newNode = new duplicatesDLLNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }
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
    removeDuplicates(): void {
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                const nextNext = current.next.next;
                if (nextNext) {
                    nextNext.prev = current;
                } else {
                    this.tail = current;
                }
                current.next = nextNext;
            } else {
                current = current.next;
            }
        }
    }
}

const duplicateDoublyLinkedList = new DuplicateDoublyLinkedList();

duplicateDoublyLinkedList.addNode(1);
duplicateDoublyLinkedList.addNode(2);
duplicateDoublyLinkedList.addNode(3);
duplicateDoublyLinkedList.addNode(3);
duplicateDoublyLinkedList.addNode(4);
duplicateDoublyLinkedList.addNode(4);
duplicateDoublyLinkedList.addNode(5);
duplicateDoublyLinkedList.addNode(5);

console.log("Before removing the duplicates");

duplicateDoublyLinkedList.display();

console.log("After removing the duplicates");

duplicateDoublyLinkedList.removeDuplicates();

duplicateDoublyLinkedList.display()