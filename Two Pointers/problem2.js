
// Link to the problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// O(n) time complexity


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    var first = 0;

    for(var second = 0;second < nums.length; second++) {
        
         if(nums[first] !== nums[second]) {
            first++;
            nums[first] = nums[second];
        }
    }


    return first + 1;
    
};


var nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums)); // 2