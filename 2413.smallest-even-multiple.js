/**
 * URL of this problem
 * https://leetcode.com/problems/smallest-even-multiple/
 */

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if (n % 2 !== 0) {     
        return n * 2;      
    } else {        
        return n;
    }
};