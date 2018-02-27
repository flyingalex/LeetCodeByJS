const complexNumberMultiply = (aStr, bStr) => {
  const aArr =  /([+-]?\d+)\+([+-]?\d+)(i)/.exec(aStr);
  const bArr =  /([+-]?\d+)\+([+-]?\d+)(i)/.exec(bStr);
  const a = parseInt(aArr[1], 10);
  const b = parseInt(aArr[2], 10);
  const c = parseInt(bArr[1], 10);
  const d = parseInt(bArr[2], 10);
  return `${a*c-b*d}+${a*d+b*c}i`;
};