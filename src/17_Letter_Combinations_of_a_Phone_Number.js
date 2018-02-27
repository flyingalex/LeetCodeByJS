/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') return [];
  kvmaps = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  }
  return digits.split('').reduce((strArr, key) => {
    const result = [];
    for (let start of kvmaps[key]) {
      if (strArr.length === 0) {
        result.push(start);
      } else {
        for (let end of strArr) {
          result.push(end + start);
        }
      }
    }
    return result;
  }, []);
};