/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();
  let i = 0;

  while(i < nums.length){
    const searched = target - nums[i]

    if(map.has(searched)){
        return [map.get(searched),i]
    }

    map.set(nums[i],i);
    i++;
  }
};

const nums = [2, 7, 11, 15];
const result = twoSum(nums, 18);

console.log(result);
