/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  for (const value of nums) {
    map.set(value, (map.get(value) || 0) + 1);
  }

  const array = Array.from(map);
  array.sort((a, b) => b[1] - a[1]);

//   console.log(array)
  let finalArray = [];

  for (let i = 0; i < k; i++) {
    finalArray.push(array[i][0]);
  }

  return finalArray;
};

const nums = [1, 1, 1, 2, 2,3];
const k = 2;

console.log(topKFrequent(nums, k));
