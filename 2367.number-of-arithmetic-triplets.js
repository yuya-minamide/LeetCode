/**
 * URL of this problem
 * https://leetcode.com/problems/number-of-arithmetic-triplets/submissions/
 */

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let numberOfCounte = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i +1; j < nums.length; j++) {
            if (nums[j] - nums[i] === diff) {
                for (let k = j + 1; k < nums.length; k++) {
                    if (nums[k] - nums[j] === diff) {
                        numberOfCounte++
                    }
                }
            }
        }
    }
    return numberOfCounte;
};