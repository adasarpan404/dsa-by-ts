class middleNode {
    data: number;
    next: middleNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class MiddleLinkedList {
    head: middleNode | null;

    constructor() {
        this.head = null
    }

    append(data: number): void {
        const newNode = new middleNode(data);
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
        listString += "null"
        console.log(listString)
    }

    middle(): middleNode | null {
        let slow = this.head, fast = this.head;

        while (fast != null && fast.next != null) {
            slow = slow!.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

const middleLinkedList = new MiddleLinkedList();
middleLinkedList.append(1);
middleLinkedList.append(2);
middleLinkedList.append(3);
middleLinkedList.append(4);
middleLinkedList.append(5);
middleLinkedList.append(6);

middleLinkedList.display()
const middleElement = middleLinkedList.middle()

console.log("The middle element of the linked list", middleElement?.data);