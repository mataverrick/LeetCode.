/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const n = s.length;

  if (n === 1) return 1;

  let maxL = 0;
  let left = 0;
  let right = 1;
  let set = new Set();

  while (left <= n && right < n) {
    const difference = right - left;
    maxL = Math.max(maxL, difference);

    if (s[left] === s[right] || set.has(s[right])) {
      left++;
      right = left
      set = new Set();
    } else {
      maxL = Math.max(maxL, difference + 1);
      set.add(s[right]);
    }
    right++;
  }

  return maxL;
};

const s = "aa";
const result = lengthOfLongestSubstring(s);

console.log(result);
