import { AddOneLinkedList } from "../../linkedlist/addOneToNumberRepresented";

describe('AddOneLinkedList', () => {
    test('addOne function should add one to the linked list correctly', () => {
        const list = new AddOneLinkedList();
        list.append(1);
        list.append(2);
        list.append(9);
        list.append(9);

        list.addOne();

        let current = list.head;
        let result = "";
        while (current) {
            result += current.data;
            current = current.next;
        }

        expect(result).toEqual("1300");
    });

    test('addOne function should handle carry overflows correctly', () => {
        const list = new AddOneLinkedList();
        list.append(9);
        list.append(9);
        list.append(9);

        list.addOne();

        let current = list.head;
        let result = "";
        while (current) {
            result += current.data;
            current = current.next;
        }

        expect(result).toEqual("1000");
    });
});
