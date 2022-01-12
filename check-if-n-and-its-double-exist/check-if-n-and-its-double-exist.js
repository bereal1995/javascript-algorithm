/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const set = new Set();
    
    for(let i = 0; i < arr.length; i ++) {
      const nowValue = arr[i];
      
      if(set.has(nowValue)) {
          return true
      }
      set.add(nowValue / 2);
      set.add(nowValue * 2);
    }
  
    return false;
};