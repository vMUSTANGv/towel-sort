module.exports = function towelSort (matrix) {

  if (matrix === undefined) { 
    const newLocal = [];
      return newLocal
  } else {

  let s = matrix.map((a, i) => i % 2 !== 0 ? a.sort((a, b) => b - a) : a);
  let s1 = [].concat(...s)
  return s1;
  }
}