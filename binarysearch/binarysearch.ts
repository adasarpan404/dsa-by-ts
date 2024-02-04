function binarySearch(a: number[], search: number): number {
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

const a: number[] = [10, 20, 30, 40, 50, 60];
const pos1: number = binarySearch(a, 40);
console.log(pos1 !== -1 ? `Element found at position ${pos1 + 1}` : "Element not found");

const pos2: number = binarySearch(a, 45);
console.log(pos2 !== -1 ? `Element found at position ${pos2 + 1}` : "Element not found");