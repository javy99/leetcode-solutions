/**
 * 3Sum (Medium)
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?
 * @param {number[]} nums
 * @returns {number[][]}
 */

function threeSum(nums) {
    let res = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            let total = nums[i] + nums[j] + nums[k];

            if (total > 0) {
                k--;
            } else if (total < 0) {
                j++;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                j++;

                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            }
        }
    }
    return res;
};

// Test case 1
console.log(threeSum([-1, 0, 1, 2, -1, -4]));  // Output: [[-1, -1, 2], [-1, 0, 1]]

// Test case 2
console.log(threeSum([]));  // Output: []

// Test case 3
console.log(threeSum([0]));  // Output: []

// Test case 4
console.log(threeSum([0, 0, 0, 0]));  // Output: [[0, 0, 0]]
