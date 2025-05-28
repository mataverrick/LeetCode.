/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const sLen = s.length;
  const tLen = t.length;

  if (sLen !== tLen) return false;

  const map = new Map();

  for (const element of s) {
    map.set(element, (map.get(element) || 0) + 1);
  }

  for (const element of t) {
    if (!map.has(element)) {
      return false;
    }

    // console.log(map)

    map.set(element, map.get(element) - 1);

    if (map.get(element) < 0) return false;
  }

  return true;
};

const s = "anagram";
const t = "nagaraa";

const result = isAnagram(s, t);

console.log(result);
