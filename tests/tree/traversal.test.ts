import { TreeNode } from '../../tree';
import { postorderTraversal, preOrderTraversal, inorderTraversal, morrisInorderTraversal, morrisPreOrderTraversal } from '../../tree/traversal' // replace 'yourFile' with the file name where your code is stored

describe('traversal', () => {
    describe('inOrder', () => {
        it('returns the correct inorder traversal array for a binary tree', () => {

            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);

            const expectedResult = [4, 2, 5, 1, 3];
            expect(inorderTraversal(root)).toEqual(expectedResult);
        });

        it('returns an empty array for an empty tree', () => {
            const root = null;
            expect(inorderTraversal(root)).toEqual([]);
        });
    });

    describe('morris inorder', () => {
        it('return the correct inorder traversal array of a binary tree', () => {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);

            const expectedResult = [4, 2, 5, 1, 3]
            expect(morrisInorderTraversal(root)).toEqual(expectedResult)
        })

        it('returns an empty array for an empty tree', () => {
            const root = null;
            expect(inorderTraversal(root)).toEqual([]);
        });
    })

    describe('postOrder', () => {
        it('returns the correct postorder traversal array for a binary tree', () => {

            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);

            const expectedResult = [4, 5, 2, 3, 1];
            expect(postorderTraversal(root)).toEqual(expectedResult);
        });

        it('returns an empty array for an empty tree', () => {
            const root = null;
            expect(postorderTraversal(root)).toEqual([]);
        });
    });

    describe('preOrder', () => {
        it('returns the correct postorder traversal array for a binary tree', () => {

            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);

            const expectedResult = [1, 2, 4, 5, 3];
            expect(preOrderTraversal(root)).toEqual(expectedResult);
        });

        it('returns an empty array for an empty tree', () => {
            const root = null;
            expect(preOrderTraversal(root)).toEqual([]);
        });
    })

    describe('morris preorder', () => {
        it('returns the correct postorder traversal array for a binary tree', () => {

            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);

            const expectedResult = [1, 2, 4, 5, 3];
            expect(morrisPreOrderTraversal(root)).toEqual(expectedResult);
        });

        it('returns an empty array for an empty tree', () => {
            const root = null;
            expect(morrisPreOrderTraversal(root)).toEqual([]);
        });
    })
})


