class detectLoopNode {
    data: number;
    next: detectLoopNode | null
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class DetectLoopLinkedList {
    head: detectLoopNode | null
    constructor() {
        this.head = null;
    }
    append(data: number): void {
        const newNode = new detectLoopNode(data);
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

    detectLoop1(): boolean {
        let fast = this.head;
        let slow = this.head;
        while (slow && fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast) {
                return true
            }
        }
        return false
    }

    detectLoop2(): boolean {
        const nodeSet: Set<detectLoopNode> = new Set();
        let temp: detectLoopNode | null = this.head;

        while (temp !== null) {
            if (nodeSet.has(temp)) {
                return true;
            }
            nodeSet.add(temp);
            temp = temp.next;
        }

        return false;
    }

    createLoop(): void {
        this.head!.next!.next!.next = this.head
    }
}

const detectLoopLinkedList = new DetectLoopLinkedList();
detectLoopLinkedList.append(1);
detectLoopLinkedList.append(2);
detectLoopLinkedList.append(3);
detectLoopLinkedList.append(4);
detectLoopLinkedList.createLoop();
console.log(detectLoopLinkedList.detectLoop1())
console.log(detectLoopLinkedList.detectLoop2())

