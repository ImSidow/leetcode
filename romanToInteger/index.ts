function romanToInteger(s: string): number {
    let roman = s;

    let romanChar = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        let char = '';
        if (i + 1 < roman.length) {
            char = roman[i] + roman[i + 1];
            if (romanChar[char]) {
                result += romanChar[char];
                i++;
            } else result += romanChar[roman[i]];
        } else {
            result += romanChar[roman[i]];
        }
    }

    return result;
}

console.log(romanToInteger('LVIII'));
console.log(romanToInteger('MCMXCIV'));
