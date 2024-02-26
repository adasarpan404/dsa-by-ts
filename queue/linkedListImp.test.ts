import { Queue } from './linkedListImp';

describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('enqueue and dequeue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBeUndefined();
        expect(queue.front()).toBe(2);

        queue.dequeue();
        queue.dequeue();

        expect(queue.front()).toBeNull();
    });

    test('isEmpty', () => {
        expect(queue.isEmpty()).toBe(true);
        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);
        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });

    test('front', () => {
        expect(queue.front()).toBeNull();
        queue.enqueue(1);
        expect(queue.front()).toBe(1);
        queue.enqueue(2);
        expect(queue.front()).toBe(1);
    });
});
