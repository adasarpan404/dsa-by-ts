export class TraversalNode {
    data: number
    left: TraversalNode | null
    right: TraversalNode | null
    constructor(val: number) {
        this.data = val
        this.left = null
        this.right = null
    }
}

function inorder(root: TraversalNode | null, arr: number[]): void {
    if (root == null) {
        return;
    }
    inorder(root.left, arr);
    arr.push(root.data);
    inorder(root.right, arr);
}

export function inorderTraversal(root: TraversalNode | null): number[] {
    const arr: number[] = [];

    inorder(root, arr);

    return arr;
}

function postOrder(root: TraversalNode | null, arr: number[]): void {
    if (root == null) {
        return;
    }

    postOrder(root.left, arr);
    postOrder(root.right, arr);

    arr.push(root.data);
}

export function postorderTraversal(root: TraversalNode | null): number[] {
    const arr: number[] = [];

    postOrder(root, arr);

    return arr;
}

function preOrder(root: TraversalNode | null, arr: number[]): void {
    if (root == null) {
        return;
    }
    arr.push(root.data);
    preOrder(root.left, arr);
    preOrder(root.right, arr);

}

export function preOrderTraversal(root: TraversalNode | null): number[] {
    const arr: number[] = [];

    preOrder(root, arr);

    return arr;
}

export function morrisInorderTraversal(root: TraversalNode | null): number[] {
    let inorder: number[] = [];
    let cur = root;
    while (cur != null) {
        if (cur.left === null) {
            inorder.push(cur.data);
            cur = cur.right;
        } else {
            let prev = cur.left;
            while (prev.right && prev.right != cur) {
                prev = prev.right;
            }

            if (prev.right == null) {
                prev.right = cur;
                cur = cur.left;
            } else {
                prev.right = null;
                inorder.push(cur.data);
                cur = cur.right;
            }
        }
    }
    return inorder;
}

export function morrisPreOrderTraversal(root: TraversalNode | null): number[] {
    const result: number[] = [];
    let current: TraversalNode | null = root;

    while (current !== null) {
        if (current.left === null) {
            result.push(current.data);
            current = current.right;
        } else {
            let predecessor = current.left;

            while (predecessor.right !== null && predecessor.right !== current) {
                predecessor = predecessor.right;
            }

            if (predecessor.right === null) {
                result.push(current.data);
                predecessor.right = current;
                current = current.left;
            } else {
                predecessor.right = null;
                current = current.right;
            }
        }
    }

    return result;
}