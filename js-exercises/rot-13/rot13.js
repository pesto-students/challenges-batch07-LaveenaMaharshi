function rot13(s) {
  const str = s.replace(/[A-Z]/gi, c => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'['ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.indexOf(c)]);
  return str;
}

export {
  rot13,
};
