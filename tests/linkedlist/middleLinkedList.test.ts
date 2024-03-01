import { MiddleLinkedList } from "../../linkedlist/middleLinkedList"

describe('Middle of the linked list', () => {
    let list: MiddleLinkedList;

    beforeEach(() => {
        list = new MiddleLinkedList();
    })

    test('For odd number of nodes', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);

        expect(list.middle()!.data).toBe(3)
    })

    test('For even number of nodes', () => {
        list.append(1);
        list.append(2);
        list.append(3);
        list.append(4);
        list.append(5);
        list.append(6);

        expect(list.middle()!.data).toBe(4)

    })
})