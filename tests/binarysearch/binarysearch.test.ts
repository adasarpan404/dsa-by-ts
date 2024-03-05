import { binarySearch } from "../../binarysearch/binarysearch";
import { findKthPositive } from "../../binarysearch/findKthPositive";
import { findPeakElement } from "../../binarysearch/findPeakElement";
import { FirstAndLastPositions } from "../../binarysearch/firstAndLastPositions";
import { insertPosition } from "../../binarysearch/insertPosition";
import { isPerfectSquare } from "../../binarysearch/isPerfectSquare";
import { findMissingNumber } from "../../binarysearch/missingNumber";
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

describe('peak element', () => {
    it('should return 3', () => {
        const nums = [1, 2, 3, 1]
        const peakElement = findPeakElement(nums)
        expect(peakElement).toBe(3)
    })
})

describe('Solution', () => {
    let solution: SearchInRotatedArray;

    beforeEach(() => {
        solution = new SearchInRotatedArray();
    });

    it('should find the index of target element in a sorted rotated array', () => {
        const nums = [4, 5, 6, 7, 0, 1, 2];
        expect(solution.search(nums, 0)).toBe(4);
    });

    it('should return -1 if target element is not present in the array', () => {
        const nums = [4, 5, 6, 7, 0, 1, 2];
        expect(solution.search(nums, 3)).toBe(-1);
    });

    it('should return -1 if array is empty', () => {
        const nums: number[] = [];
        expect(solution.search(nums, 5)).toBe(-1);
    });

    it('should return the index of the target element in a sorted array', () => {
        const nums = [1, 3, 5, 7, 9];
        expect(solution.search(nums, 3)).toBe(1);
    });
});

describe('k-th positive', () => {
    it('should return the k-th missing positive integer', () => {
        const nums = [2, 3, 4, 7, 11];
        const k = 5;
        expect(findKthPositive(nums, k)).toBe(9);
    });

    it('should return the k-th missing positive integer when k is 1', () => {
        const nums = [1, 2, 3, 4, 5];
        const k = 1;
        expect(findKthPositive(nums, k)).toBe(6);
    });

    it('should return the k-th missing positive integer when k is greater than the missing integers count', () => {
        const nums = [1, 2, 3];
        const k = 5;
        expect(findKthPositive(nums, k)).toBe(7);
    });

    it('should return the k-th missing positive integer when nums contains duplicate values', () => {
        const nums = [2, 2, 3, 4, 7, 11];
        const k = 5;
        expect(findKthPositive(nums, k)).toBe(9);
    });
});


describe('findMissingNumber', () => {
    it('should return the smallest missing positive integer', () => {
        const nums = [0, 1, 2, 4, 5]; // The smallest missing positive integer is 3
        expect(findMissingNumber(nums)).toBe(3);
    });

    it('should return 1 if the array is empty', () => {
        const nums: number[] = [];
        expect(findMissingNumber(nums)).toBe(1);
    });

    it('should return the smallest missing positive integer when the array contains negative numbers', () => {
        const nums = [-1, -2, 0, 1, 2, 4, 5]; // The smallest missing positive integer is 3
        expect(findMissingNumber(nums)).toBe(3);
    });

    it('should return the smallest missing positive integer when the array contains duplicate values', () => {
        const nums = [0, 1, 1, 2, 2, 4, 4, 5]; // The smallest missing positive integer is 3
        expect(findMissingNumber(nums)).toBe(3);
    });

    it('should return the smallest missing positive integer when the array contains only negative numbers', () => {
        const nums = [-5, -4, -3, -2, -1]; // The smallest missing positive integer is 1
        expect(findMissingNumber(nums)).toBe(1);
    });

    it('should return the smallest missing positive integer when the array contains only non-positive numbers', () => {
        const nums = [-2, 0, 0, 0]; // The smallest missing positive integer is 1
        expect(findMissingNumber(nums)).toBe(1);
    });
});

