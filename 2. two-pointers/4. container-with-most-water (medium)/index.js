/**
 * Max Water Container (medium)
 * Brute force solution, time complexity O(n^2) and space complexity O(1)
 * @param {number[]} heights 
 * @returns {number} maxArea
 */
/*
function maxArea(heights) {
    let maxArea = 0;

    for (let p1 = 0; p1 < heights.length; p1++) {
        for (let p2 = p1 + 1; p2 < heights.length; p2++) {
            const height = Math.min(heights[p1], heights[p2]);
            const width = p2 - p1;
            const area = height * width;
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};
*/

/**
 * Max Water Container (medium)
 * Two pointers solution, time complexity O(n) and space complexity O(1)
 * @param {number[]} heights
 * @returns {number} maxArea
 */
function maxArea(heights) {
    let p1 = 0, p2 = heights.length - 1;

    while (p1 < p2) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }

    return maxArea;
}

// Test case 1
console.log(maxArea([1, 7, 2, 5, 4, 7, 3, 6]));

// Test case 2
console.log(maxArea([2, 2, 2]));

// Test case 3
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));

// Test case 4
console.log(maxArea([])); 
