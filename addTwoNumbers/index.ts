// you are given an integer array k whose starting index is 0. In on operation, you can choose an element of the array and add 1 to its value
// return the minimum number of operations necessary to make sure that the ith element of k is always greater in value than i-1
// for example, if k = [1, 2, 3] then one possible solution is to add 1 to the third element, making k = [1, 2, 4]
const change = (k: number[]) => {
    let count = 0;
    for (let i = 1; i < k.length; i++) {
        if (k[i] <= k[i - 1]) {
            const diff = k[i - 1] - k[i] + 1;
            k[i] += diff;
            count += diff;
        }
    }
    return count;
};

console.log(change([2, 2, 2]));
