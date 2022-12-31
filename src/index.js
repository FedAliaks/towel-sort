
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0 ) {

    console.log('empty');
    console.log(matrix);
    return [];
  }
  const answer = [];
  for (let i = 0; i < matrix.length; i++) {
    i % 2 === 0 ? answer.push(matrix[i]) : answer.push(matrix[i].reverse());

  }
  return answer.flat();
}
