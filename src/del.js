/**
 * Deletes an element from an array by its index in the array.
 *
 * @param {Array} array The original array.
 * @param {Number} index The index of the element to delete in the original array. If index is a negative number, a copy of the original array is returned.
 * @return {Array} A new array with the element removed.
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = del(originalArray, 2);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'd', 'e']
 *
 * const resultArray2 = del(originalArray, -1);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray2 ['a', 'b', 'c', 'd', 'e']
 */
export function del(array, index) {
  return index >= 0 ? [...array.slice(0, index), ...array.slice(index + 1)] : [...array];
}
