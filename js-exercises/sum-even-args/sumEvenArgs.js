const sumEvenArgs = (...args) => {
  const numbersArray = args;
  let sumOfEvenNumbers = 0;
  for (let i = 0; i < numbersArray.length; i += 1) {
    if (numbersArray[i] % 2 === 0) {
      sumOfEvenNumbers += numbersArray[i];
    }
  }
  return sumOfEvenNumbers;
};

export { sumEvenArgs };
