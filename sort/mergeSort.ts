function merge(arr: number[], low: number, mid: number, high: number): void {
    const temp: number[] = [];
    let left: number = low;
    let right: number = mid + 1;
    while (left <= mid && right <= high) {
        if (arr[left] < arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

export function mergeSort(
    arr: number[],
    low: number = 0,
    high: number = arr.length - 1
): void {
    if (low >= high) return;
    const mid: number = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
}
