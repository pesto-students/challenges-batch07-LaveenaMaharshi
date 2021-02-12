function sumFibs(num) {
  let fib0 = 0;
  let fib1 = 1;
  let fib = 1;
  let sum = fib0;
  while (fib <= num) {
    if (fib % 2) {
      sum += fib1;
    }
    fib = fib0 + fib1;
    fib1 += fib0;
    fib0 = fib1 - fib0;
  }

  return sum;
}

function cacheFunction(sumFib) {
  const memo = {};
  const result = (n) => {
    if (n in memo) {
      return memo[n];
    }
    memo[n] = sumFib[n];
    return memo[n];
  };
  return result;
}

export { sumFibs, cacheFunction };
