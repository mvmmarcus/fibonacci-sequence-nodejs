"use strict";

const fibonacci = () => {
  let beforeNum = 0;
  let actualNum = 1;
  let nextNum = 1;

  const fibNumbers = [];

  for (let i = 0; i < 2; i++) {
    if (i === 0 || i === 1) fibNumbers.push(i);
  }
  while (nextNum < 350) {
    fibNumbers.push(nextNum);
    beforeNum = actualNum + nextNum;
    actualNum = nextNum;
    nextNum = beforeNum;
  }

  return fibNumbers;
};

const isFibonnaci = (num) => {
  const fibNumbers = fibonacci();

  const response = fibNumbers.filter((item) => item === num);

  const result = response.length > 0 ? true : false;
  console.log(result);
  console.log(fibNumbers);

  return result;
};

module.exports = {
  fibonacci,
  isFibonnaci,
};
