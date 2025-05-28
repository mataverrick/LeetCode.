/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let obj = {};
  let i = 0;
  const len = strs.length

  while(i < len){
    const value = strs[i].split('').sort().join('')
    console.log(value)

    if(!Object.hasOwn(obj,value)){
        obj[value] = [strs[i]]
    }else{
        obj[value].push(strs[i])
    }

    i++;
  }
  
  return Object.values(obj)

};

const strs = ["eat"];
const result = groupAnagrams(strs);

console.log(result)