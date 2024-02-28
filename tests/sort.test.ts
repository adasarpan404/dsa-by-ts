import { bubbleSort } from '../sort/bubbleSort';
import { dnfSort } from '../sort/dnfSort';
import { insertionSort } from '../sort/insertionSort';
import { mergeSort } from '../sort/mergeSort';
import { quickSort } from '../sort/quickSort';
import { recursiveBubbleSort } from '../sort/recursiveBubbleSort';
import { recursiveInsertionSort } from '../sort/recursiveInsertionSort';
import { recursiveSelectionSort } from '../sort/recursiveSelectionSort';
import { selectionSort } from '../sort/selectionSort';

describe("Sorting test", () => {
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
            const sortedArray = dnfSort(inputArray);
            expect(sortedArray).toEqual([0, 0, 0, 0, 1, 1, 1, 1, 2, 2]);
        });

        it('should handle an empty array', () => {
            const inputArray: number[] = [];
            const sortedArray = dnfSort(inputArray);
            expect(sortedArray).toEqual([]);
        });
    })

    describe("Merge Sort", () => {
        it('should sort an array of numbers in ascending order', () => {
            const inputArray = [5, 3, 8, 1, 2];
            mergeSort(inputArray);
            expect(inputArray).toEqual([1, 2, 3, 5, 8]);
        });

        it('should return the same array if it is already sorted', () => {
            const inputArray = [1, 2, 3, 4, 5];
            mergeSort(inputArray);
            expect(inputArray).toEqual([1, 2, 3, 4, 5]);
        });

        it('should correctly sort a large array', () => {
            const inputArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
            mergeSort(inputArray);
            expect(inputArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('should handle an empty array', () => {
            const inputArray: number[] = [];
            mergeSort(inputArray);
            expect(inputArray).toEqual([]);
        });
    })

    describe("Quick Sort", () => {
        it('should sort an array of numbers in ascending order', () => {
            const inputArray = [5, 3, 8, 1, 2];
            quickSort(inputArray);
            expect(inputArray).toEqual([1, 2, 3, 5, 8]);
        });

        it('should return the same array if it is already sorted', () => {
            const inputArray = [1, 2, 3, 4, 5];
            quickSort(inputArray);
            expect(inputArray).toEqual([1, 2, 3, 4, 5]);
        });

        it('should correctly sort a large array', () => {
            const inputArray = [9, 8, 7, 6, 5, 4, 3, 2, 1];
            quickSort(inputArray);
            expect(inputArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('should handle an empty array', () => {
            const inputArray: number[] = [];
            quickSort(inputArray);
            expect(inputArray).toEqual([]);
        });
    })

})