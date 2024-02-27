import { InsertionLinkedList } from "./insertion";


describe('InsertionLinkedList', () => {
    let list: InsertionLinkedList;

    beforeEach(() => {
        list = new InsertionLinkedList();
    });

    test('insertAtHead method inserts node at the head of the list', () => {
        list.insertAtHead(1);
        list.insertAtHead(2);
        expect(list.head!.data).toBe(2);
        expect(list.head!.next!.data).toBe(1);
    });

    test('insertAtTail method inserts node at the tail of the list', () => {
        list.insertAtTail(1);
        list.insertAtTail(2);
        expect(list.head!.data).toBe(1);
        expect(list.head!.next!.data).toBe(2);
    });

    test('insertAfter method inserts node after the node with the given key', () => {
        list.insertAtTail(1);
        list.insertAtTail(2);
        list.insertAtTail(3);
        list.insertAfter(4, 2);
        expect(list.head!.next!.next!.data).toBe(4);
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
