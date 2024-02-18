class Queue<T> {
    private items: T[]

    constructor() {
        this.items = []
    }

    enqueue(item: T): void {
        this.items.push(item)
    }

    dequeue(): T | undefined {
        return this.items.shift()
    }

    peek(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

// const queue = new Queue<number>()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)

// console.log("Size:", queue.size())
// console.log("Peek:", queue.peek())
// console.log("Dequeue:", queue.dequeue())
// console.log("Size:", queue.size())
// queue.clear()
// console.log("Is empty:", queue.isEmpty())

// console.log("String Queue implemented")
// const stringQueue = new Queue<string>()

// stringQueue.enqueue("arpan")
// stringQueue.enqueue("das")

// console.log("Size:", stringQueue.size())
// console.log("Peek:", stringQueue.peek())
// console.log("Dequeue:", stringQueue.dequeue())
// console.log("Size:", stringQueue.size())
// stringQueue.clear()
// console.log("Is Empty:", stringQueue.isEmpty())