/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== i) {
      return i;
    }
    i++;
  }

  return (nums[n - 1]) + 1;
};

const nums = [2, 1];
const result = missingNumber(nums);

console.log(result);
