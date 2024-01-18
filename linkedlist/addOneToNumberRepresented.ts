class addOneNode {
    data: number;
    next: addOneNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null
    }
}

class AddOneLinkedList {
    head: addOneNode | null;
    constructor() {
        this.head = null;
    }
    append(data: number): void {
        const newNode = new addOneNode(data);
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
    reverse(current: addOneNode | null): addOneNode | null {
        let prev = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
    addOne(): void {
        this.head = this.reverse(this.head);

        let current = this.head;
        let carry = 1;

        while (current !== null && carry > 0) {
            const sum = current.data + carry;
            current.data = sum % 10;
            carry = Math.floor(sum / 10);
            current = current.next!;
        }
        if (carry > 0) {
            this.append(carry)
        }
        this.head = this.reverse(this.head);
    }
}

const addOneLinkedList = new AddOneLinkedList();

addOneLinkedList.append(1);
addOneLinkedList.append(2);
addOneLinkedList.append(9);

addOneLinkedList.display();

addOneLinkedList.addOne();

addOneLinkedList.display();


