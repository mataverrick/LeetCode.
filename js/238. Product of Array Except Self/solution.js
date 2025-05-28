/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let prefix = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    let p = prefix[i - 1];
    let d = nums[i -1];

    prefix[i] = prefix[i - 1] * nums[i - 1];
  }

  console.log(prefix);
};

const nums = [1, 2, 3, 4];
//prefix 1 1 2 6
productExceptSelf(nums);
