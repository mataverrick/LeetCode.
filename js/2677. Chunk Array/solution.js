/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const newArray = [];
  let count = 0;
  let j = 0;

  for (let index = 0; index < arr.length; index += size) {
    const chunk = [];
    j = index;
    count = 0;
    while (count < size) {
      if (arr[j] === undefined) break;
      chunk.push(arr[j]);
      j++;
      count++;
    }
    newArray.push(chunk);
  }

  return newArray;
};

const nums = [1, 2, 3, 4, 5];
const size = 3;

const result = chunk(nums, size);
console.log(result);
