class mergeSortedNode {
    data: number;
    next: mergeSortedNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class MergeSortLinkedList {
    head: mergeSortedNode | null;
    constructor() {
        this.head = null;
    }
    append(data: number): void {
        const newNode = new mergeSortedNode(data);
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
    merge(otherList: MergeSortLinkedList): MergeSortLinkedList {
        const mergedList = new MergeSortLinkedList();
        let currentA = this.head;
        let currentB = otherList.head;
        while (currentA && currentB) {
            if (currentA.data < currentB.data) {
                mergedList.append(currentA.data);
                currentA = currentA.next
            } else {
                mergedList.append(currentB.data);
                currentB = currentB.next;
            }
        }
        while (currentA) {
            mergedList.append(currentA.data);
            currentA = currentA.next;
        }
        while (currentB) {
            mergedList.append(currentB.data);
            currentB = currentB.next;
        }
        return mergedList;
    }
}

const list1 = new MergeSortLinkedList();
list1.append(1);
list1.append(3);
list1.append(5);

const list2 = new MergeSortLinkedList();
list2.append(2);
list2.append(4);
list2.append(6);

console.log("List 1:");
list1.display();

console.log("List 2:");
list2.display();

const mergedList = list1.merge(list2);

console.log("Merged List:");
mergedList.display();