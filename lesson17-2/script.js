'use strict';

const getResult = (a, b) => {
  let num = Math.pow(a, b);
  let res = String(num).split('').reduce((sum, num) => sum + (+num), 0);
  console.log(res);
};
getResult(4, 8);