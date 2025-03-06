// Link
// https://leetcode.com/problems/contains-duplicate-ii/?envType=problem-list-v2&envId=sliding-window
//

//    ASHRAF
//

// O(n)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   let segment = new Set();

   for(let i = 0; i < nums.length; i++){

        if ( segment.has(nums[i])) return true;

        segment.add(nums[i]);

        // Now let's check out if the segment is full because it just can 
        // carry k+1

        if( segment.size >= k+1){
            let firstElement = segment.values().next().value;
            segment.delete(firstElement);
        }
   } 
   return false;
};

