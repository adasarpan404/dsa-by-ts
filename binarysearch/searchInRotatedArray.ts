export class SearchInRotatedArray {
    private binarySearch(nums: number[], target: number, start: number, end: number): number {
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2)
            if (nums[mid] === target) {
                return mid;
            }
            if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }
    private pivot(nums: number[]): number {
        let start = 0;
        let end = nums.length - 1;
        while (start <= end) {
            let mid = start + Math.floor((end - start) / 2);
            if (mid < end && nums[mid] > nums[mid + 1]) {
                return mid;
            }
            if (mid > start && nums[mid] < nums[mid - 1]) {
                return mid - 1;
            }
            if (nums[mid] <= nums[start]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return -1;
    }

    public search(nums: number[], target: number): number {
        let pivotElement = this.pivot(nums);
        if (pivotElement === -1) {
            return this.binarySearch(nums, target, 0, nums.length - 1);
        }
        if (nums[pivotElement] === target) {
            return pivotElement;
        }
        if (target >= nums[0]) {
            return this.binarySearch(nums, target, 0, pivotElement - 1);
        }
        return this.binarySearch(nums, target, pivotElement + 1, nums.length - 1);
    }
}