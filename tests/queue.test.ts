import { Queue } from "../queue";


describe('Queue', () => {
    let queue: Queue<number>;

    beforeEach(() => {
        queue = new Queue<number>();
    });

    test('enqueue and dequeue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.dequeue()).toBeUndefined();
    });

    test('peek', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.peek()).toBe(1);
        queue.dequeue();
        expect(queue.peek()).toBe(2);
    });

    test('size', () => {
        expect(queue.size()).toBe(0);

        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.size()).toBe(3);

        queue.dequeue();
        expect(queue.size()).toBe(2);
    });

    test('isEmpty', () => {
        expect(queue.isEmpty()).toBe(true);

        queue.enqueue(1);
        expect(queue.isEmpty()).toBe(false);

        queue.dequeue();
        expect(queue.isEmpty()).toBe(true);
    });

    test('clear', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        queue.clear();
        expect(queue.size()).toBe(0);
        expect(queue.isEmpty()).toBe(true);
    });
});
