export class Stack<T> {
    private items: T[]

    constructor() {
        this.items = []
    }

    push(item: T): void {
        this.items.push(item)
    }

    pop(): T | undefined {
        return this.items.pop()
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1]
    }

    size(): number {
        return this.items.length
    }

    isEmpty(): boolean {
        return this.items.length == 0
    }

    clear(): void {
        this.items = []
    }
}

// const stack = new Stack<number>()

// stack.push(1)
// stack.push(2)
// stack.push(3)

// console.log("Size:", stack.size())
// console.log("Peek:", stack.peek())
// console.log("Pop:", stack.pop())
// console.log("Size:", stack.size())
// stack.clear()
// console.log("Is empty:", stack.isEmpty())


// console.log("example of string stack")
// const stringStack = new Stack<string>()

// stringStack.push("arpan")
// stringStack.push("das")

// console.log("Size:", stringStack.size())
// console.log("Peek:", stringStack.peek())
// console.log("Pop:", stringStack.pop())
// console.log("Size:", stringStack.size())
// stringStack.clear()
// console.log("Is empty:", stringStack.isEmpty())
