/**
 * Removes the first element from an array.
 *
 * @param {Array} array The original array.
 * @return {Array} A new array with the first element removed.
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableShift(originalArray);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['b', 'c', 'd', 'e']
 */
export default function immutableShift(array) {
  return array.slice(1);
}
