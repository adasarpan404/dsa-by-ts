function isBooleanCharsWithDS(str: string): boolean {
    let chars = new Set();

    for (let i = 0; i < str.length; i++) {
        if (chars.has(str[i])) {
            return false;
        }
        chars.add(str[i]);
    }
    return true;
}

function isBooleanCharsWithOutDS(str: string): boolean {
    let checker = 0;
    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i) - 'a'.charCodeAt(0);
        if ((checker & (1 << val)) > 0) {
            return false;
        }
        checker |= (1 << val);
    }
    return true;
}

const uniqueStr = "abcdefg"

console.log(isBooleanCharsWithDS(uniqueStr))

const nonUniqueStr = "abcdefga"

console.log(isBooleanCharsWithDS(nonUniqueStr))


console.log(isBooleanCharsWithOutDS(uniqueStr))


console.log(isBooleanCharsWithOutDS(nonUniqueStr))