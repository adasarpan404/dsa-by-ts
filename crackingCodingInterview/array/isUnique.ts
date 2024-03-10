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


const uniqueStr = "abcdefg"

console.log(isBooleanCharsWithDS(uniqueStr))

const nonUniqueStr = "abcdefga"

console.log(isBooleanCharsWithDS(nonUniqueStr))