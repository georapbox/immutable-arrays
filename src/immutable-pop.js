/**
 * Removes the last element from an array by returning
 * a new array instead of mutating the original one.
 *
 * @param {Array} array The original array.
 * @return {Array} A new array with the last element removed.
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutablePop(originalArray);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'd']
 */
export default function immutablePop(array) {
  return array.slice(0, -1);
}
