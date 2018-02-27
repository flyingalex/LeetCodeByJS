const convert = function(s, nRows) {
    if(nRows <= 1) return s;
    let result = "";
    //the size of a cycle(period)
    let cycle = 2 * nRows - 2;
    for(let i = 0; i < nRows; ++i)
    {
      for(let j = i; j < s.length; j = j + cycle){
       result = result + s[j];
       let secondJ = (j - i) + cycle - i;
       if(i != 0 && i != nRows-1 && secondJ < s.length)
           result = result + s[secondJ];
      }
    }
    return result;
};