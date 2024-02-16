function insertionSort(arr: number[]): number[] {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let current = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

let insertionSortArr = [3, 4, 5, 1, 2]

insertionSortArr = insertionSort(insertionSortArr)

console.log(insertionSortArr)