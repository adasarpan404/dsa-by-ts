class cloneOptimizedNode {
    data: number;
    next: cloneOptimizedNode | null;
    random: cloneOptimizedNode | null;

    constructor(value: number) {
        this.data = value;
        this.next = null;
        this.random = null;
    }
}

function copyRandomOptimizeList(head: cloneOptimizedNode | null): cloneOptimizedNode | null {
    let temp: cloneOptimizedNode | null = head;
    while (temp !== null) {
        const newNode = new cloneOptimizedNode(temp.data);
        newNode.next = temp.next;
        temp.next = newNode;
        temp = newNode.next;
    }
    let itr: cloneOptimizedNode | null = head;
    while (itr !== null) {
        if (itr.random !== null) {
            itr.next!.random = itr.random.next;
        }
        itr = itr.next!.next;
    }
    const dummy = new cloneOptimizedNode(0);
    itr = head;
    temp = dummy;
    let fast: cloneOptimizedNode | null;
    while (itr !== null) {
        fast = itr.next!.next;
        temp!.next = itr.next;
        itr.next = fast;
        temp = temp!.next;
        itr = fast;
    }

    return dummy.next;
}


function printOptimizedList(head: cloneOptimizedNode | null): void {
    while (head !== null) {
        console.log(`${head.data}: ${head.next ? head.next.data : 'NULL'}, ${head.random ? head.random.data : 'NULL'}`);
        head = head.next;
    }
}


let head: cloneOptimizedNode | null = null;

const node1 = new cloneOptimizedNode(1);
const node2 = new cloneOptimizedNode(2);
const node3 = new cloneOptimizedNode(3);
const node4 = new cloneOptimizedNode(4);

head = node1;
head.next = node2;
head.next.next = node3;
head.next.next.next = node4;

head.random = node4;
head.next.random = node1;
head.next.next.random = null;
head.next.next.next.random = node2;

console.log("Original list: (current node: node pointed by next pointer, node pointed by random pointer)");
printOptimizedList(head);

console.log("Copy list: (current node: node pointed by next pointer, node pointed by random pointer)");
const newHead = copyRandomOptimizeList(head);
printOptimizedList(newHead);
