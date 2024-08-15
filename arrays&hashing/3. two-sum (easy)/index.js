function twoSum(nums, target) {
  const numToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i];
    }
    numToIndex.set(nums[i], i);
  }
  return [];
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
