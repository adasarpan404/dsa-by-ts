export function recursiveBubbleSort(arr: number[], n: number = arr.length): number[] {
    if (n == 1) {
        return arr;
    }
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }
    return recursiveBubbleSort(arr, n - 1);
}