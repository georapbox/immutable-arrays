/**
 * Reverses an array (not in place).
 * The first array element becomes the last, and the last array element becomes the first.
 *
 * @param {Array} array The original array.
 * @return {Array} A new array reversed.
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableReverse(originalArray);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['e', 'd', 'c', 'b', 'a']
 */
export default function immutableReverse(array) {
  return [...array].reverse();
}
