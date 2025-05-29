/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const newArray = [];

  for (let index = 0; index < arr.length; index += size) {
    newArray.push(arr.slice(index, index + size));
  }

  return newArray;
};

const nums = [1, 2, 3, 4, 5];
const size = 2;

const result = chunk(nums, size);
console.log(result);

let hola = nums.slice(0, 3);
console.log(hola);
