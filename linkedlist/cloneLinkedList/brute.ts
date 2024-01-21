class cloneBruteNode {
    data: number;
    next: cloneBruteNode | null;
    random: cloneBruteNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
        this.random = null;
    }
}

function copyRandomBruteList(head: cloneBruteNode | null): cloneBruteNode | null {
    const hashMap: Map<cloneBruteNode, cloneBruteNode> = new Map();

    let temp: cloneBruteNode | null = head;
    while (temp !== null) {
        const newNode = new cloneBruteNode(temp.data);
        hashMap.set(temp, newNode);
        temp = temp.next;
    }
    let t: cloneBruteNode | null = head;
    while (t !== null) {
        const node = hashMap.get(t)!;
        node.next = t.next !== null ? hashMap.get(t.next)! : null;
        node.random = t.random !== null ? hashMap.get(t.random)! : null;
        t = t.next;
    }

    return hashMap.get(head!) || null;
}

function printList(head: cloneBruteNode | null): void {
    while (head !== null) {
        console.log(`${head.data}: ${head.next ? head.next.data : 'NULL'}, ${head.random ? head.random.data : 'NULL'}`);
        head = head.next;
    }
}

const main = () => {
    let head: cloneBruteNode | null = null;

    const node1 = new cloneBruteNode(1);
    const node2 = new cloneBruteNode(2);
    const node3 = new cloneBruteNode(3);
    const node4 = new cloneBruteNode(4);

    head = node1;
    head.next = node2;
    head.next.next = node3;
    head.next.next.next = node4;

    head.random = node4;
    head.next.random = node1;
    head.next.next.random = null;
    head.next.next.next.random = node2;

    console.log("Original list: (current node: node pointed by next pointer, node pointed by random pointer)");
    printList(head);

    console.log("Copy list: (current node: node pointed by next pointer, node pointed by random pointer)");
    const newHead = copyRandomBruteList(head);
    printList(newHead);
};

main();