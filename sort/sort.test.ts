import { bubbleSort } from './bubbleSort';
import { dnfSort } from './dnfSort';
import { insertionSort } from './insertionSort';
import { recursiveBubbleSort } from './recursiveBubbleSort';
import { recursiveInsertionSort } from './recursiveInsertionSort';
import { recursiveSelectionSort } from './recursiveSelectionSort';
import { selectionSort } from './selectionSort';

describe('bubbleSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [5, 3, 8, 1, 2];
        const sortedArray = bubbleSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
    });

    it('should return the same array if it is already sorted', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const sortedArray = bubbleSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly sort a large array', () => {
        const inputArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        const sortedArray = bubbleSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        const sortedArray = bubbleSort(inputArray);
        expect(sortedArray).toEqual([]);
    });
});

describe('selectionSort', () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [5, 3, 8, 1, 2];
        const sortedArray = selectionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
    });

    it('should return the same array if it is already sorted', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const sortedArray = selectionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly sort a large array', () => {
        const inputArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        const sortedArray = selectionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        const sortedArray = selectionSort(inputArray);
        expect(sortedArray).toEqual([]);
    });
})

describe("insertion sort", () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [5, 3, 8, 1, 2];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
    });

    it('should return the same array if it is already sorted', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly sort a large array', () => {
        const inputArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        const sortedArray = insertionSort(inputArray);
        expect(sortedArray).toEqual([]);
    });
})

describe("recursiveBubbleSort", () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [5, 3, 8, 1, 2];
        const sortedArray = recursiveBubbleSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
    });

    it('should return the same array if it is already sorted', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const sortedArray = recursiveBubbleSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly sort a large array', () => {
        const inputArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        const sortedArray = recursiveBubbleSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        const sortedArray = recursiveBubbleSort(inputArray);
        expect(sortedArray).toEqual([]);
    });
})

describe("recursiveSelectionSort", () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [5, 3, 8, 1, 2];
        const sortedArray = recursiveSelectionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
    });

    it('should return the same array if it is already sorted', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const sortedArray = recursiveSelectionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly sort a large array', () => {
        const inputArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        const sortedArray = recursiveSelectionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        const sortedArray = recursiveSelectionSort(inputArray);
        expect(sortedArray).toEqual([]);
    });
})

describe("recursiveInsertionSort", () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [5, 3, 8, 1, 2];
        const sortedArray = recursiveInsertionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 5, 8]);
    });

    it('should return the same array if it is already sorted', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const sortedArray = recursiveInsertionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5]);
    });

    it('should correctly sort a large array', () => {
        const inputArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
        const sortedArray = recursiveInsertionSort(inputArray);
        expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        const sortedArray = recursiveInsertionSort(inputArray);
        expect(sortedArray).toEqual([]);
    });
})

describe("Dutch National Flag Sort (dnf)", () => {
    it('should sort an array of numbers in ascending order', () => {
        const inputArray = [0, 1, 2, 1, 0]
        const sortedArray = dnfSort(inputArray)
        expect(sortedArray).toEqual([0, 0, 1, 1, 2])
    })

    it('should return the same array if it is already sorted', () => {
        const inputArray = [0, 0, 1, 1, 2]
        const sortedArray = dnfSort(inputArray)
        expect(sortedArray).toEqual([0, 0, 1, 1, 2])
    })

    it('should correctly sort a large array', () => {
        const inputArray = [0, 0, 1, 1, 0, 0, 2, 2, 1, 1];
        const sortedArray = recursiveInsertionSort(inputArray);
        expect(sortedArray).toEqual([0, 0, 0, 0, 1, 1, 1, 1, 2, 2]);
    });

    it('should handle an empty array', () => {
        const inputArray: number[] = [];
        const sortedArray = recursiveInsertionSort(inputArray);
        expect(sortedArray).toEqual([]);
    });
})