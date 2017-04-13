/**
 * Removes existing elements and/or adds new elements to an array.
 *
 * @param {Array} array The original array.
 * @param {Number} start Zero based index at which to start changing the array.
 * @param {Number} [deleteCount] An integer indicating the number of old array elements to remove.
 * @param {*} elementN The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
 * @return {Array} The result array.
 */
export default function immutableSplice(array, start, deleteCount, ...elementN) {
  return [...array.slice(0, start), ...elementN, ...array.slice(start + deleteCount)];
}
