import { push } from '../src/push';

const originalArray = ['a', 'b', 'c', 'd', 'e'];
const resultArray = push(originalArray, 'f', 'g');

describe('immutable-push', () => {
  it('original array should stay untouched', () => {
    expect(originalArray).not.toEqual(resultArray);
  });

  it('should have length 7', () => {
    expect(resultArray).toHaveLength(7);
  });

  it('elements at index 5 and 6 should be "f" and "g" respectively', () => {
    expect(resultArray[5]).toEqual('f');
    expect(resultArray[6]).toEqual('g');
  });
});
