export function findMissingNumber(nums: number[]): number {
    let left = 0;
    let right = nums.length;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === mid + 1) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left + 1;
}
