import { DeletionLinkedList } from "../../linkedlist/deletion";

describe('DeletionLinkedList', () => {
    let list: DeletionLinkedList;

    beforeEach(() => {
        list = new DeletionLinkedList();
    });

    test('deleteAtHead method deletes the head node', () => {
        list.insertAtHead(1);
        list.insertAtHead(2);
        list.deleteAtHead();
        expect(list.head!.data).toBe(1);
    });

    test('deleteAtEnd method deletes the last node', () => {
        list.insertAtHead(1);
        list.insertAtHead(2);
        list.insertAtHead(3);
        list.deleteAtEnd();
        expect(list.head!.data).toBe(3);
    });

    test('deleteAtCertainPostion method deletes node at the specified position', () => {
        list.insertAtHead(1);
        list.insertAtHead(2);
        list.insertAtHead(3);
        list.deleteAtCertainPostion(2);
        expect(list.head!.data).toBe(3);
        expect(list.head!.next!.data).toBe(1);
    });

    test('deleteAtCertainPostion method handles position out of range', () => {
        list.insertAtHead(1);
        list.insertAtHead(2);
        list.insertAtHead(3);
        list.deleteAtCertainPostion(5); // Deleting at a position out of range
        expect(list.head!.data).toBe(3);
        expect(list.head!.next!.data).toBe(2);
        expect(list.head!.next!.next!.data).toBe(1);
    });

    test('deleteAtCertainPostion method handles deleting the head node', () => {
        list.insertAtHead(1);
        list.insertAtHead(2);
        list.insertAtHead(3);
        list.deleteAtCertainPostion(1); // Deleting the head node
        expect(list.head!.data).toBe(2);
        expect(list.head!.next!.data).toBe(1);
    });

    test('deleteAtCertainPostion method handles deleting the last node', () => {
        list.insertAtHead(1);
        list.insertAtHead(2);
        list.insertAtHead(3);
        list.deleteAtCertainPostion(3); // Deleting the last node
        expect(list.head!.data).toBe(3);
        expect(list.head!.next!.data).toBe(2);
        expect(list.head!.next!.next).toBe(null);
    });

    test('display method prints the elements of the list', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        list.insertAtHead(1);
        list.insertAtHead(2);
        list.insertAtHead(3);
        list.display();
        expect(consoleSpy).toHaveBeenCalledWith(3);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(1);
        consoleSpy.mockRestore();
    });
});
