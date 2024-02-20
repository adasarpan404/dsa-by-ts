export function sqrt(num: number): number {
    if (num === 0) return 0;
    let left: number = 0, right: number = num, ans: number = 0;
    while (left <= right) {
        let mid = left + (right - left) / 2;
        let midSquared = Math.floor(mid) * Math.floor(mid);

        if (midSquared <= num) {
            left = mid + 1;
            ans = mid;
        } else {
            right = mid - 1;
        }
    }

    return Math.floor(ans);
}


