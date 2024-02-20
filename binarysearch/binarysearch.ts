export function binarySearch(a: number[], search: number): number {
    let low: number = 0;
    let high: number = a.length - 1;
    while (low <= high) {
        let mid: number = low + Math.floor((high - low) / 2);
        if (a[mid] === search) return mid;
        if (a[mid] > search) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
