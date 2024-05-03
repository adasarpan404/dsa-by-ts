import { TreeNode } from "..";

function rightSideRecusrion(root: TreeNode | null, level: number, res: number[]) {
    if (root == null) {
        return;
    }

    if (res.length === level) {
        res.push(root.data);
        rightSideRecusrion(root.right, level + 1, res);
        rightSideRecusrion(root.left, level + 1, res)

    }
}
export function rightSideView(root: TreeNode | null): number[] {
    let res: number[] = [];

    rightSideRecusrion(root, 0, res);

    return res;

}

function leftSideRecursion(root: TreeNode | null, level: number, res: number[]) {
    if (root == null) {
        return;
    }

    if (res.length === level) {
        res.push(root.data);
    }
    leftSideRecursion(root.left, level + 1, res);
    leftSideRecursion(root.right, level + 1, res);
}

export function leftSideView(root: TreeNode | null): number[] {
    let res: number[] = [];

    leftSideRecursion(root, 0, res);

    return res;
}      