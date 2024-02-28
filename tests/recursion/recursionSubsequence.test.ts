import { printAllSubsets } from "../../recursion/recursionSubsequence";

// Jest test code
// Assuming your function is in a file called yourFile.ts

describe('printAllSubsets', () => {
    it('should print all subsets of an array', () => {
        const array = [1, 2, 3];
        const expectedSubsets = [
            [],
            [1],
            [2],
            [1, 2],
            [3],
            [1, 3],
            [2, 3],
            [1, 2, 3]
        ];

        const actualSubsets = printAllSubsets(0, [], array, array.length);
        expect(actualSubsets).toEqual(expectedSubsets);
    });

    it('should return an empty array for an empty input array', () => {
        const array: number[] = [];
        const expectedSubsets: number[][] = [[]];

        const actualSubsets = printAllSubsets(0, [], array, array.length);
        expect(actualSubsets).toEqual(expectedSubsets);
    });

    it('should handle arrays with duplicate elements', () => {
        const array = [1, 2, 2];
        const expectedSubsets = [
            [],
            [1],
            [2],
            [1, 2],
            [2, 2],
            [1, 2, 2]
        ];

        const actualSubsets = printAllSubsets(0, [], array, array.length);
        expect(actualSubsets).toEqual(expectedSubsets);
    });
});

