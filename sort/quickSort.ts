function partition(arr: number[], low: number, high: number): number {
    const pivot: number = arr[low];
    let i: number = low;
    let j: number = high;
    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j] > pivot && j >= low - 1) {
            j--;
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
    [arr[low], arr[j]] = [arr[j], arr[low]]; // Swap pivot with element at j
    return j;
}

export function quickSort(arr: number[], low: number = 0, high: number = arr.length - 1): void {
    if (low < high) {
        const pIndex: number = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}

