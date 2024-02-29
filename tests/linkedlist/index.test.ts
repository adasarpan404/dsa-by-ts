import { LinkedList } from '../../linkedlist/intro'; // Assuming LinkedList class is in a separate file

describe('LinkedList', () => {
    test('append method adds elements to the list', () => {
        const list = new LinkedList();
        list.append(1);
        list.append(2);
        list.append(3);
        expect(list.head!.data).toBe(1);
        expect(list.head!.next!.data).toBe(2);
        expect(list.head!.next!.next!.data).toBe(3);
    });

    test('display method prints the elements of the list', () => {
        const list = new LinkedList();
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        list.append(1);
        list.append(2);
        list.append(3);
        list.display();
        expect(consoleSpy).toHaveBeenCalledWith(1);
        expect(consoleSpy).toHaveBeenCalledWith(2);
        expect(consoleSpy).toHaveBeenCalledWith(3);
        consoleSpy.mockRestore();
    });
});
