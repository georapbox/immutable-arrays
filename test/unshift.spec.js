import { unshift } from '../src/unshift';

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = unshift(originalArray, 'f', 'g');

describe('immutable-unshift', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).not.toEqual(resultArray);
  });

  it('should have length 7', () => {
    expect(resultArray).toHaveLength(7);
  });

  it('elements at index 0 and 1 should now be "f" and "g" respectively', () => {
    expect(resultArray[0]).toEqual('f');
    expect(resultArray[1]).toEqual('g');
  });
});
