// Link
// https://leetcode.com/problems/longest-harmonious-subsequence/?envType=problem-list-v2&envId=sliding-window
//
//

// O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {

    var map = new Map();
    var maxL = 0;

    // Count frequency of each number
    for(var num of nums){
      map.set(num,(map.get(num)||0)+1);
    }

    // Combine each num count with num + 1 count 
    // And calc the maxLength

    for(const[num,count] of map){

      if(map.has(num+1)){

        maxL = Math.max(maxL,count + map.get(num+1))
      }
    }
    return maxL;
    
};

