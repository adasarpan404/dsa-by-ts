class intersectionNode {
    data: number;
    next: intersectionNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

function findIntersection(headA: intersectionNode | null, headB: intersectionNode | null): intersectionNode | null {
    let p1: intersectionNode | null = headA;
    let p2: intersectionNode | null = headB;
    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }
    return p1;
}

const listA = new intersectionNode(1);

listA.next = new intersectionNode(2);
listA.next.next = new intersectionNode(3);
listA.next.next.next = new intersectionNode(4);
const listB = new intersectionNode(5);
listB.next = listA.next.next;

const intersection = findIntersection(listA, listB);

if (intersection) {
    console.log(`Intersection point value: ${intersection.data}`);
} else {
    console.log("No intersection found");
}