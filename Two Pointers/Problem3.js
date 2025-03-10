// URL: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/?envType=problem-list-v2&envId=two-pointers

// Time complexity: O(n)
// Space complexity: O(1)
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle);
};

var haystack = "leetcode", needle = "leeto";
console.log(strStr(haystack, needle)); // 2