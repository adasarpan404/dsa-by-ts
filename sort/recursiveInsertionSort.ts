export function recursiveInsertionSort(arr: number[], n: number = arr.length): number[] {
    if (n <= 1) {
        return arr;
    }

    recursiveInsertionSort(arr, n - 1);

    const lastElement = arr[n - 1];
    let j = n - 2;

    while (j >= 0 && arr[j] > lastElement) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = lastElement;

    return arr;
}