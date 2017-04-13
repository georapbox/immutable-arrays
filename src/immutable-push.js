/**
 * Adds one or more elements to the end of an array by returning
 * a new array instead of mutating the original one.
 *
 * @param {Array} array The original array.
 * @param {*} elementN The elements to add to the end of the array.
 * @return {Array} A new array with the new entries added to the end.
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutablePush(originalArray, 'f', 'g');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'd', 'e', 'f', 'g']
 */
export default function immutablePush(array, ...elementN) {
  return [...array, ...elementN];
}
