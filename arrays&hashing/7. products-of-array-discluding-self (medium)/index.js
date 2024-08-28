function productExceptSelf(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);

    // First pass: Calculate left products
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Second pass: Calculate right products and update answer
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    // Convert -0 to 0 if necessary
    return answer.map(value => (Object.is(value, -0) ? 0 : value));
}

const nums1 = [1, 2, 3, 4];
console.log(productExceptSelf(nums1));

const nums2 = [-1, 1, 0, -3, 3];
console.log(productExceptSelf(nums2)); // Expected output: [0, 0, 9, 0, 0]
