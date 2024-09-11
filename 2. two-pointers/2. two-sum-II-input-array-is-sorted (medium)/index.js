/**
 *  Given an array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.
 * @param { number[] } numbers 
 * @param {number} target 
 * @returns {number[]}
 */

function twoSum(numbers, target) {
    let left = 0;  // Left pointer starts at the beginning
    let right = numbers.length - 1;  // Right pointer starts at the end

    while (left < right) {
        let sum = numbers[left] + numbers[right];  // Calculate sum of the two numbers

        if (sum === target) {
            // Since the problem is 1-indexed, we return left+1 and right+1
            return [left + 1, right + 1];
        } else if (sum < target) {
            // Move left pointer to the right to increase the sum
            left++;
        } else {
            // Move right pointer to the left to decrease the sum
            right--;
        }
    }
};

// Test case 1
console.log(twoSum([2, 7, 11, 15], 9));  // Output: [1, 2]

// Test case 2
console.log(twoSum([2, 3, 4], 6));  // Output: [1, 3]

// Test case 3
console.log(twoSum([-1, 0], -1));  // Output: [1, 2]