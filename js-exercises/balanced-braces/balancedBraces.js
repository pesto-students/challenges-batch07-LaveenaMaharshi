function balancedBraces(string) {
  const resultArr = [];
  const matchBraces = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  for (const char of string) {
    const openBraces = ['(', '{', '['];
    const closeBraces = [')', '}', ']'];
    if (openBraces.includes(char)) {
      resultArr.push(char);
    } else if (closeBraces.includes(char)
    && char === matchBraces[resultArr[resultArr.length - 1]]) {
      resultArr.pop();
    }
  }
  return resultArr.length === 0;
}

export {
  balancedBraces,
};
