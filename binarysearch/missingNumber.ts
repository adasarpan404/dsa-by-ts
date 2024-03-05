export function missingNumber(nums: number[]): number {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > mid) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}