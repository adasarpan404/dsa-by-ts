function isPerfectSquare(num: number): boolean {
    let low: number = 1;
    let high: number = num;
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        let midSquared = mid * mid;

        if (midSquared === num) return true;
        if (midSquared < num)
            low = mid + 1;
        else
            high = mid - 1;
    }
    return false;
}

console.log(isPerfectSquare(9) ? "It is Perfect Square" : "It is not Perfect Square")
console.log(isPerfectSquare(17) ? "It is Perfect Square" : "It is not Perfect Square")
console.log(isPerfectSquare(25) ? "It is Perfect Square" : "It is not Perfect Square")
