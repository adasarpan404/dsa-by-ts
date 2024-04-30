import { TreeNode } from "..";

export function rightSideView(root: TreeNode | null): number[] {
    let res: number[] = [];

    if (!root) {
        return res;
    }

    let q: TreeNode[] = [];
    q.push(root);

    while (q.length > 0) {
        let size = q.length;
        let level: number[] = [];

        for (let i = 0; i < size; i++) {
            let node = q.shift()!;
            level.push(node.data);

            if (node.left !== null) {
                q.push(node.left);
            }

            if (node.right !== null) {
                q.push(node.right);
            }
        }

        res.push(level[level.length - 1]);
    }

    return res;
}

export function leftSideView(root: TreeNode | null): number[] {
    let res: number[] = [];
    if (!root) {
        return res;
    }

    let q: TreeNode[] = [];
    q.push(root);
    while (q.length > 0) {
        let size = q.length;
        let level: number[] = [];

        for (let i = 0; i < size; i++) {
            let node = q.shift()!;
            level.push(node.data);
            if (node.left !== null) {
                q.push(node.left);
            }

            if (node.right !== null) {
                q.push(node.right);
            }
        }
        res.push(level[0]);
    }
    return res;
}