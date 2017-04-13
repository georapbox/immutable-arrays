/**
 * Deletes an element from an array by its index in the array.
 *
 * @param {Array} array The original array.
 * @param {Number} index The index of the element to delete in the original array.
 * @return {Array} A new array with the element removed.
 */
export default function immutableDelete(array, index) {
  return index > 0
    ? array.slice(0, index).concat(array.slice(index + 1))
    : array.slice(0);
}
