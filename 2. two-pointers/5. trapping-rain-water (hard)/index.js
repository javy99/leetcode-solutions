/**
 * 
 * Two pointers solution, time complexity O(n) and space complexity O(1)
 * @param {number[]} heights
 * @returns {number} maxArea
 */
function getTrappedRainWater(heights) {
    let total = 0;
    let left = 0;
    let right = heights.length - 1;
    let leftMax = 0;
    let rightMax = 0;

    while (left < right) {
        leftMax = Math.max(leftMax, heights[left]);
        rightMax = Math.max(rightMax, heights[right]);

        if (leftMax < rightMax) {
            total += leftMax - heights[left];
            left++;
        } else {
            total += rightMax - heights[right];
            right--;
        }
    }

    return total;
}

console.log(getTrappedRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6

console.log(getTrappedRainWater([4, 2, 0, 3, 2, 5])); // 9

console.log(getTrappedRainWater([0, 1, 2, 3, 4, 5])); // 0

