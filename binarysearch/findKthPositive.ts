export function findKthPositive(nums: number[], k: number): number {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] - (mid + 1) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left + k;
}