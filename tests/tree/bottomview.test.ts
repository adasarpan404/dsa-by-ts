import { TreeNode } from "../../tree";
import { bottomView } from "../../tree/bottomView";


describe('Bottom View of Binary Tree', () => {

    test('Example Test Case', () => {
        // Create a sample binary tree
        //       1
        //     /   \
        //    2     3
        //     \   / \
        //      4 6   5
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(5);

        // Expected bottom view: [2, 1, 3, 5]
        const expected = [2, 1, 3, 5];
        const result = bottomView(root);

        console.log("Expected bottom view:", expected);
        console.log("Result bottom view:", result);

        expect(result).toEqual(expected);
    });
    test('Empty Tree', () => {
        // Test with an empty tree
        const root = null;

        // Expected bottom view: []
        const expected: number[] = [];
        const result = bottomView(root);

        expect(result).toEqual(expected);
    });

    test('Single Node Tree', () => {
        // Test with a single node tree
        const root = new TreeNode(1);

        // Expected bottom view: [1]
        const expected = [1];
        const result = bottomView(root);

        expect(result).toEqual(expected);
    });

    test('Skewed Right Tree', () => {
        // Create a skewed right binary tree
        //     1
        //      \
        //       2
        //        \
        //         3
        //          \
        //           4
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        root.right.right.right = new TreeNode(4);

        // Expected bottom view: [1, 2, 3, 4]
        const expected = [1, 2, 3, 4];
        const result = bottomView(root);

        expect(result).toEqual(expected);
    });

    // Add more test cases as needed
});
