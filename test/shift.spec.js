import { shift } from '../src/shift';

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = shift(originalArray);

describe('immutable-shift', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).not.toEqual(resultArray);
  });

  it('should have length 4', () => {
    expect(resultArray).toHaveLength(4);
  });

  it('element at index 0 should now be "b"', () => {
    expect(resultArray[0]).toEqual('b');
  });
});
