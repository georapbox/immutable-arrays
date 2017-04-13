/**
 * Reverses an array (not in place).
 * The first array element becomes the last, and the last array element becomes the first.
 *
 * @param {Array} array The original array.
 * @return {Array} A new array reversed.
 */
export default function immutableReverse(array) {
  return [...array].reverse();
}
