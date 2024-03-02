import { ReverseLinkedList } from "../../linkedlist/reverseLinkedList";

describe('ReverseLinkedList', () => {
    test('reverseIterative function should reverse the linked list iteratively', () => {
        const list = new ReverseLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);

        list.reverseIterative();

        let current = list.head;
        let result = "";
        while (current) {
            result += current.data + "->";
            current = current.next;
        }
        result += "null";

        expect(result).toEqual("4->3->2->1->null");
    });

    test('reverseRecursive function should reverse the linked list recursively', () => {
        const list = new ReverseLinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);

        list.reverseRecursive();

        let current = list.head;
        let result = "";
        while (current) {
            result += current.data + "->";
            current = current.next;
        }
        result += "null";

        expect(result).toEqual("4->3->2->1->null");
    });
});
