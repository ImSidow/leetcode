function twoSum(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var k = 0; k < nums.length; k++) {
            if (nums[i] + nums[k] === target && i !== k) {
                console.log(nums[i], nums[k]);
                return [i, k];
            }
        }
    }
    return [];
}
console.log(twoSum([3, 2, 4], 6));
