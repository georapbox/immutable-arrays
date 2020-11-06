import { reverse } from '../src/reverse';

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = reverse(originalArray);

describe('immutable-reverse', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).not.toEqual(resultArray);
  });

  it('original and result arrays should have equal length', () => {
    expect(resultArray).toHaveLength(originalArray.length);
  });

  it('elements in result array should be reversed', () => {
    expect(resultArray).toEqual(['e', 'd', 'c', 'b', 'a']);
  });
});
