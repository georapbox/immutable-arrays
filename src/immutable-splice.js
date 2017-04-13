/**
 * Removes existing elements and/or adds new elements to an array.
 *
 * @param {Array} array The original array.
 * @param {Number} [start = array.length]
 *        Zero based index at which to start changing the array.
 *        If greater than the length of the array, actual starting index will be set to the length of the array.
 * @param {Number} [deleteCount = array.length - start]
 *        An integer indicating the number of old array elements to remove.
 *        If `deleteCount` is 0, no elements are removed.
 *        If `deleteCount` is lower than 0, `deleteCount` will be equal to 0.
 *        If `deleteCount` is greater than the number of elements left in the array starting at
 *        `start`, then all of the elements through the end of the array will be deleted.
 *        If `deleteCount` is omitted, `deleteCount` will be equal to (`array.length - start`),
 *        i.e., all of the elements beginning with `start` index on through the end of the array will be deleted.
 * @param {*} [elementN]
 *        The elements to add to the array, beginning at the start index.
 *        If you don't specify any elements, will only remove elements from the array.
 * @return {Array} The result array.
 *
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray []
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, 1);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['b', 'c', 'd', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, 3);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['d', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, originalArray.length);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray []
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, -3);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'd', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, 0, 'lorem', 'ipsum');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['lorem', 'ipsum', 'a', 'b', 'c', 'd', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, originalArray.length, 0, 'lorem', 'ipsum');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'd', 'e', 'lorem', 'ipsum']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, 2, 'lorem', 'ipsum');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['lorem', 'ipsum', 'c', 'd', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, originalArray.length - 2, 2, 'lorem', 'ipsum');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'lorem', 'ipsum']
 */
export default function immutableSplice(array, start = array.length, deleteCount = array.length - start, ...elementN) {
  return [
    ...array.slice(0, start),
    ...elementN,
    ...array.slice(start + (deleteCount < 0 ? 0 : deleteCount))
  ];
}
