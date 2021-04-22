const devel = (a = 0, b = 0, arr = []) => {
  const sum = a + b;
  const testArr = [1, 2, 3];
  let spArr = testArr.concat(arr);
  console.log(`devel, sum : ${sum}, 배열 첫번째: ${spArr[0]}`);
};
