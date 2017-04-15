/**
 * Sorts the elements of an array (not in place) and returns a sorted array.
 *
 * @param {Array} array The original array.
 * @param {Function} [compareFunction] Specifies a function that defines the sort order.
 *        If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
 * @return {Array} A new sorted array.
 * @example
 *
 * const numberArray = [20, 3, 4, 10, -3, 1, 0, 5];
 * const stringArray = ['Blue', 'Humpback', 'Beluga'];
 *
 * const resultArray = immutableSort(numberArray, (a, b) => a - b);
 * // -> numberArray [20, 3, 4, 10, -3, 1, 0, 5]
 * // -> resultArray [-3, 0, 1, 3, 4, 5, 10, 20]
 *
 * const resultArray = immutableSort(numberArray, (a, b) => b - a);
 * // -> numberArray [20, 3, 4, 10, -3, 1, 0, 5]
 * // -> resultArray [20, 10, 5, 4, 3, 1, 0, -3]
 *
 * const resultArray = immutableSort(stringArray);
 * // -> stringArray ['Blue', 'Humpback', 'Beluga']
 * // -> resultArray ['Beluga', 'Blue', 'Humpback']
 *
 * const resultArray = immutableSort(stringArray, (a, b) => a.toLowerCase() < b.toLowerCase());
 * // -> stringArray ['Blue', 'Humpback', 'Beluga']
 * // -> resultArray ['Humpback', 'Blue', 'Beluga']
 */
export default function immutableSort(array, compareFunction) {
  return [...array].sort(compareFunction);
}
