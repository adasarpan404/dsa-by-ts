export function selectionSort(arr: number[]): number[] {
    const length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            // Swap elements
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}
