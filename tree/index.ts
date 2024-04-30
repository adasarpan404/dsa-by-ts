export class TreeNode {
    data: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val: number) {
        this.data = val
        this.left = null
        this.right = null
    }
}