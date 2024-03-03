export class FirstAndLastPositions {
    private binarySearch(nums: number[], target: number): number {
        let start = 0, end = nums.length - 1;
        while (start <= end) {
            let mid = Math.floor(start + (end - start) / 2);
            if (target === nums[mid]) {
                return mid;
            }
            if (target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }

    public searchRange(nums: number[], target: number): number[] {
        let searchPosition = this.binarySearch(nums, target);
        let a: number[] = [searchPosition, searchPosition];
        while (a[0] > 0 && nums[a[0] - 1] === target) {
            a[0]--;
        }
        while (a[1] < nums.length - 1 && nums[a[1] + 1] === target) {
            a[1]++;
        }
        return a;
    }
}
