function duplicateLetters(...args) {
  let name;
  const names = args[0];
  const map = new Map();
  let max = 1;
  for (name of names) {
    if (map.get(name) === undefined) {
      map.set(name, 1);
    } else {
      let count = map.get(name);
      count += 1;
      map.set(name, count);
      if (max < count) {
        max = count;
      }
    }
  }
  return (max >= 2 ? max : false);
}

export {
  duplicateLetters,
};
