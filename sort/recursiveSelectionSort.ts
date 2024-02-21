export function recursiveSelectionSort(arr: number[], startIndex: number = 0): number[] {
    if (startIndex >= arr.length - 1) {
        return arr;
    }
    let minIndex = startIndex;

    for (let i = startIndex + 1; i < arr.length; i++) {
        if (arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    if (minIndex !== startIndex) {
        [arr[startIndex], arr[minIndex]] = [arr[minIndex], arr[startIndex]];
    }
    return recursiveSelectionSort(arr, startIndex + 1);
}
