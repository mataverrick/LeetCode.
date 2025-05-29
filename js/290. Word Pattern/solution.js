/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const map = new Map();
  const set = new Set();

  let array = s.split(" ");
  const n = pattern.length;

  if (array.length != n) return false;

  for (let i = 0; i < n; i++) {
    const key = pattern[i];
    const value = array[i];

    if (!map.has(key)) {
      if (!set.has(value)) {
        map.set(key, value);
        set.add(value);
      } else {
        return false;
      }
    }

    if (map.get(key) != value) return false;
  }

  return true;
};

const pattern = "aaa";
const s = "aaa aaa aaa aaa";

const result = wordPattern(pattern, s);

console.log(result);
