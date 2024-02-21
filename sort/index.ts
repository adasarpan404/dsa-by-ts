import { bubbleSort } from "./bubbleSort"
import { insertionSort } from "./insertionSort"
import { recursiveBubbleSort } from "./recursiveBubbleSort"
import { recursiveInsertionSort } from "./recursiveInsertionSort"
import { recursiveSelectionSort } from "./recursiveSelectionSort"
import { selectionSort } from "./selectionSort"

const arr = [5, 3, 8, 1, 2]

let sortArr = bubbleSort(arr)

console.log("Sorting after bubble sort", sortArr)

sortArr = insertionSort(arr)

console.log("Sorting after insertion sort", sortArr)

sortArr = selectionSort(arr)

console.log("Sorting after selection sort", sortArr)

sortArr = recursiveBubbleSort(arr)

console.log("Sorting after recursive bubble sort", sortArr)

sortArr = recursiveSelectionSort(arr)

console.log("Sorting after recursive selection sort", sortArr)

sortArr = recursiveInsertionSort(arr)

console.log("Sorting after recursive insertion sort", sortArr)