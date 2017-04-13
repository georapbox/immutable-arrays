/**
 * Adds one or more elements to the beginning of an array.
 *
 * @param {Array} array The original array.
 * @param {*} elementN [description] The elements to add to the front of the array.
 * @return {Array} A new array with the new elements added to the front.
 */
export default function immutableUnshift(array, ...elementN) {
  return [...elementN, ...array];
}
