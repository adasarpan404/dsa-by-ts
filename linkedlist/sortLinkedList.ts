class sortedNode {
    data: number;
    next: sortedNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class SortLinkedList {
    head: sortedNode | null;
    constructor() {
        this.head = null;
    }
    append(data: number): void {
        const newNode = new sortedNode(data);
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

    //start of bubble sort

    bubbleSort(): void {
        if (!this.head) {
            return;
        }
        let swapped: boolean;
        do {
            swapped = false;
            let current: sortedNode | null = this.head;
            let prev: sortedNode | null = null;

            while (current && current.next) {
                if (current.data > current.next.data) {
                    // Swap nodes
                    const temp: sortedNode | null = current.next;
                    current.next = temp?.next || null;
                    temp.next = current;

                    if (prev) {
                        prev.next = temp;
                    } else {
                        this.head = temp;
                    }

                    swapped = true;
                }

                prev = current;
                current = current.next;
            }
        } while (swapped);
    }

    //end of bubble sort

    //start of insertion sort

    sortedInsert(sorted: sortedNode | null, newNode: sortedNode): sortedNode | null {
        if (!sorted || newNode.data <= sorted.data) {
            newNode.next = sorted;
            return newNode;
        }
        let current = sorted;
        while (current.next && newNode.data > current.next.data) {
            current = current.next;
        }
        newNode.next = current.next;
        current.next = newNode;
        return sorted
    }
    insertionSort(): void {
        if (!this.head) {
            return;
        }
        let sorted: sortedNode | null = null;
        let current: sortedNode | null = this.head;

        while (current) {
            const nextNode: sortedNode | null = current.next;
            sorted = this.sortedInsert(sorted, current);
            current = nextNode;
        }
        this.head = sorted;
    }

    //end of insertion sort

    //start of quick sort


    private concat(first: sortedNode | null, second: sortedNode | null): sortedNode | null {
        if (!first) {
            return second;
        }
        let current = first;
        while (current.next) {
            current = current.next;
        }
        current.next = second;
        return first;
    }
    private concatNodes(lesser: sortedNode | null, equal: sortedNode | null, greater: sortedNode | null): sortedNode | null {
        let result: sortedNode | null = null;
        result = this.concat(result, lesser);
        result = this.concat(result, equal);
        result = this.concat(result, greater);
        return result;
    }

    private appendNode(list: sortedNode | null, value: number): sortedNode {
        const newNode = new sortedNode(value);
        if (!list) {
            return newNode;
        }

        let current = list;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
        return list;
    }

    private quickSortRecursive(node: sortedNode | null): sortedNode | null {
        if (!node || !node.next) {
            return node;
        }

        const pivot = node.data;
        let lesser: sortedNode | null = null;
        let equal: sortedNode | null = null;
        let greater: sortedNode | null = null;

        let current: sortedNode | null = node;

        while (current) {
            if (current.data < pivot) {
                lesser = this.appendNode(lesser, current.data);
            } else if (current.data === pivot) {
                equal = this.appendNode(equal, current.data);
            } else {
                greater = this.appendNode(greater, current.data);
            }

            current = current.next;
        }

        lesser = this.quickSortRecursive(lesser);
        greater = this.quickSortRecursive(greater);

        return this.concatNodes(lesser, equal, greater);
    }
    quickSort(): void {
        this.head = this.quickSortRecursive(this.head);
    }

    // end of quick sort

    // start of merge sort

    private getMiddle(node: sortedNode | null): sortedNode | null {
        if (!node) {
            return null;
        }
        let slow = node;
        let fast = node;
        while (fast.next && fast.next.next) {
            slow = slow.next!;
            fast = fast.next.next!;
        }
        return slow;
    }

    private merge(left: sortedNode | null, right: sortedNode | null): sortedNode | null {
        const dummyHead = new sortedNode(0);
        let current = dummyHead;

        while (left && right) {
            if (left.data < right.data) {
                current.next = left;
                left = left.next;
            } else {
                current.next = right;
                right = right.next;
            }
            current = current.next;
        }

        current.next = left || right;

        return dummyHead.next;
    }

    private mergeSortRecursive(node: sortedNode | null): sortedNode | null {
        if (!node || !node.next) {
            return node;
        }

        const mid = this.getMiddle(node);
        const midNext = mid!.next;

        mid!.next = null;

        const left = this.mergeSortRecursive(node);
        const right = this.mergeSortRecursive(midNext);

        return this.merge(left, right);
    }

    mergeSort(): void {
        this.head = this.mergeSortRecursive(this.head);
    }

    //end of merge sort
}

const sortedLinkedList = new SortLinkedList();
sortedLinkedList.append(4);
sortedLinkedList.append(3);
sortedLinkedList.append(2);
sortedLinkedList.append(1);
console.log("Initial Linked List");
sortedLinkedList.display();
// sortedLinkedList.bubbleSort();
// sortedLinkedList.insertionSort();
// sortedLinkedList.quickSort();
sortedLinkedList.mergeSort();
console.log("After sorting")
sortedLinkedList.display();
