import { TreeNode } from "..";

export function bottomView(root: TreeNode | null): number[] {
    const ans: number[] = []

    if (!root) {
        return ans;
    }
    const mpp: Map<number, number> = new Map();

    const q: Array<[TreeNode, number]> = [];
    q.push([root, 0]);
    while (q.length > 0) {
        const [node, line] = q.shift()!;
        mpp.set(line, node.data);

        if (node.left != null) {
            q.push([node.left, line - 1])
        }
        if (node.right != null) {
            q.push([node.right, line + 1])
        }
    }
    for (const [_, value] of mpp) {
        ans.push(value)
    }
    return ans;
}  