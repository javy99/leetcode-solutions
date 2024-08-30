function longestConsecutive(nums) {
    if (nums.length === 0) return 0;

    // Create a set to store the unique numbers
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of numSet) {
        // Only start counting if 'num' is the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            // Count the length of the current sequence
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            // Update the longest streak found
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

const nums1 = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums1));  // Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4].

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(nums2));  // Output: 9
// Explanation: The longest consecutive sequence is [0, 1, 2, 3, 4, 5, 6, 7, 8].

const nums3 = [10, 5, 12, 3, 55, 30, 11, 13];
console.log(longestConsecutive(nums3));  // Output: 4
// Explanation: The longest consecutive sequence is [10, 11, 12, 13].

const nums4 = [];
console.log(longestConsecutive(nums4));  // Output: 0
// Explanation: The array is empty, so there is no consecutive sequence.

