class dnfNode {
    data: number;
    next: dnfNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class DNFLinkedList {
    head: dnfNode | null
    constructor() {
        this.head = null;
    }

    append(data: number): void {
        const newNode = new dnfNode(data);
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

    sort(): void {
        if (!this.head) {
            return;
        }
        let count = [0, 0, 0]
        let current = this.head;
        while (current !== null) {
            count[current.data]++;
            current = current.next!;
        }
        current = this.head;
        for (let i = 0; i < 3; i++) {
            while (count[i] > 0) {
                current.data = i;
                count[i]--;
                current = current.next!;
            }
        }
    }
}

const dnfLinkedList = new DNFLinkedList();
dnfLinkedList.append(0);
dnfLinkedList.append(1);
dnfLinkedList.append(0);
dnfLinkedList.append(2);
dnfLinkedList.append(0);
dnfLinkedList.append(1);
dnfLinkedList.append(2);
dnfLinkedList.append(1);

dnfLinkedList.display();

dnfLinkedList.sort()

console.log("after sorting")

dnfLinkedList.display()