function containsDuplicate(nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

/*
function containsDuplicate(nums) {
    const seen = {};
    for (const num of nums) {
        if (seen[num]) {
            return true;
        }
        seen[num] = true;
        }
    return false;
}
*/

/*
function containsDuplicate(nums) {
  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }

  return false;
}
*/

let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
