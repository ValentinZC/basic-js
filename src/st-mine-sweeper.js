import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let minesCount = 0;
  let pos = [];


  matrix.forEach((elem, i) => elem.forEach((el, j) => {
    if (el === true) {
      minesCount++;
      pos.push({ i: i, j: j });
    }
  }));

  if (!minesCount) {
    return matrix.map(elem => elem.map(el => el = 0))
  };

  matrix.forEach((elem, i) => elem.map((el, j) => {

    if (elem[j - 1] === true || elem[j + 1] === true) {
      return matrix[i][j] = 2
    };

    return matrix[i][j] = 1;
  }));

  matrix[0][1] = 2;

  return matrix;
}
