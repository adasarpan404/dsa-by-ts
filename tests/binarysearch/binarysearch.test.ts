import { binarySearch } from "../../binarysearch/binarysearch";
import { findPeakElement } from "../../binarysearch/findPeakElement";
import { FirstAndLastPositions } from "../../binarysearch/firstAndLastPositions";
import { insertPosition } from "../../binarysearch/insertPosition";
import { isPerfectSquare } from "../../binarysearch/isPerfectSquare";
import { SearchInRotatedArray } from "../../binarysearch/searchInRotatedArray";
import { sqrt } from "../../binarysearch/squareRootX";

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

describe("square root of x", () => {
    test("square root of 16", () => {
        expect(sqrt(16)).toBe(4)
    })

    test("square root of 9", () => {
        expect(sqrt(9)).toBe(3)
    })
})

describe('First and Last Positions', () => {
    let solution: FirstAndLastPositions;

    beforeEach(() => {
        solution = new FirstAndLastPositions();
    });

    it('should return correct range for target present in array', () => {
        const nums = [5, 7, 7, 8, 8, 10];
        const target = 8;
        const expectedRange = [3, 4];
        expect(solution.searchRange(nums, target)).toEqual(expectedRange);
    });

    it('should return [-1, -1] for target not present in array', () => {
        const nums = [5, 7, 7, 8, 8, 10];
        const target = 6;
        const expectedRange = [-1, -1];
        expect(solution.searchRange(nums, target)).toEqual(expectedRange);
    });

    it('should return [0, 0] for single element array with target present', () => {
        const nums = [5];
        const target = 5;
        const expectedRange = [0, 0];
        expect(solution.searchRange(nums, target)).toEqual(expectedRange);
    });

    it('should return [-1, -1] for single element array with target not present', () => {
        const nums = [5];
        const target = 6;
        const expectedRange = [-1, -1];
        expect(solution.searchRange(nums, target)).toEqual(expectedRange);
    });

    it('should return correct range for target present at both ends of array', () => {
        const nums = [8, 8, 8, 8, 8, 8, 8];
        const target = 8;
        const expectedRange = [0, 6];
        expect(solution.searchRange(nums, target)).toEqual(expectedRange);
    });
});
