import { sort } from '../src/sort';

const numberArray = [20, 3, 4, 10, -3, 1, 0, 5];
const stringArray = ['Blue', 'Humpback', 'Beluga'];

describe('immutable-sort', () => {
  it('original array should stay untouched', () => {
    const resultArray = sort(numberArray, (a, b) => a - b);
    expect(numberArray).not.toEqual(resultArray);
  });

  it('sorts numeric array (ascending)', () => {
    const resultArray = sort(numberArray, (a, b) => a - b);
    expect(resultArray).toEqual([-3, 0, 1, 3, 4, 5, 10, 20]);
  });

  it('sorts numeric array (descending)', () => {
    const resultArray = sort(numberArray, (a, b) => b - a);
    expect(resultArray).toEqual([20, 10, 5, 4, 3, 1, 0, -3]);
  });

  it('sorts string array (without compareFunction) (ascending)', () => {
    const resultArray = sort(stringArray);
    expect(resultArray).toEqual(['Beluga', 'Blue', 'Humpback']);
  });
});
