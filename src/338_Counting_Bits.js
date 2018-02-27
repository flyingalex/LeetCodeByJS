// 338

const countBits = (num) => {
  const f = Array.from(Array(num + 1), () => 0);
  for (let i = 1; i <= num; i++) {
    f[i] = f[i >> 1] + i & 1;
  }
  return f;
}


