import { bubbleSort } from './bubbleSort';
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

