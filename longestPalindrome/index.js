let str = "babad";
function longestPalindrome(s) {
    let palindromes = [];
    for (let i = 0; i < s.length; i++) {
        let palindromeText = s[i];
        for (let k = i; k < s.length; k++) {
            if (i !== k) {
                palindromeText += s[k];
                if (palindromeText === textBackward(palindromeText)) {
                    palindromes.push(palindromeText);
                }
            }
        }
    }
    if (palindromes.length === 0)
        return s[0];
    return palindromes.sort((a, b) => b.length - a.length)[0];
}
;
function textBackward(str) {
    return str.split('').reverse().join('');
}
console.log(longestPalindrome(str));
