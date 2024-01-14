class reverseNode {
    data: number;
    next: reverseNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class ReverseLinkedList {
    head: reverseNode | null
    constructor() {
        this.head = null
    }

    append(data: number): void {
        const newNode = new reverseNode(data);
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
        let listString = "";

        let current = this.head;
        while (current) {
            listString += current.data + "->";
            current = current.next;
        }
        listString += "null"
        console.log(listString)
    }

    reverseIterative(): void {
        let current = this.head;
        let prev = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
    recursive(current: reverseNode | null, prev: reverseNode | null): reverseNode | null {
        if (current === null) {
            return prev;
        }
        const next = current.next;
        current.next = prev;
        return this.recursive(next, current)
    }
    reverseRecursive(): void {
        this.head = this.recursive(this.head, null)
    }

}

const reverseLinkedList = new ReverseLinkedList();

reverseLinkedList.append(1);
reverseLinkedList.append(2);
reverseLinkedList.append(3);
console.log("Initial Linked List")
reverseLinkedList.display();

console.log("Reversing the linked list")
// reverseLinkedList.reverseIterative()
reverseLinkedList.reverseRecursive()
reverseLinkedList.display()

