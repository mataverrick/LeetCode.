/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set();
  let i = 0;

  while (i < nums.length) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);

    i++;
  }

  return false;
};

const nums = [1, 2, 1, 3];
const result = containsDuplicate(nums);

console.log(result);
