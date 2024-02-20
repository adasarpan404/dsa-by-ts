import { binarySearch } from "./binarysearch";
import { insertPosition } from "./insertPosition";
import { isPerfectSquare } from "./isPerfectSquare";

describe("binary search", () => {
    const num: number[] = [10, 20, 30, 40, 50, 60];
    test("Present in array", () => {
        const pos = binarySearch(num, 40)
        expect(pos).toBe(3)
    })
    test("Not Present in array", () => {
        const pos = binarySearch(num, 45)
        expect(pos).toBe(-1)
    })
})

describe("insert position", () => {
    const num: number[] = [20, 30, 40, 50]
    test("insert at the beginning", () => {
        const pos = insertPosition(num, 10)
        expect(pos).toBe(0)
    })

    test("insert at the somewhere in middle", () => {
        const pos = insertPosition(num, 25)
        expect(pos).toBe(1)
    })

    test("insert at the end", () => {
        const pos = insertPosition(num, 60)
        expect(pos).toBe(4)
    })
})

describe("is perfect square", () => {
    test("perfect square", () => {
        expect(isPerfectSquare(16)).toBe(true)
    })

    test("not perfect square", () => {
        expect(isPerfectSquare(20)).toBe(false)
    })
})