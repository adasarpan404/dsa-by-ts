import { TreeNode } from "../../tree";
import { leftSideView, rightSideView } from "../../tree/left-rightView/brute";


describe('rightSideView', () => {
    test('Example 1', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });

    test('Example 2', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(4);

        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });

    test('Empty tree', () => {
        const root = null;

        expect(rightSideView(root)).toEqual([]);
    });
});

describe("leftSideView", () => {
    test('Example 1', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(4);
        expect(leftSideView(root)).toEqual([1, 3, 4]);
    })

    test('Example 2', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(5);
        root.right.right = new TreeNode(4);

        expect(leftSideView(root)).toEqual([1, 2, 5]);
    })

    test('Empty tree', () => {
        const root = null;
        expect(leftSideView(root)).toEqual([]);
    })
})
