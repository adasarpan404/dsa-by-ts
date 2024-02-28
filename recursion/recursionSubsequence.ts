export function printAllSubsets(currentIndex: number, currentSubset: number[], array: number[], size: number): number[][] {
    const subsets: number[][] = [];

    if (currentIndex === size) {
        subsets.push([...currentSubset]);
        return subsets;
    }

    currentSubset.push(array[currentIndex]);
    subsets.push(...printAllSubsets(currentIndex + 1, currentSubset, array, size));

    currentSubset.pop();
    subsets.push(...printAllSubsets(currentIndex + 1, currentSubset, array, size));

    return subsets;
}
