function abbreviateString(str) {
  const splitNames = str.trim().split(' ');
  const index = splitNames.length;
  if (index > 1) {
    return (`${splitNames[0]} ${splitNames[index - 1].charAt(0).toUpperCase()}.`);
  }
  return splitNames[0];
}

export { abbreviateString };
