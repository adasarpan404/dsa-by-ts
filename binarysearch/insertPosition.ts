export function insertPosition(nums: number[], target: number): number {
    let low: number = 0, high = nums.length;
    if (target > nums[high - 1]) {
        return high;
    }
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] == target) {
            return mid;
        }

        if (target < nums[mid])
            high = mid - 1;
        else
            low = mid + 1;

    }
    return low;
}
