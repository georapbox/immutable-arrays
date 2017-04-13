/**
 * Removes the first element from an array.
 *
 * @param {Array} array The original array.
 * @return {Array} A new array with the first element removed.
 */
export default function immutableShift(array) {
  return array.slice(1);
}
